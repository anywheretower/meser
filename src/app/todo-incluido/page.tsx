import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import AddPackageButton from "@/components/AddPackageButton";
import Breadcrumbs from "@/components/Breadcrumbs";


export const metadata: Metadata = {
  title: "Aire Acondicionado Todo Incluido desde $399.990",
  alternates: { canonical: "/todo-incluido" },
  description:
    "Aire acondicionado Inverter frío/calor + instalación + garantía desde $399.990. Precio cerrado, cero sorpresas. Ahorra hasta $222.000 vs comprar por separado.",
};

export default function TodoIncluidoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Servicios", href: "/climatizacion-integral" }, { label: "Todo Incluido" }]} />
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan/10 border border-cyan/20 px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-cyan">
                Keyword sin competencia — Quality Score 10/10
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Aire acondicionado con instalación incluida desde{" "}
              <span className="text-cyan">$399.990</span>
            </h1>
            <p className="mt-4 text-lg text-cyan font-medium">
              Equipo Inverter frío/calor + instalación estética + garantía
              total. Un precio. Cero sorpresas.
            </p>
            <p className="mt-6 text-lg text-steel-light leading-relaxed max-w-2xl">
              ¿Cansado de cotizar el equipo por un lado, la instalación por
              otro, y que al final aparezcan &ldquo;extras&rdquo;? En Meser el precio
              incluye todo. El precio que te damos es el precio que pagas. Punto.
            </p>
            <div className="mt-10">
              <Link
                href="#agendar"
                className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
              >
                Consulta tu precio cerrado
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Paquetes */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Elige tu paquete todo incluido
          </h2>
          <p className="mt-3 text-center text-sm font-medium text-red-600">
            Precios válidos hasta el 31 de marzo 2026 o agotar stock
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Habitación */}
            <div className="rounded-2xl border border-gray-200 p-8 hover:border-cyan hover:shadow-lg transition-all">
              <div className="text-sm font-medium text-cyan uppercase tracking-wider">
                Paquete Habitación
              </div>
              <div className="mt-1 text-sm text-steel-dark">Hasta 18 m²</div>
              <div className="mt-4">
                <span className="text-sm text-steel line-through">$549.990</span>
                <span className="ml-2 text-3xl font-bold text-navy">
                  $399.990
                </span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Equipo Inverter 9.000 BTU frío/calor",
                  "WiFi + opción IA según modelo",
                  "Instalación estética completa",
                  "Garantía total Meser",
                  "Hasta 3 cuotas sin interés",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy/80">
                    <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-steel-dark">
                Ideal para: dormitorio, estudio, oficina pequeña
              </p>
              <AddPackageButton
                productId="midea-ecomaster-9k"
                className="mt-6 block w-full text-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors cursor-pointer"
              >
                Quiero este paquete
              </AddPackageButton>
            </div>

            {/* Living — destacado */}
            <div className="relative rounded-2xl border-2 border-cyan p-8 shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan px-4 py-1 text-xs font-semibold text-navy">
                Más popular
              </div>
              <div className="text-sm font-medium text-cyan uppercase tracking-wider">
                Paquete Living
              </div>
              <div className="mt-1 text-sm text-steel-dark">Hasta 24 m²</div>
              <div className="mt-4">
                <span className="text-sm text-steel line-through">$629.990</span>
                <span className="ml-2 text-3xl font-bold text-navy">
                  $449.990
                </span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Equipo Inverter 12.000 BTU frío/calor",
                  "WiFi + IA (aprende tus hábitos)",
                  "Instalación estética completa",
                  "Garantía total Meser",
                  "Hasta 3 cuotas sin interés",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy/80">
                    <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-steel-dark">
                Ideal para: living-comedor, sala de estar
              </p>
              <AddPackageButton
                productId="midea-ecomaster-12k"
                className="mt-6 block w-full text-center rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors cursor-pointer"
              >
                Quiero este paquete
              </AddPackageButton>
            </div>

            {/* Espacios Grandes */}
            <div className="rounded-2xl border border-gray-200 p-8 hover:border-cyan hover:shadow-lg transition-all">
              <div className="text-sm font-medium text-cyan uppercase tracking-wider">
                Espacios Grandes
              </div>
              <div className="mt-1 text-sm text-steel-dark">Hasta 32 m²</div>
              <div className="mt-4">
                <span className="text-sm text-steel line-through">$899.990</span>
                <span className="ml-2 text-3xl font-bold text-navy">
                  $629.990
                </span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Equipo Inverter 18.000 BTU frío/calor",
                  "WiFi",
                  "Instalación estética completa",
                  "Garantía total Meser",
                  "Hasta 3 cuotas sin interés",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-navy/80">
                    <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-steel-dark">
                Ideal para: living amplio, local comercial pequeño
              </p>
              <AddPackageButton
                productId="midea-ecomaster-18k"
                className="mt-6 block w-full text-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors cursor-pointer"
              >
                Quiero este paquete
              </AddPackageButton>
            </div>
          </div>

          {/* Paquetes adicionales */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mansarda */}
            <div className="rounded-2xl border border-gray-200 p-8 hover:border-cyan hover:shadow-lg transition-all">
              <div className="text-sm font-medium text-cyan uppercase tracking-wider">
                Mansarda / Espacio Complejo
              </div>
              <div className="mt-4">
                <span className="text-sm text-steel">Desde</span>
                <span className="ml-1 text-2xl font-bold text-navy">
                  $649.990
                </span>
                <span className="text-sm text-steel-dark ml-1">todo incluido</span>
              </div>
              <p className="mt-3 text-sm text-steel-dark leading-relaxed">
                Equipo Consola Inverter 14.000-18.000 BTU + instalación a medida
                con diagnóstico experto. Ideal para mansardas, techos inclinados,
                espacios difíciles.
              </p>
              <Link
                href="#agendar"
                className="mt-6 inline-flex text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
              >
                Cotizar mi espacio →
              </Link>
            </div>

            {/* Multi Split */}
            <div className="rounded-2xl border border-gray-200 p-8 hover:border-cyan hover:shadow-lg transition-all">
              <div className="text-sm font-medium text-cyan uppercase tracking-wider">
                Multi Ambiente (Multi Split)
              </div>
              <div className="mt-4">
                <span className="text-2xl font-bold text-navy">
                  Cotización personalizada
                </span>
              </div>
              <p className="mt-3 text-sm text-steel-dark leading-relaxed">
                1 equipo exterior + múltiples interiores. Ideal para
                departamentos y casas que necesitan climatizar varios ambientes
                sin saturar la fachada.
              </p>
              <Link
                href="#agendar"
                className="mt-6 inline-flex text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
              >
                Agendar diagnóstico →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qué incluye "todo incluido" */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Cuando decimos &ldquo;todo incluido&rdquo;, es TODO
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Equipo Inverter frío/calor de marca (Samsung o Midea)",
              "Instalación profesional estética",
              "Cañerías con aislación térmica",
              "Canaletas ocultas",
              "Conexión eléctrica",
              "Desagüe",
              "Perforación de muro",
              "Puesta en marcha y prueba",
              "Inducción de uso",
              "Garantía total Meser (equipo + instalación)",
              "Diagnóstico experto previo por Zoom",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white border border-gray-200 px-5 py-4"
              >
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-navy">{item}</span>
              </div>
            ))}
            <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-100 px-5 py-4">
              <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-sm text-navy">
                NO incluye (porque no existe): costos ocultos, extras sorpresa
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativa de precios */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            La matemática no miente
          </h2>
          <p className="mt-4 text-lg text-steel-dark text-center">
            Compara y decide
          </p>
          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-navy">
                    Concepto
                  </th>
                  <th className="bg-gray-50 px-6 py-4 text-center text-sm font-semibold text-steel-dark">
                    Comprar por separado
                  </th>
                  <th className="bg-navy px-6 py-4 text-center text-sm font-semibold text-white">
                    Meser Todo Incluido
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Equipo 9K BTU", "~$320.000", "Incluido"],
                  ["Instalación", "$180.000 - $222.000", "Incluido"],
                  ["Materiales extras", "$30.000 - $50.000", "Incluido"],
                  ["Diagnóstico previo", "No incluido / $30.000+", "Gratis"],
                  ["Garantía integral", "Solo equipo", "Equipo + instalación"],
                ].map(([concept, separate, meser], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      {concept}
                    </td>
                    <td className="px-6 py-4 text-sm text-steel-dark text-center">
                      {separate}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-cyan text-center bg-navy/5">
                      {meser}
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-bold">
                  <td className="px-6 py-4 text-sm text-navy">Total</td>
                  <td className="px-6 py-4 text-sm text-red-500 text-center">
                    $530.000 - $622.000
                  </td>
                  <td className="px-6 py-4 text-sm text-center bg-navy/5">
                    <span className="text-lg text-cyan">$399.990</span>
                  </td>
                </tr>
                <tr className="bg-cyan/5">
                  <td className="px-6 py-4 text-sm font-bold text-navy">
                    Diferencia
                  </td>
                  <td className="px-6 py-4" />
                  <td className="px-6 py-4 text-sm font-bold text-green-600 text-center">
                    Ahorras $130.000 - $222.000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Preguntas frecuentes
          </h2>
          <div className="mt-12 space-y-4">
            {[
              {
                q: "¿El precio puede cambiar después de la cotización?",
                a: "No. El precio que te damos es el precio que pagas. Incluye equipo, instalación, materiales, puesta en marcha y garantía. Cero extras, cero sorpresas.",
              },
              {
                q: "¿Qué marcas de equipos usan?",
                a: "Trabajamos con Samsung (línea Wind-Free), Midea (línea EcoMaster con IA) y Anwo (línea Ecoflow). Todos son Inverter, frío/calor, con WiFi y eficiencia clase A.",
              },
              {
                q: "¿Puedo pagar en cuotas?",
                a: "Sí, aceptamos hasta 3 cuotas sin interés con tarjeta de crédito a través de Transbank. También puedes pagar con débito o transferencia.",
              },
              {
                q: "¿Cuánto tiempo toma desde que cotizo hasta que instalan?",
                a: "Desde la aprobación de la cotización, la instalación se coordina en 3 a 7 días hábiles. El día de la instalación toma entre 3 y 5 horas por equipo.",
              },
              {
                q: "¿Qué pasa si mi espacio necesita algo especial?",
                a: "En el diagnóstico gratuito por Zoom evaluamos tu espacio y detectamos cualquier particularidad. Si hay una necesidad especial (mansarda, instalación en altura, etc.), te lo indicamos en la cotización con el precio cerrado correspondiente.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-gray-200 bg-white open:shadow-sm transition-all"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-sm font-semibold text-navy">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-steel shrink-0 ml-4 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 text-sm text-steel-dark leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Schema: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿El precio puede cambiar después de la cotización?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. El precio que te damos es el precio que pagas. Incluye equipo, instalación, materiales, puesta en marcha y garantía.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué marcas de equipos usan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Samsung (Wind-Free), Midea (EcoMaster con IA) y Anwo (Ecoflow). Todos Inverter, frío/calor, WiFi, clase A.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo pagar en cuotas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, hasta 3 cuotas sin interés con tarjeta de crédito a través de Transbank. También débito o transferencia.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tiempo toma desde que cotizo hasta que instalan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "3 a 7 días hábiles desde la aprobación. La instalación toma entre 3 y 5 horas por equipo.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué pasa si mi espacio necesita algo especial?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "En el diagnóstico Zoom evaluamos tu espacio. Si hay una necesidad especial, se incluye en la cotización con precio cerrado.",
                },
              },
            ],
          }),
        }}
      />

      {/* Schema: Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Aire Acondicionado Todo Incluido",
            description: "Paquete todo incluido: aire acondicionado Inverter frío/calor + instalación estética + garantía total. Precio cerrado, cero sorpresas.",
            provider: {
              "@type": "Organization",
              name: "Meser",
              url: "https://www.meser.cl",
            },
            areaServed: { "@type": "State", name: "Región Metropolitana de Santiago" },
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "399990",
              highPrice: "999990",
              priceCurrency: "CLP",
              offerCount: 3,
            },
          }),
        }}
      />
    </>
  );
}
