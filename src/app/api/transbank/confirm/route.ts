import { NextResponse } from "next/server";
import {
  WebpayPlus,
  Options,
  Environment,
  IntegrationCommerceCodes,
  IntegrationApiKeys,
} from "transbank-sdk";

function getTx() {
  const isProduction = process.env.TRANSBANK_ENVIRONMENT === "production";

  const options = isProduction
    ? new Options(
        process.env.TRANSBANK_COMMERCE_CODE!,
        process.env.TRANSBANK_API_KEY!,
        Environment.Production
      )
    : new Options(
        IntegrationCommerceCodes.WEBPAY_PLUS,
        IntegrationApiKeys.WEBPAY,
        Environment.Integration
      );

  return new WebpayPlus.Transaction(options);
}

function buildRedirect(path: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return NextResponse.redirect(new URL(path, baseUrl), { status: 303 });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const tokenWs = formData.get("token_ws") as string | null;
    const tbkToken = formData.get("TBK_TOKEN") as string | null;

    // User aborted payment
    if (!tokenWs && tbkToken) {
      return buildRedirect("/pago/confirmacion?status=aborted");
    }

    // Timeout or missing token
    if (!tokenWs) {
      return buildRedirect("/pago/confirmacion?status=error");
    }

    const tx = getTx();
    const result = await tx.commit(tokenWs);

    if (result.response_code === 0) {
      return buildRedirect(
        `/pago/confirmacion?status=success&order=${result.buy_order}&amount=${result.amount}`
      );
    }

    return buildRedirect(
      `/pago/confirmacion?status=rejected&code=${result.response_code}`
    );
  } catch (error) {
    console.error("Transbank confirm error:", error);
    return buildRedirect("/pago/confirmacion?status=error");
  }
}

// Fallback for GET (some Transbank flows)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tokenWs = searchParams.get("token_ws");
  const tbkToken = searchParams.get("TBK_TOKEN");

  if (!tokenWs && tbkToken) {
    return buildRedirect("/pago/confirmacion?status=aborted");
  }

  if (!tokenWs) {
    return buildRedirect("/pago/confirmacion?status=error");
  }

  try {
    const tx = getTx();
    const result = await tx.commit(tokenWs);

    if (result.response_code === 0) {
      return buildRedirect(
        `/pago/confirmacion?status=success&order=${result.buy_order}&amount=${result.amount}`
      );
    }

    return buildRedirect(
      `/pago/confirmacion?status=rejected&code=${result.response_code}`
    );
  } catch (error) {
    console.error("Transbank confirm GET error:", error);
    return buildRedirect("/pago/confirmacion?status=error");
  }
}
