import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import AddPackageButton from "@/components/AddPackageButton";
import WhatsAppLink from "@/components/WhatsAppLink";
import Breadcrumbs from "@/components/Breadcrumbs";


export const metadata: Metadata = {
  title: "Aire Acondicionado Todo Incluido desde $449.990",
  alternates: { canonical: "/todo-incluido" },
  openGraph: { url: "/todo-incluido" },
  description:
    "Aire acondicionado Inverter frío/calor + instalación + garantía desde $449.990. Precio cerrado, cero sorpresas. Ahorra hasta $172.000 vs comprar por separado.",
};

export default function TodoIncluidoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Servicios", href: "/climatizacion-integral" }, { label: "Todo Incluido" }]} />
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <Image src="/images/blog/midea-vs-samsung.webp" alt="Pareja eligiendo paquete todo incluido de aire acondicionado" fill className="object-cover opacity-25" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy from-40% to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan/10 border border-cyan/20 px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-cyan">
                Precio cerrado — cero sorpresas
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Aire acondicionado con instalación incluida desde{" "}
              <span className="text-cyan">$449.990</span>
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
            {/* W7: WhatsApp como CTA principal (69% de conversiones) + form como secundario */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <WhatsAppLink
                href="https://wa.me/56982351110?text=Hola%2C%20me%20interesa%20un%20paquete%20todo%20incluido%20de%20aire%20acondicionado"
                location="todo_incluido_hero"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white hover:bg-[#1ebe57] transition-colors shadow-lg shadow-green-500/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Cotiza por WhatsApp
              </WhatsAppLink>
              <Link
                href="#agendar"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-navy transition-colors"
              >
                Llenar formulario
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
            Precios válidos hasta agotar stock
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
                  $449.990
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
                price={449990}
                className="mt-6 block w-full text-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors cursor-pointer"
              >
                Comprar — $449.990
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
                  $479.990
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
                price={479990}
                className="mt-6 block w-full text-center rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors cursor-pointer"
              >
                Comprar — $479.990
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
                  $659.990
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
                price={659990}
                className="mt-6 block w-full text-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors cursor-pointer"
              >
                Comprar — $659.990
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
                    <span className="text-lg text-cyan">$449.990</span>
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
            areaServed: [
              { "@type": "City", name: "Las Condes" },
              { "@type": "City", name: "Vitacura" },
              { "@type": "City", name: "Providencia" },
              { "@type": "City", name: "Ñuñoa" },
              { "@type": "City", name: "Lo Barnechea" },
            ],
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "449990",
              highPrice: "979990",
              priceCurrency: "CLP",
              offerCount: 3,
            },
          }),
        }}
      />
    </>
  );
}
