import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Garantía Total Meser · Equipo + Instalación",
  description:
    "Garantía total Meser: cubre equipo e instalación. Si algo falla, nosotros nos hacemos cargo. Sin derivarte al fabricante, sin trámites.",
};

export default function GarantiaPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy">
            Garantía total Meser
          </h1>
          <p className="mt-4 text-lg text-steel-dark leading-relaxed">
            Cuando compras con Meser, tu garantía cubre todo: equipo e
            instalación. Si algo falla, nosotros nos hacemos cargo directamente.
          </p>
        </div>
      </section>

      {/* Qué cubre */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy">¿Qué cubre?</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-gray-200 p-6">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-green-500 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-navy">
                Garantía del equipo
              </h3>
              <p className="mt-2 text-sm text-steel-dark leading-relaxed">
                Cubre defectos de fabricación del equipo de aire acondicionado.
                Según las condiciones del fabricante (Samsung o Midea), con
                respaldo directo de Meser.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-green-500 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-navy">
                Garantía de la instalación
              </h3>
              <p className="mt-2 text-sm text-steel-dark leading-relaxed">
                Cubre cualquier problema relacionado con la instalación:
                filtraciones, conexiones, montaje, canaletas. Si algo de la
                instalación falla, lo reparamos sin costo.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-green-500 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-navy">
                Soporte directo
              </h3>
              <p className="mt-2 text-sm text-steel-dark leading-relaxed">
                No te derivamos al fabricante. No te mandamos a un call center.
                Hablas directo con nosotros y coordinamos la solución.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6">
              <div className="w-10 h-10 rounded-xl bg-green-50 text-green-500 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-navy">
                Sin trámites
              </h3>
              <p className="mt-2 text-sm text-steel-dark leading-relaxed">
                Si tienes un problema, nos contactas por WhatsApp o teléfono.
                Nosotros nos encargamos de todo el proceso de garantía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativa */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center">
            Garantía Meser vs. el resto
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Aspecto
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Meser
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    Otros
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Cubre equipo", "Sí", "Sí (solo equipo)"],
                  ["Cubre instalación", "Sí", "No"],
                  ["Contacto directo", "WhatsApp / teléfono", "Call center"],
                  ["Quién responde", "Meser directo", "\"Llame al fabricante\""],
                  ["Trámites", "Cero — nosotros gestionamos", "Boletas, formularios, espera"],
                ].map(([aspecto, meser, otros], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      {aspecto}
                    </td>
                    <td className="px-6 py-4 text-sm text-center font-medium text-green-600">
                      {meser}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-steel-dark">
                      {otros}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cómo activar */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy">
            ¿Cómo activo mi garantía?
          </h2>
          <div className="mt-8 space-y-4">
            {[
              {
                step: "1",
                title: "Contáctanos",
                text: "Llámanos o escríbenos por WhatsApp al +569 8235 1110. Cuéntanos qué pasó.",
              },
              {
                step: "2",
                title: "Diagnóstico",
                text: "Evaluamos el problema (por teléfono, video o visita técnica según corresponda).",
              },
              {
                step: "3",
                title: "Solución",
                text: "Reparamos, reemplazamos o ajustamos lo que sea necesario. Sin costo dentro de la garantía.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 rounded-xl bg-white border border-gray-200 p-6"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan text-navy text-sm font-bold shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-steel-dark">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres comprar con la tranquilidad de una garantía real?"
        text="Todos nuestros paquetes incluyen garantía total: equipo + instalación. Agenda tu asesoría gratuita."
      />
    </>
  );
}
