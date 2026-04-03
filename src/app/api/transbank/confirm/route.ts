import { NextResponse } from "next/server";
import {
  WebpayPlus,
  Options,
  Environment,
  IntegrationCommerceCodes,
  IntegrationApiKeys,
} from "transbank-sdk";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { formatPrice } from "@/lib/products";

const resend = new Resend(process.env.RESEND_API_KEY);

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

interface PedidoItem {
  name: string;
  quantity: number;
  unitPrice: number;
  withInstallation: boolean;
}

async function handleConfirmation(tokenWs: string) {
  const tx = getTx();
  const result = await tx.commit(tokenWs);

  if (result.response_code === 0) {
    // Pago exitoso — actualizar pedido
    const cardLast4 = result.card_detail?.card_number || null;
    await getSupabaseAdmin()
      .from("meser_pedidos")
      .update({
        estado: "pagado",
        authorization_code: result.authorization_code,
        payment_type: result.payment_type_code,
        installments: result.installments_number,
        card_last4: cardLast4,
        paid_at: new Date().toISOString(),
      })
      .eq("buy_order", result.buy_order);

    // Enviar email de notificación
    try {
      const { data: pedido } = await getSupabaseAdmin()
        .from("meser_pedidos")
        .select("*")
        .eq("buy_order", result.buy_order)
        .single();

      if (pedido) {
        const items = (pedido.items as PedidoItem[]) || [];
        const itemsHtml = items
          .map(
            (i) =>
              `<tr>
                <td style="padding:8px;border-bottom:1px solid #eee">${i.name}</td>
                <td style="padding:8px;border-bottom:1px solid #eee;text-align:center">${i.quantity}</td>
                <td style="padding:8px;border-bottom:1px solid #eee;text-align:center">${i.withInstallation ? "Sí" : "No"}</td>
                <td style="padding:8px;border-bottom:1px solid #eee;text-align:right">${formatPrice(i.unitPrice * i.quantity)}</td>
              </tr>`
          )
          .join("");

        await resend.emails.send({
          from: "Meser <pedidos@meser.cl>",
          to: ["contacto@meser.cl", "comercialmeser@gmail.com"],
          subject: `Nuevo pedido pagado — ${result.buy_order}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
              <h2 style="color:#1a1a1a">Nuevo pedido pagado</h2>
              <p><strong>Orden:</strong> ${result.buy_order}</p>
              <p><strong>Autorización:</strong> ${result.authorization_code}</p>
              <p><strong>Tarjeta:</strong> **** ${cardLast4 || "N/A"}</p>

              <h3 style="margin-top:24px;color:#333">Datos del cliente</h3>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:4px 8px;color:#666">Nombre</td><td style="padding:4px 8px">${pedido.nombre || ""} ${pedido.apellidos || ""}</td></tr>
                <tr><td style="padding:4px 8px;color:#666">RUT</td><td style="padding:4px 8px">${pedido.rut || "—"}</td></tr>
                <tr><td style="padding:4px 8px;color:#666">Teléfono</td><td style="padding:4px 8px">${pedido.telefono || "—"}</td></tr>
                <tr><td style="padding:4px 8px;color:#666">Email</td><td style="padding:4px 8px">${pedido.email || "—"}</td></tr>
                <tr><td style="padding:4px 8px;color:#666">Dirección</td><td style="padding:4px 8px">${pedido.direccion || "—"}${pedido.depto ? `, Depto ${pedido.depto}` : ""}</td></tr>
                <tr><td style="padding:4px 8px;color:#666">Comuna</td><td style="padding:4px 8px">${pedido.comuna || "—"}</td></tr>
                ${pedido.notas ? `<tr><td style="padding:4px 8px;color:#666">Notas</td><td style="padding:4px 8px">${pedido.notas}</td></tr>` : ""}
              </table>

              <h3 style="margin-top:24px;color:#333">Productos</h3>
              <table style="width:100%;border-collapse:collapse">
                <thead>
                  <tr style="background:#f5f5f5">
                    <th style="padding:8px;text-align:left">Producto</th>
                    <th style="padding:8px;text-align:center">Cant.</th>
                    <th style="padding:8px;text-align:center">Instalación</th>
                    <th style="padding:8px;text-align:right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>${itemsHtml}</tbody>
              </table>

              <p style="margin-top:16px;font-size:18px;font-weight:bold;text-align:right">
                Total: ${formatPrice(pedido.total)}
              </p>
            </div>
          `,
        });

        // Email de confirmación al cliente
        if (pedido.email) {
          const clientItemsHtml = items
            .map(
              (i) =>
                `<tr>
                  <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;color:#333">${i.name}</td>
                  <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;text-align:center;color:#333">${i.quantity}</td>
                  <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;text-align:center;color:#333">${i.withInstallation ? "Incluida" : "No"}</td>
                  <td style="padding:12px 16px;border-bottom:1px solid #f0f0f0;text-align:right;font-weight:600;color:#333">${formatPrice(i.unitPrice * i.quantity)}</td>
                </tr>`
            )
            .join("");

          await resend.emails.send({
            from: "Meser <pedidos@meser.cl>",
            to: [pedido.email],
            subject: `Confirmación de compra — ${result.buy_order}`,
            html: `
              <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;background:#ffffff">
                <!-- Header -->
                <div style="background:#1a1a1a;padding:24px 32px;text-align:center">
                  <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:600">MESER</h1>
                  <p style="color:#999;margin:4px 0 0;font-size:13px">Climatización Profesional</p>
                </div>

                <!-- Confirmación -->
                <div style="padding:32px;text-align:center;background:#f0fdf4;border-bottom:1px solid #e5e7eb">
                  <div style="font-size:48px;margin-bottom:8px">&#10003;</div>
                  <h2 style="color:#16a34a;margin:0 0 8px;font-size:20px">¡Pago confirmado!</h2>
                  <p style="color:#666;margin:0;font-size:14px">Tu compra se procesó exitosamente</p>
                </div>

                <!-- Datos del pedido -->
                <div style="padding:24px 32px;border-bottom:1px solid #e5e7eb">
                  <table style="width:100%">
                    <tr>
                      <td style="padding:4px 0;color:#999;font-size:13px">N° de orden</td>
                      <td style="padding:4px 0;text-align:right;font-weight:600;color:#333;font-size:13px">${result.buy_order}</td>
                    </tr>
                    <tr>
                      <td style="padding:4px 0;color:#999;font-size:13px">Código autorización</td>
                      <td style="padding:4px 0;text-align:right;font-weight:600;color:#333;font-size:13px">${result.authorization_code}</td>
                    </tr>
                    <tr>
                      <td style="padding:4px 0;color:#999;font-size:13px">Tarjeta</td>
                      <td style="padding:4px 0;text-align:right;color:#333;font-size:13px">**** ${cardLast4 || "N/A"}</td>
                    </tr>
                  </table>
                </div>

                <!-- Productos -->
                <div style="padding:24px 32px;border-bottom:1px solid #e5e7eb">
                  <h3 style="color:#333;margin:0 0 16px;font-size:15px">Detalle de tu compra</h3>
                  <table style="width:100%;border-collapse:collapse">
                    <thead>
                      <tr style="background:#f9fafb">
                        <th style="padding:10px 16px;text-align:left;font-size:12px;color:#666;text-transform:uppercase;letter-spacing:0.5px">Producto</th>
                        <th style="padding:10px 16px;text-align:center;font-size:12px;color:#666;text-transform:uppercase;letter-spacing:0.5px">Cant.</th>
                        <th style="padding:10px 16px;text-align:center;font-size:12px;color:#666;text-transform:uppercase;letter-spacing:0.5px">Instalación</th>
                        <th style="padding:10px 16px;text-align:right;font-size:12px;color:#666;text-transform:uppercase;letter-spacing:0.5px">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>${clientItemsHtml}</tbody>
                  </table>
                  <div style="margin-top:16px;padding-top:16px;border-top:2px solid #333;text-align:right">
                    <span style="font-size:14px;color:#666">Total pagado: </span>
                    <span style="font-size:22px;font-weight:700;color:#333">${formatPrice(pedido.total)}</span>
                  </div>
                </div>

                <!-- Dirección de entrega -->
                <div style="padding:24px 32px;border-bottom:1px solid #e5e7eb">
                  <h3 style="color:#333;margin:0 0 12px;font-size:15px">Dirección de entrega</h3>
                  <p style="color:#555;margin:0;font-size:14px;line-height:1.5">
                    ${pedido.nombre || ""} ${pedido.apellidos || ""}<br>
                    ${pedido.direccion || ""}${pedido.depto ? `, Depto ${pedido.depto}` : ""}<br>
                    ${pedido.comuna || ""}
                  </p>
                </div>

                <!-- Próximos pasos -->
                <div style="padding:24px 32px;background:#f9fafb;border-bottom:1px solid #e5e7eb">
                  <h3 style="color:#333;margin:0 0 12px;font-size:15px">Próximos pasos</h3>
                  <p style="color:#555;margin:0;font-size:14px;line-height:1.6">
                    Nuestro equipo se pondrá en contacto contigo dentro de las próximas <strong>24 horas hábiles</strong> para coordinar la entrega${items.some((i) => i.withInstallation) ? " e instalación" : ""} de tu equipo.
                  </p>
                </div>

                <!-- Contacto -->
                <div style="padding:24px 32px;text-align:center">
                  <p style="color:#999;font-size:13px;margin:0 0 8px">¿Tienes alguna duda?</p>
                  <p style="margin:0">
                    <a href="https://wa.me/56962569241" style="color:#25d366;text-decoration:none;font-weight:600;font-size:14px">WhatsApp: +56 9 6256 9241</a>
                  </p>
                  <p style="margin:4px 0 0">
                    <a href="mailto:contacto@meser.cl" style="color:#333;text-decoration:none;font-size:14px">contacto@meser.cl</a>
                  </p>
                </div>

                <!-- Footer -->
                <div style="background:#1a1a1a;padding:16px 32px;text-align:center">
                  <p style="color:#666;margin:0;font-size:12px">
                    MESER — Climatización Profesional | meser.cl
                  </p>
                </div>
              </div>
            `,
          });
        }
      }
    } catch (emailErr) {
      console.error("Error enviando email de pedido:", emailErr);
    }

    return buildRedirect(
      `/pago/confirmacion?status=success&order=${result.buy_order}&amount=${result.amount}`
    );
  }

  // Pago rechazado
  await getSupabaseAdmin()
    .from("meser_pedidos")
    .update({ estado: "rechazado" })
    .eq("buy_order", result.buy_order);

  return buildRedirect(
    `/pago/confirmacion?status=rejected&code=${result.response_code}`
  );
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const tokenWs = formData.get("token_ws") as string | null;
    const tbkToken = formData.get("TBK_TOKEN") as string | null;

    if (!tokenWs && tbkToken) {
      return buildRedirect("/pago/confirmacion?status=aborted");
    }

    if (!tokenWs) {
      return buildRedirect("/pago/confirmacion?status=error");
    }

    return await handleConfirmation(tokenWs);
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
    return await handleConfirmation(tokenWs);
  } catch (error) {
    console.error("Transbank confirm GET error:", error);
    return buildRedirect("/pago/confirmacion?status=error");
  }
}
