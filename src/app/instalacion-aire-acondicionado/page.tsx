import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title:
    "Instalación Aire Acondicionado Santiago · Estética · Garantía Total",
  description:
    "Instalación profesional de aire acondicionado en Santiago. Canaletas ocultas, acabados prolijos, garantía total. Toda la RM. Cotiza sin compromiso.",
};

export default function InstalacionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Instalación profesional de aire acondicionado en Santiago
            </h1>
            <p className="mt-4 text-lg text-cyan font-medium">
              Técnicos certificados · Instalación estética · Garantía total ·
              Cobertura toda la RM
            </p>
            <p className="mt-6 text-lg text-steel-light leading-relaxed max-w-2xl">
              En Meser no solo instalamos — creamos una experiencia invisible.
              Canaletas ocultas, sin cables a la vista, acabados prolijos que
              respetan el diseño de tu hogar. Cada instalación incluye puesta en
              marcha, prueba de funcionamiento e inducción completa.
            </p>
            <div className="mt-10">
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
              >
                Cotiza tu instalación
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Qué incluye */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Todo incluido, sin letra chica
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { step: "1", text: "Diagnóstico previo — Evaluamos tu espacio para determinar la ubicación óptima" },
              { step: "2", text: "Montaje unidad interior — Instalación segura en la pared seleccionada" },
              { step: "3", text: "Montaje unidad exterior — Posicionamiento óptimo para rendimiento y estética" },
              { step: "4", text: "Perforación de muro — Hasta 23 cm de espesor, sellado profesional" },
              { step: "5", text: "Cañerías con aislación térmica — Ocultas con canaletas que se funden con tu decoración" },
              { step: "6", text: "Conexión eléctrica — Circuito dedicado cuando sea necesario" },
              { step: "7", text: "Desagüe por gravedad — Sin bombas de condensación, solución natural" },
              { step: "8", text: "Puesta en marcha y prueba — Verificamos enfriamiento, calefacción y consumo" },
              { step: "9", text: "Inducción de uso — Te enseñamos a sacarle el máximo provecho" },
              { step: "10", text: "Limpieza del área — Nos vamos dejando tu espacio impecable" },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 rounded-xl bg-gray-50 border border-gray-100 px-5 py-4"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-cyan text-navy text-xs font-bold shrink-0">
                  {item.step}
                </span>
                <span className="text-sm text-navy/80 leading-relaxed">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de instalación */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Tipos de instalación
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-navy">Split Muro</h3>
              <p className="mt-1 text-sm font-medium text-cyan">
                La más popular
              </p>
              <p className="mt-4 text-sm text-steel-dark leading-relaxed">
                La solución más popular para hogares y departamentos. Un equipo
                interior discreto en la pared y una unidad exterior. Ideal para
                climatizar una habitación o living.
              </p>
              <div className="mt-4">
                <span className="text-sm text-steel">Desde</span>
                <span className="ml-1 text-xl font-bold text-navy">
                  $449.980
                </span>
                <span className="text-sm text-steel-dark ml-1">
                  todo incluido
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-navy">
                Consola Piso-Cielo
              </h3>
              <p className="mt-1 text-sm font-medium text-cyan">
                Para espacios especiales
              </p>
              <p className="mt-4 text-sm text-steel-dark leading-relaxed">
                Para espacios donde no es posible instalar en muro. Se ubica a
                nivel del piso con distribución de aire vertical. Ideal para
                mansardas y espacios con restricciones.
              </p>
              <div className="mt-4">
                <span className="text-sm text-steel">Desde</span>
                <span className="ml-1 text-xl font-bold text-navy">
                  $499.990
                </span>
                <span className="text-sm text-steel-dark ml-1">
                  todo incluido
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-navy">Multi Split</h3>
              <p className="mt-1 text-sm font-medium text-cyan">
                Varios ambientes
              </p>
              <p className="mt-4 text-sm text-steel-dark leading-relaxed">
                Un solo equipo exterior que alimenta hasta 5 unidades
                interiores. Perfecto para departamentos o casas que necesitan
                climatizar varios ambientes sin saturar la fachada.
              </p>
              <div className="mt-4">
                <span className="text-sm text-navy font-bold">
                  Consultar precio según configuración
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instalación estética */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            El protagonista es tu hogar, no el equipo
          </h2>
          <p className="mt-4 text-lg text-steel-dark text-center">
            Otros instalan y se van. Nosotros instalamos y desaparecemos — en el
            mejor sentido.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Canaletas ocultas",
                text: "Se pintan del color de tu pared. Invisibles a simple vista.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ),
              },
              {
                title: "Cables invisibles",
                text: "Nada a la vista. Todo canalizado y protegido profesionalmente.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                ),
              },
              {
                title: "Tubos sellados",
                text: "Terminaciones profesionales. Nada improvisado, nada descubierto.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Ubicación estratégica",
                text: "Del equipo exterior para minimizar impacto visual y ruido.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl bg-gray-50 border border-gray-100 p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 text-cyan flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-steel-dark">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-steel-dark italic">
            El resultado: climatización de autor. Sientes el confort, pero no ves
            la instalación.
          </p>
        </div>
      </section>

      {/* Comparativa de precios */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            ¿Cuánto cuesta realmente instalar un aire acondicionado?
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Comprar por separado */}
            <div className="rounded-2xl border border-red-200 bg-white p-8">
              <h3 className="text-lg font-semibold text-navy">
                Si compras por separado
              </h3>
              <ul className="mt-6 space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-steel-dark">Equipo 9K BTU Midea</span>
                  <span className="font-medium text-navy">~$320.000</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-steel-dark">Instalación básica</span>
                  <span className="font-medium text-navy">
                    $180.000 - $222.000
                  </span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-steel-dark">Extras imprevistos</span>
                  <span className="font-medium text-navy">
                    $30.000 - $80.000
                  </span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between">
                <span className="text-sm font-bold text-navy">Total real</span>
                <span className="text-lg font-bold text-red-500">
                  $530.000 - $622.000
                </span>
              </div>
            </div>

            {/* Meser */}
            <div className="rounded-2xl border-2 border-cyan bg-white p-8 relative">
              <div className="absolute -top-3 left-6 rounded-full bg-cyan px-3 py-0.5 text-xs font-semibold text-navy">
                Mejor opción
              </div>
              <h3 className="text-lg font-semibold text-navy">
                Con Meser todo incluido
              </h3>
              <ul className="mt-6 space-y-3">
                <li className="flex justify-between text-sm">
                  <span className="text-steel-dark">
                    Equipo + instalación + garantía
                  </span>
                  <span className="font-bold text-cyan text-lg">$449.980</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-steel-dark">Extras</span>
                  <span className="font-medium text-green-600">$0</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm font-bold text-green-600">
                  Ahorras entre $80.000 y $172.000
                </p>
                <p className="mt-2 text-xs text-steel-dark">
                  + diagnóstico experto + instalación estética + trato directo +
                  garantía total
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Instalamos en toda la Región Metropolitana
          </h2>
          <p className="mt-6 text-sm text-steel-dark leading-relaxed max-w-2xl mx-auto">
            Las Condes · Vitacura · Providencia · Lo Barnechea · Ñuñoa · La
            Reina · Peñalolén · Santiago Centro · Independencia · Recoleta ·
            Macul · La Florida · Puente Alto · Maipú · Colina · Chicureo · y
            todas las comunas de la RM.
          </p>
          <p className="mt-4 text-sm text-steel-dark">
            ¿Estás fuera de la RM? Enviamos equipos a todo Chile y coordinamos
            instalación con técnicos certificados en tu zona.
          </p>
          <Link
            href="/cotizar"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
          >
            ¿Cubrimos tu comuna? Consulta aquí
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy text-center">
            Preguntas frecuentes
          </h2>
          <div className="mt-12 space-y-4">
            {[
              {
                q: "¿Puedo comprar el equipo en otro lado y que Meser lo instale?",
                a: "Sí, ofrecemos servicio de instalación independiente. Sin embargo, cuando compras el equipo con nosotros, el precio total es menor que comprando por separado. Y la garantía cubre equipo e instalación de forma integral.",
              },
              {
                q: "¿Necesito un circuito eléctrico independiente?",
                a: "Depende del equipo y de tu instalación eléctrica actual. Lo evaluamos en el diagnóstico por Zoom y lo incluimos en la propuesta si es necesario. Sin sorpresas.",
              },
              {
                q: "¿Cuánto demora la instalación?",
                a: "La instalación estándar toma entre 3 y 5 horas. Coordinamos horarios que te acomoden. Desde que aceptas la propuesta, el equipo está instalado en 3 a 7 días hábiles.",
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
      <CTASection
        title="¿Necesitas una instalación profesional?"
        text="Cotiza sin compromiso. Diagnóstico gratuito por Zoom, precio cerrado y garantía total sobre la instalación."
        ctaLabel="Cotiza tu instalación"
      />
    </>
  );
}
