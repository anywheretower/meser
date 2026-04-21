import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de tratamiento de datos personales de Meser. Conforme a la Ley N° 19.628 sobre Protección de la Vida Privada de Chile.",
  alternates: { canonical: "/politica-privacidad" },
  openGraph: { url: "/politica-privacidad" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Política de Privacidad" }]} />

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">
            Política de Privacidad
          </h1>
          <p className="mt-4 text-sm text-steel-dark">
            Última actualización: 20 de abril de 2026
          </p>

          <div className="mt-10 space-y-10 text-sm text-navy/80 leading-relaxed">
            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                1. Marco legal aplicable
              </h2>
              <p className="mt-3">
                Esta política se rige por la{" "}
                <strong>
                  Ley N° 19.628 sobre Protección de la Vida Privada
                </strong>{" "}
                de Chile y su modificación por la Ley N° 21.719 de 2024. Meser
                es responsable del tratamiento de los datos personales que
                recopila a través de este sitio.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                2. Responsable del tratamiento
              </h2>
              <ul className="mt-3 space-y-1">
                <li>
                  <strong>Nombre:</strong> Meser SpA
                </li>
                <li>
                  <strong>Dirección:</strong> Los Militares 5620, Of. 905, Las
                  Condes, Santiago
                </li>
                <li>
                  <strong>Email:</strong> contacto@meser.cl
                </li>
                <li>
                  <strong>WhatsApp:</strong> +569 8235 1110
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                3. Datos que recopilamos
              </h2>
              <p className="mt-3">
                Recopilamos los siguientes datos personales cuando usted
                solicita una cotización, agenda una visita, realiza una compra
                o contacta a nuestro equipo:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Nombre y apellido.</li>
                <li>Teléfono y dirección de correo electrónico.</li>
                <li>Dirección de instalación (comuna, calle, número).</li>
                <li>
                  RUT y datos de facturación, sólo cuando realiza una compra.
                </li>
                <li>
                  Información técnica sobre el espacio a climatizar (metros
                  cuadrados, número de ambientes, tipo de vivienda).
                </li>
                <li>
                  Datos de navegación (cookies, dirección IP, dispositivo,
                  origen de referido) con fines de medición y mejora del sitio.
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                4. Finalidades del tratamiento
              </h2>
              <p className="mt-3">Utilizamos sus datos para:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Generar cotizaciones y agendar visitas técnicas.</li>
                <li>
                  Procesar compras, pagos y emitir documentos tributarios.
                </li>
                <li>Coordinar entregas, instalaciones y mantenciones.</li>
                <li>
                  Enviar comunicaciones de servicio (confirmaciones, avisos de
                  agenda, seguimiento post-venta).
                </li>
                <li>
                  Cumplir obligaciones legales (facturación, garantía,
                  requerimientos de SERNAC o el SII).
                </li>
                <li>
                  Mejorar el sitio mediante análisis agregado y anónimo de
                  navegación.
                </li>
              </ul>
              <p className="mt-3">
                No vendemos sus datos a terceros. Las comunicaciones de
                marketing requieren su consentimiento expreso y puede
                revocarlo en cualquier momento.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                5. Terceros con acceso a sus datos
              </h2>
              <p className="mt-3">
                Compartimos datos únicamente con proveedores necesarios para
                prestar el servicio:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  <strong>Transbank</strong> — procesamiento de pagos con tarjeta
                  (Webpay).
                </li>
                <li>
                  <strong>Supabase</strong> — base de datos de cotizaciones y
                  pedidos (servidores en Estados Unidos).
                </li>
                <li>
                  <strong>Google Analytics y Google Tag Manager</strong> —
                  medición agregada de uso del sitio.
                </li>
                <li>
                  <strong>Proveedores logísticos e instaladores</strong> —
                  coordinación de entregas e instalaciones.
                </li>
              </ul>
              <p className="mt-3">
                Cada proveedor recibe únicamente los datos estrictamente
                necesarios para su función.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                6. Derechos del titular
              </h2>
              <p className="mt-3">
                Conforme a los artículos 12 y siguientes de la Ley 19.628,
                usted tiene derecho a:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  <strong>Acceso:</strong> conocer qué datos suyos tenemos.
                </li>
                <li>
                  <strong>Rectificación:</strong> corregir datos inexactos o
                  incompletos.
                </li>
                <li>
                  <strong>Cancelación:</strong> solicitar la eliminación de
                  sus datos cuando ya no sean necesarios.
                </li>
                <li>
                  <strong>Oposición:</strong> oponerse al uso de sus datos
                  con fines distintos a la prestación del servicio.
                </li>
              </ul>
              <p className="mt-3">
                Para ejercer cualquiera de estos derechos, escriba a{" "}
                <strong>contacto@meser.cl</strong> indicando su nombre, RUT y
                el derecho que desea ejercer. Respondemos dentro de 10 días
                hábiles.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                7. Plazo de conservación
              </h2>
              <p className="mt-3">
                Conservamos sus datos mientras exista una relación comercial
                activa y luego por el plazo que exijan las obligaciones
                legales (tributarias, de garantía, de responsabilidad). Datos
                de cotizaciones no concretadas se eliminan tras 24 meses de
                inactividad.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                8. Seguridad
              </h2>
              <p className="mt-3">
                Aplicamos medidas técnicas razonables para proteger sus
                datos: conexiones cifradas TLS, control de acceso a la base
                de datos, separación de secretos del código fuente y
                registros de auditoría. Ningún sistema es 100% seguro — ante
                una brecha que afecte sus datos, le notificaremos conforme a
                la ley.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                9. Cookies
              </h2>
              <p className="mt-3">
                Utilizamos cookies propias y de terceros (Google Analytics,
                Google Tag Manager) para medir el uso del sitio y recordar
                preferencias. Puede desactivarlas desde la configuración de
                su navegador. El sitio funciona sin cookies, aunque algunas
                funciones de seguimiento de conversión dejarán de operar.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-navy">
                10. Cambios a esta política
              </h2>
              <p className="mt-3">
                Podemos actualizar esta política. La versión vigente está
                siempre disponible en esta página, con la fecha de última
                actualización en la parte superior. Cambios materiales se
                comunicarán por correo a clientes activos.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">
              <p className="text-xs text-steel-dark">
                Esta política no limita los derechos que la legislación
                chilena otorga a los titulares de datos personales. En caso
                de discrepancia, prevalece la Ley N° 19.628 y la normativa
                vigente.
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-6 text-sm">
            <Link
              href="/politica-devoluciones"
              className="font-medium text-cyan hover:text-cyan-dark transition-colors"
            >
              Política de Devoluciones →
            </Link>
            <Link
              href="/contacto"
              className="font-medium text-cyan hover:text-cyan-dark transition-colors"
            >
              Contacto →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
