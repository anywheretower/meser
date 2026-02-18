import type { Metadata } from "next";
import Link from "next/link";
import { termosGroup, formatPrice } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Termos Eléctricos · Midea Lume · Meser",
  description:
    "Termos eléctricos Midea Lume de 50L, 80L, 100L y 120L. Acero esmaltado, termostato regulable. Entrega e instalación en Santiago.",
};

export default function TermosPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy">
              Termos eléctricos
            </h1>
            <p className="mt-4 text-lg text-steel-dark leading-relaxed">
              Agua caliente eficiente para tu hogar. Termos Midea Lume con
              acero esmaltado, termostato regulable y disponibles en 4
              capacidades.
            </p>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-navy">
              {termosGroup.brand}
            </h2>
            <p className="text-sm font-medium text-cyan">
              {termosGroup.line}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {termosGroup.models.map((producto) => (
              <div
                key={producto.id}
                className="relative rounded-2xl border border-gray-200 hover:border-cyan hover:shadow-lg p-6 flex flex-col transition-all bg-white"
              >
                <h3 className="text-base font-semibold text-navy">
                  {producto.name}
                </h3>

                {/* Precio */}
                <div className="mt-4">
                  {producto.originalPrice > 0 && (
                    <span className="text-xs text-steel line-through mr-2">
                      {formatPrice(producto.originalPrice)}
                    </span>
                  )}
                  <span className="text-lg font-bold text-navy">
                    {formatPrice(producto.price)}
                  </span>
                </div>

                {/* Specs */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {producto.specs.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-medium text-steel-dark bg-gray-100 px-2 py-0.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <AddToCartButton productId={producto.id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-base font-semibold text-navy">
                Instalación profesional
              </h3>
              <p className="mt-2 text-sm text-steel-dark">
                Servicio de instalación disponible por nuestro equipo
                técnico. Consulta por precio todo incluido.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-navy">
                Garantía de fábrica
              </h3>
              <p className="mt-2 text-sm text-steel-dark">
                Todos los termos Midea Lume incluyen garantía de fábrica
                respaldada por servicio técnico oficial.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-navy">
                Entrega en Santiago
              </h3>
              <p className="mt-2 text-sm text-steel-dark">
                Despacho a toda la Región Metropolitana. Coordinamos día y
                horario contigo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Necesitas asesoría?"
        text="Agenda un diagnóstico gratuito por Zoom de 25 minutos. Un experto Meser te ayuda a elegir el termo ideal para tu hogar."
        ctaLabel="Diagnóstico gratuito"
      />
    </>
  );
}
