import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Climatización Integral Santiago · Diagnóstico Gratis · Precio Cerrado",
  description:
    "Resolvemos tu climatización completa: diagnóstico gratis por Zoom, precio cerrado sin sorpresas, instalación estética invisible. Desde $449.980 todo incluido.",
};

export default function ClimatizacionIntegralPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Climatización integral para tu hogar en Santiago
            </h1>
            <p className="mt-4 text-lg text-cyan font-medium">
              Diagnóstico gratuito por Zoom · Precio cerrado sin sorpresas ·
              Instalación estética con garantía total
            </p>
            <p className="mt-6 text-lg text-steel-light leading-relaxed max-w-2xl">
              En Meser resolvemos todo: desde elegir el equipo correcto hasta
              dejarlo funcionando en tu hogar, con una instalación que cuida cada
              detalle de tu espacio. Sin costos ocultos, sin intermediarios, sin
              letra chica.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
              >
                Agenda tu asesoría gratuita
              </Link>
              <a
                href="https://wa.me/56982351110"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                O escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Proceso en 3 pasos */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Así de simple es climatizar tu hogar
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-14 h-14 rounded-full bg-cyan text-navy flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">
                Diagnóstico experto por Zoom
              </h3>
              <span className="inline-block mt-1 text-xs font-medium text-cyan bg-cyan/10 px-2 py-0.5 rounded-full">
                25 min, gratis
              </span>
              <p className="mt-3 text-sm text-steel-dark leading-relaxed">
                Un experto Meser se conecta contigo, revisa tu espacio a través
                de planos o fotos, calcula la capacidad exacta que necesitas y
                responde todas tus dudas. Sin compromiso de compra, sin visita
                pagada — solo asesoría profesional.
              </p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-cyan text-navy flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">
                Propuesta con precio cerrado
              </h3>
              <span className="inline-block mt-1 text-xs font-medium text-cyan bg-cyan/10 px-2 py-0.5 rounded-full">
                Todo incluido
              </span>
              <p className="mt-3 text-sm text-steel-dark leading-relaxed">
                Recibes una cotización detallada que incluye todo: equipo,
                instalación, materiales, asesoría y garantía. El precio que ves
                es el precio que pagas. Cero sorpresas.
              </p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-full bg-cyan text-navy flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">
                Instalación estética profesional
              </h3>
              <span className="inline-block mt-1 text-xs font-medium text-cyan bg-cyan/10 px-2 py-0.5 rounded-full">
                3-7 días hábiles
              </span>
              <p className="mt-3 text-sm text-steel-dark leading-relaxed">
                Técnicos certificados instalan tu equipo cuidando cada detalle:
                canaletas ocultas, sin cables a la vista, acabados prolijos. Tu
                hogar sigue viéndose como tú lo diseñaste. Garantía total Meser
                sobre equipo e instalación.
              </p>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-steel-dark">
            Sin letra chica, sin visitas pagadas, sin intermediarios. Solo
            soluciones claras para tu hogar.
          </p>
        </div>
      </section>

      {/* Meser vs. el resto */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            ¿Por qué Meser y no otro?
          </h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Con Meser
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Sin Meser
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  [
                    "Diagnóstico experto antes de comprar",
                    "Eliges a ciegas o por precio",
                  ],
                  [
                    "Precio cerrado todo incluido",
                    "Equipo por un lado, instalación por otro, sorpresas al final",
                  ],
                  [
                    "Instalación estética e invisible",
                    "Cables, tubos y canaletas a la vista",
                  ],
                  [
                    "Hablas directo con el dueño",
                    "Call center, turnos, intermediarios",
                  ],
                  [
                    "Garantía total Meser",
                    '"Llame al fabricante"',
                  ],
                  [
                    "Equipos frío/calor para todo el año",
                    "Solo para verano",
                  ],
                ].map(([meser, other], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                  >
                    <td className="px-6 py-4 text-sm text-navy">
                      <span className="inline-flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {meser}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-steel-dark">
                      <span className="inline-flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {other}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Soluciones por espacio */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Cada espacio tiene su solución
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Departamento",
                text: "Climatización discreta para departamentos en Santiago. Equipos silenciosos, instalación sin afectar fachadas.",
                href: "/soluciones/departamento",
              },
              {
                title: "Casa",
                text: "Proyecto integral para casas: desde una habitación hasta toda la vivienda con sistema multisplit.",
                href: "/soluciones/casa",
              },
              {
                title: "Mansarda / Altillo",
                text: "Espacios con techos inclinados y geometrías difíciles requieren diagnóstico experto.",
                href: "/soluciones/mansarda",
              },
              {
                title: "Oficina / Local",
                text: "Climatización para tu espacio de trabajo. Equipos eficientes sin elevar la cuenta de luz.",
                href: "/soluciones/oficina",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-2xl border border-gray-200 p-6 hover:border-cyan hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-navy group-hover:text-cyan transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-steel-dark leading-relaxed">
                  {card.text}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-cyan">
                  Ver solución →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Trabajamos con las mejores marcas
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-navy">Samsung</h3>
              <p className="mt-1 text-sm font-medium text-cyan">Wind-Free</p>
              <p className="mt-3 text-sm text-steel-dark leading-relaxed">
                Tecnología Wind-Free: enfriamiento sin corrientes de aire
                directas. Confort silencioso y uniforme en cada rincón.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-navy">Midea</h3>
              <p className="mt-1 text-sm font-medium text-cyan">
                EcoMaster con IA
              </p>
              <p className="mt-3 text-sm text-steel-dark leading-relaxed">
                Línea EcoMaster con IA: aprende tus hábitos y optimiza el
                consumo automáticamente. Máxima eficiencia.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-steel-dark">
            Todos nuestros equipos son Inverter, frío/calor, con WiFi y
            eficiencia energética clase A.
          </p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Lo que dicen quienes ya climatizaron con Meser
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "El diagnóstico por Zoom fue clave. En 25 minutos entendí exactamente qué necesitaba y cuánto iba a costar. La instalación quedó impecable — ni se notan los tubos.",
                name: "María González",
                location: "Las Condes",
              },
              {
                quote:
                  "Coticé en tres empresas y en todas me daban un precio por el equipo y otro por la instalación, con 'extras' que aparecían después. En Meser el precio fue uno solo y no cambió.",
                name: "Rodrigo Fernández",
                location: "Vitacura",
              },
              {
                quote:
                  "Lo que más me gustó es que hablé directo con el dueño. No un vendedor, no un call center. El mismo dueño me asesoró y se aseguró de que todo quedara perfecto.",
                name: "Carolina Muñoz",
                location: "Providencia",
              },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl bg-gray-50 p-8">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 text-sm text-navy/80 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-steel-dark">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Preguntas frecuentes
          </h2>
          <div className="mt-12 space-y-6">
            {[
              {
                q: "¿Cuánto cuesta instalar un aire acondicionado con Meser?",
                a: "Nuestros paquetes todo incluido (equipo + instalación + garantía) parten desde $449.980 para espacios de hasta 18 m². El precio exacto depende de tu espacio y necesidades — por eso ofrecemos un diagnóstico gratuito por Zoom donde definimos juntos la mejor solución.",
              },
              {
                q: "¿Qué incluye el precio cerrado?",
                a: "Todo: equipo Inverter frío/calor, instalación profesional estética, materiales (cañerías, canaletas, cableado), puesta en marcha, prueba de funcionamiento, inducción de uso y garantía total Meser. Sin costos adicionales.",
              },
              {
                q: "¿Cubren mi comuna?",
                a: "Cubrimos toda la Región Metropolitana con instalación directa. Las Condes, Vitacura, Providencia, Lo Barnechea, Ñuñoa, La Reina, Santiago Centro y todas las comunas de la RM. Envío de equipos a todo Chile.",
              },
              {
                q: "¿Cuánto demora la instalación?",
                a: "La instalación estándar toma entre 3 y 5 horas. Desde que aceptas la propuesta, el equipo está instalado en tu hogar en un plazo de 3 a 7 días hábiles.",
              },
              {
                q: "¿Qué marcas trabajan?",
                a: "Samsung y Midea — dos de las marcas más reconocidas a nivel mundial en climatización. Todos nuestros equipos son Inverter (ahorro hasta 70% vs equipos convencionales), frío/calor, y con conectividad WiFi.",
              },
              {
                q: "¿El aire acondicionado sirve para invierno también?",
                a: "Sí. Todos nuestros equipos son frío/calor (bomba de calor). Enfrían en verano y calientan en invierno con la misma eficiencia. Un solo equipo para todo el año.",
              },
              {
                q: "¿Qué pasa si tengo un problema después de la instalación?",
                a: "Garantía total Meser: si algo falla, nosotros nos hacemos cargo. Sin derivarte al fabricante, sin trámites. Hablas directo con nosotros y lo resolvemos.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-sm font-semibold text-navy hover:bg-gray-50 transition-colors">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-steel shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-steel-dark leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection />

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto cuesta instalar un aire acondicionado con Meser?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nuestros paquetes todo incluido (equipo + instalación + garantía) parten desde $449.980 para espacios de hasta 18 m².",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué incluye el precio cerrado?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Todo: equipo Inverter frío/calor, instalación profesional estética, materiales, puesta en marcha, prueba de funcionamiento, inducción de uso y garantía total Meser.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cubren mi comuna?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cubrimos toda la Región Metropolitana con instalación directa. Envío de equipos a todo Chile.",
                },
              },
              {
                "@type": "Question",
                name: "¿El aire acondicionado sirve para invierno también?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Todos nuestros equipos son frío/calor (bomba de calor). Un solo equipo para todo el año.",
                },
              },
            ],
          }),
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Meser - Climatización Integral",
            description:
              "Climatización integral para hogares en Santiago. Diagnóstico gratuito, precio cerrado, instalación estética.",
            telephone: "+56982351110",
            url: "https://meser.cl",
            areaServed: {
              "@type": "State",
              name: "Región Metropolitana de Santiago",
            },
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
