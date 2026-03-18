import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { termosGroup, formatPrice } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";
import WhatsAppLink from "@/components/WhatsAppLink";
import Breadcrumbs from "@/components/Breadcrumbs";


export const metadata: Metadata = {
  title: "Termos Eléctricos Midea · Compra con Instalación en Santiago",
  description:
    "Compra termo eléctrico Midea Lume de 50, 80, 100 y 120 litros. Desde $149.990 solo equipo o $249.990 todo incluido con instalación en Santiago.",
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Termos Eléctricos" }]} />
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy">
              Termos eléctricos Midea Lume — 50 a 120 litros
            </h1>
            <p className="mt-4 text-lg text-steel-dark leading-relaxed">
              Agua caliente sin gas, segura y eficiente. Acero esmaltado, termostato regulable
              y 4 capacidades. Todo incluido con instalación desde $249.990 en Santiago.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-steel-dark">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Instalación profesional incluida
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Garantía de fábrica
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Entrega en toda la RM
              </span>
            </div>
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
            {termosGroup.models.map((producto, idx) => (
              <div
                key={producto.id}
                className="relative rounded-2xl border border-gray-200 hover:border-cyan hover:shadow-lg p-6 flex flex-col transition-all bg-white"
              >
                {producto.originalPrice > 0 && producto.price > 0 && (
                  <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white text-sm font-bold shadow-md z-10">
                    -{Math.round(((producto.originalPrice - producto.price) / producto.originalPrice) * 100)}%
                  </div>
                )}

                {producto.image && (
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={producto.image}
                      alt={`${producto.name} - termo eléctrico Midea`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      {...(idx < 4 ? { priority: true } : { loading: "lazy" })}
                    />
                  </div>
                )}

                <h3 className="text-base font-semibold text-navy">
                  {producto.name}
                </h3>
                {producto.fichaUrl && (
                  <a
                    href={producto.fichaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-1 text-xs text-steel hover:text-cyan transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    Ficha técnica
                  </a>
                )}

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

                {/* Precio con instalación */}
                <div className="mt-3 rounded-lg bg-cyan/5 border border-cyan/20 px-3 py-2">
                  <span className="text-xs text-steel-dark">
                    Con instalación:
                  </span>
                  <span className="ml-1 text-base font-bold text-cyan">
                    {formatPrice(producto.todoIncluidoPrice)}
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

                <div className="mt-auto pt-6 flex flex-col gap-2">
                  <AddToCartButton productId={producto.id} price={producto.price} todoIncluidoPrice={producto.todoIncluidoPrice} />
                  <WhatsAppLink
                    href={`https://wa.me/56982351110?text=${encodeURIComponent(`Hola, me interesa el ${producto.name}. ¿Podrían darme más información?`)}`}
                    location={`termos_${producto.id}`}
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] hover:bg-[#1ebe57] px-4 py-2.5 text-sm font-semibold text-white transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                    Consulta por este equipo
                  </WhatsAppLink>
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

      {/* Guía de capacidad */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center">
            ¿Qué capacidad necesitas?
          </h2>
          <p className="mt-4 text-center text-sm text-steel-dark max-w-2xl mx-auto">
            La capacidad ideal depende del número de personas en tu hogar y
            el uso de agua caliente. Aquí una guía rápida:
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { cap: "50L", personas: "1–2 personas", uso: "Ducha + lavamanos", ideal: "Departamento studio o 1 dormitorio" },
              { cap: "80L", personas: "2–3 personas", uso: "2 duchas + cocina", ideal: "Departamento 2 dormitorios" },
              { cap: "100L", personas: "3–4 personas", uso: "2 duchas simultáneas", ideal: "Casa o depto 3 dormitorios" },
              { cap: "120L", personas: "4–5 personas", uso: "Uso intensivo", ideal: "Casa grande o familia numerosa" },
            ].map((item) => (
              <div
                key={item.cap}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center"
              >
                <div className="text-3xl font-bold text-cyan">{item.cap}</div>
                <div className="mt-2 text-sm font-semibold text-navy">
                  {item.personas}
                </div>
                <div className="mt-1 text-xs text-steel-dark">{item.uso}</div>
                <div className="mt-3 text-xs text-steel bg-gray-50 rounded-lg px-3 py-2">
                  {item.ideal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center">
            Preguntas frecuentes
          </h2>
          <div className="mt-10 space-y-6">
            {[
              {
                q: "¿Cuánto consume un termo eléctrico al mes?",
                a: "Un termo de 80L consume entre $8.000 y $15.000 mensuales en electricidad, dependiendo del uso. Los termos Midea Lume tienen aislación de alta densidad que minimiza las pérdidas de calor y reduce el consumo.",
              },
              {
                q: "¿Es mejor un termo eléctrico o un calefón a gas?",
                a: "El termo eléctrico es más seguro (no hay combustión ni riesgo de fuga de gas), más fácil de instalar y no requiere ventilación especial. El calefón calienta al instante pero necesita gas y mantención frecuente. Para departamentos, el termo es la opción más práctica.",
              },
              {
                q: "¿Cuánto tarda en calentar el agua?",
                a: "Desde temperatura ambiente, un termo de 80L tarda aproximadamente 1,5 a 2 horas en alcanzar los 65°C. Una vez caliente, el termostato mantiene la temperatura automáticamente.",
              },
              {
                q: "¿Necesita mantención un termo eléctrico?",
                a: "Se recomienda revisar el ánodo de magnesio cada 2 años para prolongar la vida útil del tanque. Los termos Midea Lume tienen acero esmaltado que resiste la corrosión y facilita la mantención.",
              },
              {
                q: "¿Dónde se instala el termo?",
                a: "Se puede instalar en baño, cocina, logia o cualquier espacio con acceso a agua y electricidad. Requiere un muro resistente ya que pesa entre 18 y 30 kg lleno. Nuestro equipo evalúa la mejor ubicación durante la instalación.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-gray-200 bg-gray-50 open:bg-white open:shadow-sm transition-all"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-semibold text-navy">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-steel shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-sm text-steel-dark leading-relaxed">
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
                name: "¿Cuánto consume un termo eléctrico al mes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un termo de 80L consume entre $8.000 y $15.000 mensuales en electricidad, dependiendo del uso. Los termos Midea Lume tienen aislación de alta densidad que reduce el consumo.",
                },
              },
              {
                "@type": "Question",
                name: "¿Es mejor un termo eléctrico o un calefón a gas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El termo eléctrico es más seguro (no hay combustión ni riesgo de fuga de gas), más fácil de instalar y no requiere ventilación especial. Para departamentos, es la opción más práctica.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tarda en calentar el agua?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Desde temperatura ambiente, un termo de 80L tarda aproximadamente 1,5 a 2 horas en alcanzar los 65°C. Una vez caliente, el termostato mantiene la temperatura automáticamente.",
                },
              },
              {
                "@type": "Question",
                name: "¿Necesita mantención un termo eléctrico?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Se recomienda revisar el ánodo de magnesio cada 2 años para prolongar la vida útil del tanque. Los termos Midea Lume tienen acero esmaltado que resiste la corrosión.",
                },
              },
              {
                "@type": "Question",
                name: "¿Dónde se instala el termo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Se puede instalar en baño, cocina, logia o cualquier espacio con acceso a agua y electricidad. Requiere un muro resistente ya que pesa entre 18 y 30 kg lleno.",
                },
              },
            ],
          }),
        }}
      />

    </>
  );
}
