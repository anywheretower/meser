import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit, csrfCheck, escapeHtml } from "@/lib/api-security";

export async function POST(request: Request) {
  const rlResponse = rateLimit(request);
  if (rlResponse) return rlResponse;

  const csrfResponse = csrfCheck(request);
  if (csrfResponse) return csrfResponse;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const data = await request.json();

    const { tipoEspacio, ambientes, comuna, necesidad, nombre, telefono, email, comentario } = data;

    const isQuickCapture = nombre === "Captura rápida" && telefono;

    if (!isQuickCapture && (!nombre || !telefono || !tipoEspacio || !ambientes || !comuna || !necesidad)) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 });
    }

    const necesidadLabels: Record<string, string> = {
      "todo-incluido": "Equipo + instalación (todo incluido)",
      "solo-instalacion": "Solo instalación (ya tiene equipo)",
      "mantencion": "Solo mantención",
      "asesoria": "Asesoría (no está seguro)",
    };

    const tipoLabels: Record<string, string> = {
      departamento: "Departamento",
      casa: "Casa",
      oficina: "Oficina / Local",
      otro: "Otro",
    };

    const rows = [
      { label: "Nombre", value: escapeHtml(nombre || "") },
      { label: "Teléfono", value: escapeHtml(telefono || "") },
      { label: "Email", value: escapeHtml(email || "No proporcionado") },
      { label: "Tipo de espacio", value: escapeHtml(tipoLabels[tipoEspacio] || tipoEspacio || "") },
      { label: "Ambientes", value: escapeHtml(ambientes === "4+" ? "4 o más" : (ambientes || "")) },
      { label: "Comuna", value: escapeHtml(comuna || "") },
      { label: "Necesidad", value: escapeHtml(necesidadLabels[necesidad] || necesidad || "") },
      { label: "Comentario", value: escapeHtml(comentario || "—") },
    ];

    const tableRows = rows
      .map(
        (r) =>
          `<tr>
            <td style="padding:10px 12px;font-weight:600;color:#0A1628;white-space:nowrap;border-bottom:1px solid #f0f0f0;">${r.label}</td>
            <td style="padding:10px 12px;color:#64748B;border-bottom:1px solid #f0f0f0;">${r.value}</td>
          </tr>`
      )
      .join("");

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#0A1628;padding:24px 30px;border-radius:8px 8px 0 0;">
          <h1 style="color:#00D4FF;font-size:20px;margin:0;">Nueva cotización desde meser.cl</h1>
          <p style="color:#ffffff;opacity:0.9;font-size:14px;margin:8px 0 0;">${tipoLabels[tipoEspacio] || tipoEspacio} · ${comuna} · ${ambientes} ambiente${ambientes === "1" ? "" : "s"}</p>
        </div>
        <div style="background:#ffffff;padding:24px 30px;border:1px solid #eee;border-top:none;border-radius:0 0 8px 8px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${tableRows}
          </table>
          <p style="margin-top:20px;font-size:12px;color:#999;">
            Enviado desde el formulario de cotización de meser.cl
          </p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: "Meser Web <contacto@meser.cl>",
      to: ["contacto@meser.cl", "comercialmeser@gmail.com"],
      replyTo: email || undefined,
      subject: `Nueva cotización — ${escapeHtml(nombre || "")} · ${escapeHtml(tipoLabels[tipoEspacio] || tipoEspacio || "")} · ${escapeHtml(comuna || "")}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API contacto error:", err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
