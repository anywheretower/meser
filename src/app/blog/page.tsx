import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog · Guías y Consejos de Climatización",
  description:
    "Guías, consejos y comparativas sobre aire acondicionado. ¿Cuánto cuesta instalar? ¿Midea vs Samsung? ¿Qué son los BTU? Todo lo que necesitas saber.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

const categorias = [...new Set(blogPosts.map((a) => a.categoria))];

export default function BlogPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.meser.cl/blog#collection",
    name: "Blog Meser — Guías de climatización para hogares en Santiago",
    description:
      "Guías, consejos y comparativas sobre aire acondicionado, calefacción y climatización residencial en Chile.",
    url: "https://www.meser.cl/blog",
    inLanguage: "es-CL",
    isPartOf: { "@id": "https://www.meser.cl/#website" },
    publisher: { "@id": "https://www.meser.cl/#organization" },
    about: [
      { "@type": "Thing", name: "Aire acondicionado" },
      { "@type": "Thing", name: "Climatización residencial" },
      { "@type": "Thing", name: "Eficiencia energética" },
    ],
    mainEntity: {
      "@type": "ItemList",
      name: "Artículos del blog Meser",
      numberOfItems: blogPosts.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: blogPosts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://www.meser.cl/blog/${post.slug}`,
        item: {
          "@type": "BlogPosting",
          "@id": `https://www.meser.cl/blog/${post.slug}`,
          headline: post.titulo,
          description: post.descripcion,
          datePublished: post.fecha,
          dateModified: post.fechaActualizacion ?? post.fecha,
          url: `https://www.meser.cl/blog/${post.slug}`,
          articleSection: post.categoria,
          keywords: post.keywords,
          author: { "@id": "https://www.meser.cl/#organization" },
          ...(post.image && {
            image: `https://www.meser.cl${post.image}`,
          }),
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy">Guías de climatización para hogares en Santiago</h1>
            <p className="mt-4 text-lg text-steel-dark leading-relaxed">
              Guías, consejos y comparativas para que tomes la mejor decisión
              sobre la climatización de tu hogar.
            </p>
          </div>

          {/* Categorías */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full bg-navy px-4 py-1.5 text-xs font-semibold text-white">
              Todos
            </span>
            {categorias.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-gray-100 px-4 py-1.5 text-xs font-medium text-steel-dark hover:bg-gray-200 cursor-pointer transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Artículos */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((articulo) => (
              <Link
                key={articulo.slug}
                href={`/blog/${articulo.slug}`}
                className="group rounded-2xl border border-gray-200 overflow-hidden hover:border-cyan hover:shadow-lg transition-all"
              >
                <div className="relative h-44 bg-gradient-to-br from-navy to-navy-light overflow-hidden">
                  {articulo.image ? (
                    <Image
                      src={articulo.image}
                      alt={articulo.imageAlt || articulo.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : null}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-medium text-white bg-navy/70 backdrop-blur-sm px-3 py-1 rounded-full">
                      {articulo.categoria}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-base font-semibold text-navy leading-snug group-hover:text-cyan transition-colors">
                    {articulo.titulo}
                  </h2>
                  <p className="mt-2 text-sm text-steel-dark leading-relaxed line-clamp-3">
                    {articulo.descripcion}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-cyan">
                      Leer artículo →
                    </span>
                    <div className="flex items-center gap-3 text-xs text-steel">
                      <span>{articulo.readTime}</span>
                      <span>
                        {new Date(articulo.fecha).toLocaleDateString("es-CL", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-navy">
            ¿Prefieres hablar con un experto?
          </h2>
          <p className="mt-3 text-steel-dark">
            Si tienes dudas sobre qué equipo elegir, agenda un diagnóstico
            gratuito de 25 minutos por Zoom.
          </p>
          <Link
            href="#agendar"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
          >
            Agendar asesoría gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
