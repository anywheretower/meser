import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Mantención Aire Acondicionado Santiago · Desde $59.990 · Meser",
  description:
    "Mantención de aire acondicionado en Santiago desde $59.990. Limpieza profunda, revisión técnica, optimización de rendimiento. Toda la RM.",
};

export default function MantencionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Mantención de aire acondicionado en Santiago
            </h1>
            <p className="mt-4 text-lg text-cyan font-medium">
              Limpieza profunda + revisión técnica + optimización de
              rendimiento. Desde $59.990.
            </p>
            <p className="mt-6 text-lg text-steel-light leading-relaxed max-w-2xl">
              Un aire acondicionado sin mantención consume más energía, enfría
              peor y puede afectar la calidad del aire. Nuestro servicio
              incluye limpieza de filtros, revisión del sistema de drenaje,
              verificación de gas refrigerante, limpieza de la unidad exterior
              y prueba de rendimiento.
            </p>
            <div className="mt-10">
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
              >
                Agendar mantención
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qué incluye + Precio */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy">
                Qué incluye la mantención
              </h2>
              <ol className="mt-6 space-y-3">
                {[
                  "Limpieza de filtros internos",
                  "Limpieza profunda del evaporador",
                  "Limpieza de la unidad exterior (condensador)",
                  "Revisión del sistema de drenaje",
                  "Verificación de presión de gas refrigerante",
                  "Revisión de conexiones eléctricas",
                  "Prueba de rendimiento frío/calor",
                  "Informe de estado del equipo",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-navy/80">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan/10 text-cyan text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border-2 border-cyan p-8 flex flex-col justify-center">
              <div className="text-sm font-medium text-cyan uppercase tracking-wider">
                Precio especial
              </div>
              <div className="mt-3">
                <span className="text-lg text-steel line-through">$99.990</span>
                <span className="ml-2 text-4xl font-bold text-navy">
                  $59.990
                </span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-steel-dark">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cobertura: Toda la RM
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Duración: Aprox. 1 hora
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Técnicos certificados
                </li>
              </ul>
              <Link
                href="/cotizar"
                className="mt-6 block w-full text-center rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors"
              >
                Agendar mantención
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cuándo hacer mantención */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center">
            ¿Cada cuánto hacer mantención?
          </h2>
          <p className="mt-4 text-center text-sm text-steel-dark">
            <strong>Recomendación Meser:</strong> Al menos una vez al año,
            idealmente antes de la temporada de mayor uso (noviembre para
            verano, abril para invierno).
          </p>

          <div className="mt-10">
            <h3 className="text-lg font-semibold text-navy text-center">
              Señales de que tu equipo necesita mantención
            </h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Enfría o calienta menos que antes",
                "Hace más ruido de lo habitual",
                "Gotea agua",
                "Emite olores desagradables",
                "La cuenta de luz subió sin razón aparente",
              ].map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-3 rounded-xl bg-white border border-gray-200 px-5 py-4"
                >
                  <svg className="w-5 h-5 text-yellow-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-sm text-navy">{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="¿Tu equipo necesita mantención?"
        text="Agenda tu mantención profesional desde $59.990. Técnicos certificados, cobertura toda la RM."
        ctaLabel="Agendar mantención"
      />
    </>
  );
}
