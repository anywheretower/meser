import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog · Guías y Consejos de Climatización · Meser",
  description:
    "Guías, consejos y comparativas sobre aire acondicionado. ¿Cuánto cuesta instalar? ¿Midea vs Samsung? ¿Qué son los BTU? Todo lo que necesitas saber.",
};

const articulos = [
  {
    titulo: "¿Cuánto cuesta instalar un aire acondicionado en Chile? (Guía 2026)",
    descripcion:
      "Desglosamos todos los costos: equipo, instalación, materiales. Comparamos precios del mercado y te mostramos cómo ahorrar con el modelo todo incluido.",
    keywords: "cuánto cuesta instalar aire acondicionado Chile",
    categoria: "Precios",
  },
  {
    titulo: "Cómo elegir el aire acondicionado ideal para tu departamento en Santiago",
    descripcion:
      "Guía paso a paso para elegir el equipo correcto: BTU necesarios, tipo de instalación, ruido, consumo y regulaciones de edificios.",
    keywords: "aire acondicionado departamento Santiago",
    categoria: "Guías",
  },
  {
    titulo: "Midea vs Samsung: ¿Cuál es mejor para tu hogar?",
    descripcion:
      "Comparativa detallada entre las dos marcas que instalamos. Tecnología, precios, eficiencia, ruido y funciones inteligentes.",
    keywords: "Midea vs Samsung aire acondicionado",
    categoria: "Comparativas",
  },
  {
    titulo: "¿Qué son los BTU y cuántos necesito?",
    descripcion:
      "Explicación simple de la unidad de medida más importante en climatización. Incluye tabla de referencia por metros cuadrados.",
    keywords: "BTU aire acondicionado calculadora",
    categoria: "Guías",
  },
  {
    titulo: "Aire acondicionado Inverter: ¿Vale la pena? (Ahorro real calculado)",
    descripcion:
      "Calculamos cuánto ahorra un equipo Inverter vs uno convencional en la cuenta de luz mensual. Los números hablan solos.",
    keywords: "aire acondicionado inverter vale la pena",
    categoria: "Guías",
  },
  {
    titulo: "Mantención de aire acondicionado: cuándo, cómo y por qué",
    descripcion:
      "Todo sobre la mantención: frecuencia recomendada, qué incluye, señales de alerta y por qué no deberías saltártela.",
    keywords: "mantención aire acondicionado",
    categoria: "Mantención",
  },
  {
    titulo: "Climatizar una mansarda: desafíos y soluciones",
    descripcion:
      "Las mansardas son los espacios más difíciles de climatizar. Te explicamos por qué y cómo resolverlo con la solución correcta.",
    keywords: "aire acondicionado mansarda",
    categoria: "Soluciones",
  },
  {
    titulo: "Multi Split: la solución para climatizar todo el departamento",
    descripcion:
      "Un solo equipo exterior, múltiples interiores. Cómo funciona, cuánto cuesta y para quién es ideal el sistema Multi Split.",
    keywords: "multi split departamento",
    categoria: "Soluciones",
  },
  {
    titulo: "Instalación estética de aire acondicionado: el nuevo estándar",
    descripcion:
      "Canaletas ocultas, cables invisibles, acabados perfectos. Por qué la instalación estética debería ser la norma, no la excepción.",
    keywords: "instalación estética aire acondicionado",
    categoria: "Instalación",
  },
  {
    titulo: "Todo incluido vs. comprar por separado: la verdad sobre los precios",
    descripcion:
      "Hacemos la matemática que nadie hace. ¿Realmente conviene comprar equipo e instalación por separado? Spoiler: no.",
    keywords: "aire acondicionado todo incluido precio",
    categoria: "Precios",
  },
];

const categorias = [...new Set(articulos.map((a) => a.categoria))];

export default function BlogPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy">Blog</h1>
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
            {articulos.map((articulo) => (
              <article
                key={articulo.titulo}
                className="group rounded-2xl border border-gray-200 overflow-hidden hover:border-cyan hover:shadow-lg transition-all"
              >
                {/* Placeholder image */}
                <div className="h-40 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                  <span className="text-xs font-medium text-cyan bg-cyan/10 px-3 py-1 rounded-full">
                    {articulo.categoria}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-base font-semibold text-navy leading-snug group-hover:text-cyan transition-colors">
                    {articulo.titulo}
                  </h2>
                  <p className="mt-2 text-sm text-steel-dark leading-relaxed line-clamp-3">
                    {articulo.descripcion}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-cyan">
                    Próximamente
                  </span>
                </div>
              </article>
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
            href="/cotizar"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
          >
            Agendar asesoría gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
