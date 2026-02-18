import type { Metadata } from "next";
import Link from "next/link";
import { airesGroups, formatPrice } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Aires Acondicionados · Catálogo Meser · Samsung y Midea",
  description:
    "Catálogo completo de aires acondicionados Samsung Wind-Free y Midea EcoMaster. Todos Inverter, frío/calor, WiFi. Precio todo incluido con instalación.",
};

export default function AiresAcondicionadosPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy">
              Aires acondicionados
            </h1>
            <p className="mt-4 text-lg text-steel-dark leading-relaxed">
              Todos nuestros equipos son Inverter, frío/calor, con WiFi y
              eficiencia energética clase A. Precio todo incluido con
              instalación estética y garantía total.
            </p>
          </div>
        </div>
      </section>

      {/* Catálogo por marca */}
      {airesGroups.map((grupo) => (
        <section
          key={`${grupo.brand}-${grupo.line}`}
          className="py-16 odd:bg-gray-50 even:bg-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy">{grupo.brand}</h2>
              <p className="text-sm font-medium text-cyan">{grupo.line}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {grupo.models.map((producto) => (
                <div
                  key={producto.id}
                  className={`relative rounded-2xl border p-6 flex flex-col ${
                    producto.popular
                      ? "border-2 border-cyan shadow-lg"
                      : "border-gray-200 hover:border-cyan hover:shadow-lg"
                  } transition-all`}
                >
                  {producto.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan px-3 py-0.5 text-xs font-semibold text-navy">
                      Más vendido
                    </div>
                  )}

                  <h3 className="text-base font-semibold text-navy">
                    {producto.name}
                  </h3>
                  {producto.coverage && (
                    <p className="mt-1 text-sm text-steel-dark">
                      {producto.coverage}
                    </p>
                  )}

                  {/* Precio equipo */}
                  <div className="mt-4">
                    {producto.originalPrice > 0 && (
                      <span className="text-xs text-steel line-through mr-2">
                        {formatPrice(producto.originalPrice)}
                      </span>
                    )}
                    <span className="text-lg font-bold text-navy">
                      {formatPrice(producto.price)}
                    </span>
                    {producto.price > 0 && (
                      <span className="block text-xs text-steel-dark mt-0.5">
                        Solo equipo
                      </span>
                    )}
                  </div>

                  {/* Precio todo incluido */}
                  {producto.todoIncluidoPrice > 0 && (
                    <div className="mt-3 rounded-lg bg-cyan/5 border border-cyan/20 px-3 py-2">
                      <span className="text-xs text-steel-dark">
                        Todo incluido:
                      </span>
                      <span className="ml-1 text-base font-bold text-cyan">
                        {formatPrice(producto.todoIncluidoPrice)}
                      </span>
                    </div>
                  )}

                  {/* Features */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {producto.specs.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-medium text-steel-dark bg-gray-100 px-2 py-0.5 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    {producto.price > 0 ? (
                      <AddToCartButton productId={producto.id} />
                    ) : (
                      <Link
                        href="/cotizar"
                        className="block w-full text-center rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
                      >
                        Consultar precio
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Servicios adicionales */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8">
            Servicios adicionales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-navy">
                Mantención
              </h3>
              <div className="mt-2">
                <span className="text-sm text-steel line-through">$99.990</span>
                <span className="ml-2 text-xl font-bold text-navy">$59.990</span>
              </div>
              <p className="mt-2 text-sm text-steel-dark">
                Limpieza profunda + revisión técnica + optimización.
              </p>
              <Link
                href="/mantencion"
                className="mt-4 inline-flex text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
              >
                Ver detalles &rarr;
              </Link>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-navy">
                Instalación (solo servicio)
              </h3>
              <div className="mt-2">
                <span className="text-xl font-bold text-navy">$150.000</span>
              </div>
              <p className="mt-2 text-sm text-steel-dark">
                Si ya tienes equipo. Incluye montaje, cañerías, puesta en marcha.
              </p>
              <Link
                href="/instalacion-aire-acondicionado"
                className="mt-4 inline-flex text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
              >
                Ver detalles &rarr;
              </Link>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-navy">
                Electricista
              </h3>
              <div className="mt-2">
                <span className="text-xl font-bold text-navy">$49.990</span>
              </div>
              <p className="mt-2 text-sm text-steel-dark">
                Circuito eléctrico dedicado para tu equipo de climatización.
              </p>
              <Link
                href="/cotizar"
                className="mt-4 inline-flex text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
              >
                Consultar &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿No sabes qué equipo elegir?"
        text="Agenda un diagnóstico gratuito por Zoom de 25 minutos. Un experto Meser te recomienda el equipo ideal para tu espacio."
        ctaLabel="Diagnóstico gratuito"
      />
    </>
  );
}
