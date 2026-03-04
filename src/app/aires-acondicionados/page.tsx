import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { airesGroups, formatPrice } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";


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

                  {producto.originalPrice > 0 && producto.price > 0 && (
                    <div className="absolute -top-3 -right-3 w-11 h-11 rounded-full bg-red-500 flex items-center justify-center text-white text-[11px] font-bold shadow-md z-10">
                      -{Math.round(((producto.originalPrice - producto.price) / producto.originalPrice) * 100)}%
                    </div>
                  )}

                  {producto.image && (
                    <div className="relative w-full h-40 mb-4">
                      <Image
                        src={producto.image}
                        alt={producto.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
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

                  {/* Precio con instalación */}
                  <div className="mt-3 rounded-lg bg-cyan/5 border border-cyan/20 px-3 py-2">
                    <span className="text-xs text-steel-dark">
                      Con instalación:
                    </span>
                    <span className="ml-1 text-base font-bold text-cyan">
                      {formatPrice(producto.todoIncluidoPrice)}
                    </span>
                  </div>

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

                  <div className="mt-auto pt-6 flex flex-col gap-2">
                    {producto.price > 0 ? (
                      <AddToCartButton productId={producto.id} price={producto.price} todoIncluidoPrice={producto.todoIncluidoPrice} />
                    ) : (
                      <Link
                        href="#agendar"
                        className="block w-full text-center rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
                      >
                        Consultar precio
                      </Link>
                    )}
                    {producto.fichaUrl && (
                      <a
                        href={producto.fichaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full rounded-full border border-gray-200 hover:border-cyan px-4 py-2.5 text-sm font-medium text-navy hover:text-cyan transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                        Ficha técnica
                      </a>
                    )}
                    <a
                      href={`https://wa.me/56962490657?text=${encodeURIComponent(`Hola, me interesa el ${producto.name}. ¿Podrían darme más información?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] hover:bg-[#1ebe57] px-4 py-2.5 text-sm font-semibold text-white transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                      Consulta por este equipo
                    </a>
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
                href="#agendar"
                className="mt-4 inline-flex text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
              >
                Consultar &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
