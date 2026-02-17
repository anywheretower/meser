import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Confort inteligente para cada rincón de tu hogar
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-steel-light leading-relaxed max-w-2xl">
              Climatización integral en Santiago: diagnóstico gratuito, precio
              cerrado, instalación estética.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
              >
                Agenda tu asesoría gratuita
              </Link>
              <Link
                href="/todo-incluido"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Ver paquetes todo incluido
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Paquetes destacados */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Paquetes todo incluido
            </h2>
            <p className="mt-4 text-lg text-steel-dark max-w-2xl mx-auto">
              Equipo + instalación estética + garantía total. Un precio. Cero
              sorpresas.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paquete Habitación */}
            <div className="group rounded-2xl border border-gray-200 p-8 hover:border-cyan hover:shadow-lg transition-all">
              <div className="text-sm font-medium text-cyan uppercase tracking-wider">
                Habitación
              </div>
              <div className="mt-2 text-sm text-steel-dark">Hasta 18 m²</div>
              <div className="mt-4">
                <span className="text-3xl font-bold text-navy">$449.980</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2 text-sm text-navy/80">
                  <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Equipo Inverter 9.000 BTU frío/calor
                </li>
                <li className="flex items-start gap-2 text-sm text-navy/80">
                  <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  WiFi + opción IA
                </li>
                <li className="flex items-start gap-2 text-sm text-navy/80">
                  <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Instalación estética completa
                </li>
                <li className="flex items-start gap-2 text-sm text-navy/80">
                  <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Garantía total Meser
                </li>
              </ul>
              <Link
                href="/cotizar"
                className="mt-8 block w-full text-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
              >
                Quiero este paquete
              </Link>
            </div>

            {/* Paquete Living — destacado */}
            <div className="group relative rounded-2xl border-2 border-cyan p-8 shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan px-4 py-1 text-xs font-semibold text-navy">
                Más popular
              </div>
              <div className="text-sm font-medium text-cyan uppercase tracking-wider">
                Living
              </div>
              <div className="mt-2 text-sm text-steel-dark">Hasta 24 m²</div>
              <div className="mt-4">
                <span className="text-3xl font-bold text-navy">$499.980</span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2 text-sm text-navy/80">
                  <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Equipo Inverter 12.000 BTU frío/calor
                </li>
                <li className="flex items-start gap-2 text-sm text-navy/80">
                  <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  WiFi + IA (aprende tus hábitos)
                </li>
                <li className="flex items-start gap-2 text-sm text-navy/80">
                  <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Instalación estética completa
                </li>
                <li className="flex items-start gap-2 text-sm text-navy/80">
                  <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Garantía total Meser
                </li>
              </ul>
              <Link
                href="/cotizar"
                className="mt-8 block w-full text-center rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors"
              >
                Quiero este paquete
              </Link>
            </div>

            {/* Multi Split */}
            <div className="group rounded-2xl border border-gray-200 p-8 hover:border-cyan hover:shadow-lg transition-all">
              <div className="text-sm font-medium text-cyan uppercase tracking-wider">
                Multi Split
              </div>
              <div className="mt-2 text-sm text-steel-dark">
                Varios ambientes
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold text-navy">
                  Personalizado
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2 text-sm text-navy/80">
                  <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  1 exterior + múltiples interiores
                </li>
                <li className="flex items-start gap-2 text-sm text-navy/80">
                  <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ideal para departamentos y casas
                </li>
                <li className="flex items-start gap-2 text-sm text-navy/80">
                  <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Diagnóstico personalizado por Zoom
                </li>
                <li className="flex items-start gap-2 text-sm text-navy/80">
                  <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Garantía total Meser
                </li>
              </ul>
              <Link
                href="/cotizar"
                className="mt-8 block w-full text-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
              >
                Agendar diagnóstico
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/todo-incluido"
              className="text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
            >
              Ver todos los paquetes →
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué Meser */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            ¿Por qué Meser?
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                ),
                title: "Diagnóstico experto gratuito",
                text: "25 minutos por Zoom con un especialista. Sin compromiso de compra.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Precio cerrado sin sorpresas",
                text: "El precio que te damos es el que pagas. Todo incluido, cero extras.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Instalación estética invisible",
                text: "Canaletas ocultas, sin cables a la vista. Tu hogar sigue viéndose perfecto.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Trato directo con el dueño",
                text: "No un vendedor, no un call center. El dueño te asesora personalmente.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan/10 text-cyan flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-steel-dark leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso en 3 pasos */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Así de simple es climatizar tu hogar
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Diagnóstico experto por Zoom",
                subtitle: "25 min, gratis",
                text: "Un experto Meser se conecta contigo, revisa tu espacio y calcula la capacidad exacta que necesitas. Sin compromiso.",
              },
              {
                step: "2",
                title: "Propuesta con precio cerrado",
                subtitle: "Todo incluido",
                text: "Recibes una cotización detallada que incluye equipo, instalación, materiales y garantía. El precio que ves es el que pagas.",
              },
              {
                step: "3",
                title: "Instalación estética profesional",
                subtitle: "3-7 días hábiles",
                text: "Técnicos certificados instalan tu equipo con canaletas ocultas, sin cables a la vista. Garantía total Meser.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="w-12 h-12 rounded-full bg-cyan text-navy flex items-center justify-center text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <span className="text-xs font-medium text-cyan">
                  {item.subtitle}
                </span>
                <p className="mt-2 text-sm text-steel-dark leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/climatizacion-integral"
              className="text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
            >
              Conoce más sobre nuestro proceso →
            </Link>
          </div>
        </div>
      </section>

      {/* Equipos */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Trabajamos con las mejores marcas
            </h2>
            <p className="mt-4 text-lg text-steel-dark">
              Todos nuestros equipos son Inverter, frío/calor, con WiFi y
              eficiencia energética clase A.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-gray-200 p-8 text-center">
              <h3 className="text-xl font-bold text-navy">Samsung</h3>
              <p className="mt-1 text-sm font-medium text-cyan">Wind-Free</p>
              <p className="mt-3 text-sm text-steel-dark leading-relaxed">
                Tecnología Wind-Free: enfriamiento sin corrientes de aire
                directas. Confort silencioso y uniforme.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-8 text-center">
              <h3 className="text-xl font-bold text-navy">Midea</h3>
              <p className="mt-1 text-sm font-medium text-cyan">
                EcoMaster con IA
              </p>
              <p className="mt-3 text-sm text-steel-dark leading-relaxed">
                Línea EcoMaster con IA: aprende tus hábitos y optimiza el
                consumo automáticamente.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/aires-acondicionados"
              className="text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
            >
              Ver catálogo completo →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Lo que dicen nuestros clientes
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
            ].map((testimonial, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gray-50 p-8"
              >
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
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-navy">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-steel-dark">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Listo para climatizar tu hogar sin sorpresas?"
        text="Agenda una asesoría gratuita de 25 minutos por Zoom. Sin compromiso, sin presión — solo la información que necesitas."
      />
    </>
  );
}
