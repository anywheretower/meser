import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { airesGroups, formatPrice } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";
import WhatsAppLink from "@/components/WhatsAppLink";
import Breadcrumbs from "@/components/Breadcrumbs";


export const metadata: Metadata = {
  title: "Instalación Aire Acondicionado Santiago · Desde $399.990 Todo Incluido",
  description:
    "Compra aire acondicionado Midea y Samsung Inverter con instalación en Santiago desde $399.990 todo incluido. Equipo + montaje estético + garantía. +150 hogares climatizados.",
  alternates: { canonical: "/aires-acondicionados" },
};

function ProductSchemaScript() {
  const products = airesGroups.flatMap((grupo) =>
    grupo.models.map((p) => ({
      "@type": "Product",
      name: p.name,
      brand: { "@type": "Brand", name: p.brand },
      description: `${p.name} - ${p.specs.join(", ")}. ${p.coverage || ""}`.trim(),
      image: p.image ? `https://www.meser.cl${p.image}` : undefined,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "CLP",
        lowPrice: p.price,
        highPrice: p.todoIncluidoPrice,
        offerCount: 2,
        offers: [
          {
            "@type": "Offer",
            name: "Solo equipo",
            price: p.price,
            priceCurrency: "CLP",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "Meser" },
          },
          {
            "@type": "Offer",
            name: "Con instalación todo incluido",
            price: p.todoIncluidoPrice,
            priceCurrency: "CLP",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "Meser" },
          },
        ],
      },
    }))
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catálogo de Aires Acondicionados Meser",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: p,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AiresAcondicionadosPage() {
  return (
    <>
      <ProductSchemaScript />
      <Breadcrumbs items={[{ label: "Aires Acondicionados" }]} />
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy">
              Compra tu aire acondicionado con instalación en Santiago
            </h1>
            <p className="mt-4 text-lg text-steel-dark leading-relaxed">
              Samsung, Midea y Anwo Inverter frío/calor con WiFi y eficiencia clase A.
              Solo equipo desde $299.990 o todo incluido con instalación estética desde $399.990.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-steel-dark">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                +150 hogares climatizados
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Instalación en 24-48 hrs
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Garantía total incluida
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo por marca */}
      {airesGroups.map((grupo, groupIdx) => (
        <section
          key={`${grupo.brand}-${grupo.line}`}
          className="py-16 odd:bg-gray-50 even:bg-white"
          {...(groupIdx === 0 ? { "data-track-section": "products" } : {})}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy">{grupo.brand}</h2>
              <p className="text-sm font-medium text-cyan">{grupo.line}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {grupo.models.map((producto, modelIdx) => (
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
                    <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white text-sm font-bold shadow-md z-10">
                      -{Math.round(((producto.originalPrice - producto.price) / producto.originalPrice) * 100)}%
                    </div>
                  )}

                  {producto.image && (
                    <div className="relative w-full h-40 mb-4">
                      <Image
                        src={producto.image}
                        alt={`${producto.name} - aire acondicionado ${producto.brand} ${producto.coverage || ""}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        {...(groupIdx === 0 && modelIdx < 4 ? { priority: true } : { loading: "lazy" })}
                      />
                    </div>
                  )}

                  <h3 className="text-base font-semibold text-navy">
                    {producto.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-3">
                    {producto.coverage && (
                      <span className="text-sm text-steel-dark">
                        {producto.coverage}
                      </span>
                    )}
                    {producto.fichaUrl && (
                      <a
                        href={producto.fichaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-steel hover:text-cyan transition-colors"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                        Ficha técnica
                      </a>
                    )}
                  </div>

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
                    <WhatsAppLink
                      href={`https://wa.me/56982351110?text=${encodeURIComponent(`Hola, me interesa el ${producto.name}. ¿Podrían darme más información?`)}`}
                      location={`aires_${producto.id}`}
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
      ))}

      {/* Comparativa de marcas */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center mb-4">
            Samsung vs Midea vs Anwo: ¿cuál elegir?
          </h2>
          <p className="text-sm text-steel-dark text-center max-w-2xl mx-auto mb-10">
            Las tres marcas que instalamos son Inverter, frío/calor y con WiFi. La diferencia está en tecnología, precio y funciones.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-navy px-4 py-3 text-left text-xs font-semibold text-white">Aspecto</th>
                  <th className="bg-navy px-4 py-3 text-center text-xs font-semibold text-white">Samsung Wind-Free</th>
                  <th className="bg-navy px-4 py-3 text-center text-xs font-semibold text-white">Midea EcoMaster</th>
                  <th className="bg-navy px-4 py-3 text-center text-xs font-semibold text-white">Anwo Ecoflow</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Precio (12K BTU con instalación)", "$629.990", "$449.990", "$449.990"],
                  ["Tecnología destacada", "Wind-Free (sin corriente directa)", "IA EcoMaster (aprende hábitos)", "Refrigerante R32 (ecológico)"],
                  ["Eficiencia energética", "Clase A", "Clase A", "Clase A"],
                  ["Nivel de ruido interior", "~19 dB (ultra silencioso)", "~22 dB (muy silencioso)", "~24 dB (silencioso)"],
                  ["Control WiFi / App", "SmartThings (muy completa)", "Midea AIR (buena)", "App Anwo (básica)"],
                  ["Mejor para", "Premium, hogar conectado, máximo confort", "Mejor relación calidad-precio, ahorro en luz", "Presupuesto medio, eficiencia ecológica"],
                  ["Garantía con Meser", "Total (equipo + instalación)", "Total (equipo + instalación)", "Total (equipo + instalación)"],
                ].map(([aspect, samsung, midea, anwo], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-medium text-navy">{aspect}</td>
                    <td className="px-4 py-3 text-center text-navy/80">{samsung}</td>
                    <td className="px-4 py-3 text-center text-navy/80">{midea}</td>
                    <td className="px-4 py-3 text-center text-navy/80">{anwo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-steel-dark">
            ¿No estás seguro cuál elegir?{" "}
            <Link href="#agendar" className="font-semibold text-cyan hover:text-cyan-dark">
              Agenda un diagnóstico gratuito
            </Link>{" "}
            y te ayudamos a decidir.
          </p>
        </div>
      </section>

      {/* W3: Social proof — instalaciones reales */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center mb-4">
            +150 hogares ya confían en Meser
          </h2>
          <p className="text-sm text-steel-dark text-center max-w-2xl mx-auto mb-10">
            Instalaciones reales en Santiago con acabado estético profesional.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "El diagnóstico por Zoom fue clave. En 25 minutos entendí exactamente qué necesitaba. La instalación quedó impecable.",
                name: "María G.",
                location: "Las Condes",
                product: "Midea 12K BTU",
              },
              {
                quote: "Coticé en tres empresas y en todas aparecían extras. En Meser el precio fue uno solo y no cambió. Súper recomendados.",
                name: "Rodrigo F.",
                location: "Vitacura",
                product: "Samsung Wind-Free 9K",
              },
              {
                quote: "Lo que más me gustó es que hablé directo con el dueño. No un vendedor, no un call center. Excelente atención.",
                name: "Carolina M.",
                location: "Providencia",
                product: "Midea 18K BTU",
              },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm text-navy/75 leading-relaxed">{t.quote}</blockquote>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-steel-dark">{t.location}</p>
                  </div>
                  <span className="text-[10px] font-medium text-cyan bg-cyan/10 px-2 py-1 rounded-full">{t.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* W6: Cross-link a termos */}
      <section className="py-12 bg-cyan/5 border-y border-cyan/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-navy">¿También necesitas agua caliente?</h3>
            <p className="text-sm text-steel-dark mt-1">Termos eléctricos Midea Lume desde $149.990 con instalación disponible.</p>
          </div>
          <Link
            href="/termos"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
          >
            Ver termos eléctricos &rarr;
          </Link>
        </div>
      </section>

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
            <div className="relative rounded-2xl border-2 border-cyan p-6">
              <div className="absolute -top-3 left-4 rounded-full bg-red-500 px-3 py-0.5 text-[11px] font-bold text-white uppercase tracking-wider">
                Promo hasta 31/03
              </div>
              <h3 className="text-base font-semibold text-navy">
                Instalación (solo servicio)
              </h3>
              <div className="mt-2">
                <span className="text-sm text-steel line-through mr-2">$150.000</span>
                <span className="text-xl font-bold text-navy">$100.000</span>
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
