import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { BlogPost } from "@/lib/blog-posts";

interface BlogPostLayoutProps {
  post: BlogPost;
  children: React.ReactNode;
}

export default function BlogPostLayout({ post, children }: BlogPostLayoutProps) {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titulo,
    description: post.descripcion,
    datePublished: post.fecha,
    dateModified: post.fecha,
    author: {
      "@type": "Organization",
      name: "Meser",
      url: "https://www.meser.cl",
    },
    publisher: {
      "@type": "Organization",
      name: "Meser",
      url: "https://www.meser.cl",
      logo: {
        "@type": "ImageObject",
        url: "https://www.meser.cl/og-image.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.meser.cl/blog/${post.slug}`,
    },
    keywords: post.keywords,
    articleSection: post.categoria,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.titulo },
        ]}
      />

      {/* Hero */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-cyan/10 border border-cyan/20 px-3 py-1 text-xs font-semibold text-cyan">
              {post.categoria}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.titulo}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-steel-light">
              <time dateTime={post.fecha}>
                {new Date(post.fecha).toLocaleDateString("es-CL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-steel-light/40">|</span>
              <span>{post.readTime} de lectura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose-meser">{children}</div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy">
            ¿Necesitas ayuda con tu climatización?
          </h2>
          <p className="mt-3 text-steel-dark leading-relaxed">
            Agenda un diagnóstico gratuito de 25 minutos por Zoom. Te asesoramos
            sin compromiso sobre la mejor solución para tu hogar.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#agendar"
              className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
            >
              Agendar asesoría gratuita
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-navy/20 px-6 py-3 text-sm font-medium text-navy hover:bg-navy/5 transition-colors"
            >
              ← Volver al blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
