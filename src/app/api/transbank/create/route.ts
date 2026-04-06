import { NextResponse } from "next/server";
import {
  WebpayPlus,
  Options,
  Environment,
  IntegrationCommerceCodes,
  IntegrationApiKeys,
} from "transbank-sdk";
import { getProductById } from "@/lib/products";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { rateLimit, csrfCheck } from "@/lib/api-security";

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
  const rlResponse = rateLimit(request);
  if (rlResponse) return rlResponse;

  const csrfResponse = csrfCheck(request);
  if (csrfResponse) return csrfResponse;

  try {
    const { items, billing } = await request.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Carrito vacío" }, { status: 400 });
    }

    // Calculate total from product catalog (server-side, not trusting client)
    let total = 0;
    for (const item of items) {
      const product = getProductById(item.productId);
      if (!product) {
        return NextResponse.json(
          { error: `Producto no disponible para compra: ${item.productId}` },
          { status: 400 }
        );
      }
      const unitPrice = item.withInstallation
        ? product.todoIncluidoPrice
        : product.price;
      if (unitPrice === 0) {
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
      total += unitPrice * item.quantity;
    }

    const buyOrder = `MESER-${Date.now()}`;
    const sessionId = `SES-${Date.now()}`;
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const returnUrl = `${baseUrl}/api/transbank/confirm`;

    const tx = getTx();
    const response = await tx.create(buyOrder, sessionId, total, returnUrl);

    // Guardar pedido pendiente en Supabase
    const itemsDetail = items.map((item: { productId: string; quantity: number; withInstallation?: boolean }) => {
      const product = getProductById(item.productId)!;
      const unitPrice = item.withInstallation ? product.todoIncluidoPrice : product.price;
      return {
        productId: item.productId,
        name: product.name,
        quantity: item.quantity,
        unitPrice,
        withInstallation: !!item.withInstallation,
      };
    });

    await getSupabaseAdmin().from("meser_pedidos").insert({
      buy_order: buyOrder,
      session_id: sessionId,
      estado: "pendiente",
      nombre: billing?.nombre || null,
      apellidos: billing?.apellidos || null,
      rut: billing?.rut || null,
      telefono: billing?.telefono || null,
      email: billing?.email || null,
      direccion: billing?.direccion || null,
      depto: billing?.depto || null,
      comuna: billing?.comuna || null,
      notas: billing?.notas || null,
      items: itemsDetail,
      total,
    });

    return NextResponse.json({
      url: response.url,
      token: response.token,
    });
  } catch (error) {
    console.error("Transbank create error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Error al crear transacción", detail: errorMessage },
      { status: 500 }
    );
  }
}
