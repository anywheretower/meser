import { NextResponse } from "next/server";
import {
  WebpayPlus,
  Options,
  Environment,
  IntegrationCommerceCodes,
  IntegrationApiKeys,
} from "transbank-sdk";
import { getProductById } from "@/lib/products";

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

export async function POST(request: Request) {
  try {
    const { items } = await request.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Carrito vacío" }, { status: 400 });
    }

    // Calculate total from product catalog (server-side, not trusting client)
    let total = 0;
    for (const item of items) {
      const product = getProductById(item.productId);
      if (!product || product.price === 0) {
        return NextResponse.json(
          { error: `Producto no disponible para compra: ${item.productId}` },
          { status: 400 }
        );
      }
      if (!item.quantity || item.quantity < 1 || item.quantity > 10) {
        return NextResponse.json(
          { error: "Cantidad inválida" },
          { status: 400 }
        );
      }
      total += product.price * item.quantity;
    }

    const buyOrder = `MESER-${Date.now()}`;
    const sessionId = `SES-${Date.now()}`;
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const returnUrl = `${baseUrl}/api/transbank/confirm`;

    const tx = getTx();
    const response = await tx.create(buyOrder, sessionId, total, returnUrl);

    return NextResponse.json({
      url: response.url,
      token: response.token,
    });
  } catch (error) {
    console.error("Transbank create error:", error);
    return NextResponse.json(
      { error: "Error al crear transacción" },
      { status: 500 }
    );
  }
}
