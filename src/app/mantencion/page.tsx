import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AddPackageButton from "@/components/AddPackageButton";


export const metadata: Metadata = {
  title: "Mantención Aire Acondicionado Santiago · $64.990",
  description:
    "Mantención de aire acondicionado en Santiago desde $64.990. Limpieza profunda, revisión técnica, optimización de rendimiento. Toda la RM.",
  alternates: { canonical: "/mantencion" },
};

export default function MantencionPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Servicios", href: "/climatizacion-integral" }, { label: "Mantención" }]} />
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <Image src="/images/blog/mantencion.webp" alt="Servicio de mantención de aire acondicionado" fill className="object-cover opacity-25" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy from-40% to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Mantención de aire acondicionado en Santiago
            </h1>
            <p className="mt-4 text-lg text-cyan font-medium">
              Limpieza profunda + revisión técnica + optimización de
              rendimiento. Desde $64.990.
            </p>
            <p className="mt-6 text-lg text-steel-light leading-relaxed max-w-2xl">
              Un aire acondicionado sin mantención consume más energía, enfría
              peor y puede afectar la calidad del aire. Nuestro servicio
              incluye limpieza de filtros, revisión del sistema de drenaje,
              verificación de gas refrigerante, limpieza de la unidad exterior
              y prueba de rendimiento.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <AddPackageButton
                productId="mantencion-ac"
                price={64990}
                className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors cursor-pointer"
              >
                Comprar mantención $64.990
              </AddPackageButton>
              <Link
                href="#agendar"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Consultar primero
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
                  $64.990
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
              <AddPackageButton
                productId="mantencion-ac"
                price={64990}
                className="mt-6 block w-full text-center rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors cursor-pointer"
              >
                Agregar mantención al carrito
              </AddPackageButton>
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

      {/* Preguntas frecuentes */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center">
            Preguntas frecuentes
          </h2>
          <div className="mt-10 space-y-6">
            {[
              {
                q: "¿Cada cuánto tiempo debo hacer mantención a mi aire acondicionado?",
                a: "Recomendamos al menos una mantención al año. Si usas el equipo intensamente (más de 8 horas diarias) o tienes mascotas, lo ideal es cada 6 meses. Antes de verano e invierno son los mejores momentos.",
              },
              {
                q: "¿Cuánto demora una mantención?",
                a: "Una mantención estándar toma aproximadamente 1 hora por equipo. Si hay varios equipos, coordinamos para hacer todos el mismo día.",
              },
              {
                q: "¿Qué pasa si mi equipo necesita gas refrigerante?",
                a: "Durante la mantención revisamos la presión del gas. Si está bajo, te informamos el costo de la recarga antes de proceder. La recarga no está incluida en el precio base de $64.990.",
              },
              {
                q: "¿Hacen mantención de todas las marcas?",
                a: "Sí, realizamos mantención de aires acondicionados Samsung, Midea, Anwo, LG, Daikin, Carrier y todas las marcas del mercado. No es necesario que el equipo haya sido instalado por nosotros.",
              },
              {
                q: "¿Qué zonas cubren para mantención?",
                a: "Cubrimos toda la Región Metropolitana de Santiago: Las Condes, Vitacura, Providencia, Ñuñoa, Lo Barnechea, La Reina, Santiago Centro y más.",
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

      {/* Schema: HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Cómo se realiza la mantención de un aire acondicionado",
            description: "Proceso profesional de mantención de aire acondicionado split en Santiago, Chile.",
            totalTime: "PT1H",
            estimatedCost: { "@type": "MonetaryAmount", currency: "CLP", value: "64990" },
            step: [
              { "@type": "HowToStep", position: 1, name: "Desconexión y protección", text: "Se desconecta el equipo y se protege el piso y muebles cercanos." },
              { "@type": "HowToStep", position: 2, name: "Limpieza de filtros internos", text: "Se extraen y lavan los filtros de la unidad interior con agua y jabón neutro." },
              { "@type": "HowToStep", position: 3, name: "Limpieza del evaporador", text: "Limpieza profunda del serpentín evaporador con productos especializados." },
              { "@type": "HowToStep", position: 4, name: "Limpieza de unidad exterior", text: "Limpieza del condensador y ventilador de la unidad exterior." },
              { "@type": "HowToStep", position: 5, name: "Revisión del drenaje", text: "Se verifica y limpia el sistema de drenaje de condensado para evitar goteo." },
              { "@type": "HowToStep", position: 6, name: "Verificación de gas refrigerante", text: "Se mide la presión del gas y se verifica que esté dentro de los parámetros normales." },
              { "@type": "HowToStep", position: 7, name: "Revisión eléctrica", text: "Se revisan conexiones eléctricas, voltaje y estado de contactores." },
              { "@type": "HowToStep", position: 8, name: "Prueba de rendimiento", text: "Se enciende el equipo y se mide rendimiento en modo frío y calor. Se entrega informe de estado." },
            ],
          }),
        }}
      />

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
                name: "¿Cada cuánto tiempo debo hacer mantención a mi aire acondicionado?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Recomendamos al menos una mantención al año. Si usas el equipo intensamente (más de 8 horas diarias) o tienes mascotas, lo ideal es cada 6 meses.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto demora una mantención?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Una mantención estándar toma aproximadamente 1 hora por equipo. Si hay varios equipos, coordinamos para hacer todos el mismo día.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué pasa si mi equipo necesita gas refrigerante?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Durante la mantención revisamos la presión del gas. Si está bajo, te informamos el costo de la recarga antes de proceder. La recarga no está incluida en el precio base de $64.990.",
                },
              },
              {
                "@type": "Question",
                name: "¿Hacen mantención de todas las marcas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, realizamos mantención de aires acondicionados Samsung, Midea, Anwo, LG, Daikin, Carrier y todas las marcas del mercado.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué zonas cubren para mantención?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cubrimos toda la Región Metropolitana de Santiago: Las Condes, Vitacura, Providencia, Ñuñoa, Lo Barnechea, La Reina, Santiago Centro y más.",
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
            name: "Mantención de Aire Acondicionado",
            description: "Mantención profesional de aire acondicionado en Santiago. Limpieza profunda, revisión técnica, optimización de rendimiento.",
            provider: {
              "@type": "Organization",
              name: "Meser",
              url: "https://www.meser.cl",
            },
            areaServed: { "@type": "State", name: "Región Metropolitana de Santiago" },
            offers: {
              "@type": "Offer",
              price: "64990",
              priceCurrency: "CLP",
              description: "Mantención completa desde $64.990",
            },
          }),
        }}
      />
    </>
  );
}
