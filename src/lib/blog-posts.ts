export interface BlogPost {
  slug: string;
  titulo: string;
  descripcion: string;
  keywords: string;
  categoria: string;
  fecha: string;
  /** Fecha de última revisión sustantiva del contenido (precios, datos, ejemplos). Si no está definido, se usa `fecha`. */
  fechaActualizacion?: string;
  readTime: string;
  image?: string;
  imageAlt?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cuanto-cuesta-instalar-aire-acondicionado-chile",
    titulo:
      "Costo de instalar aire acondicionado en Chile (2026)",
    descripcion:
      "Desglosamos todos los costos: equipo, instalación, materiales. Comparamos precios del mercado y te mostramos cómo ahorrar con el modelo todo incluido.",
    keywords: "cuánto cuesta instalar aire acondicionado Chile",
    categoria: "Precios",
    fecha: "2026-03-16",
    readTime: "6 min",
    image: "/images/blog/cuanto-cuesta-instalar.webp",
    imageAlt: "Aire acondicionado Midea con escudo de garantía — inversión protegida",
  },
  {
    slug: "aire-acondicionado-departamento-santiago",
    titulo:
      "Cómo elegir el aire acondicionado ideal para tu departamento en Santiago",
    descripcion:
      "Guía paso a paso para elegir el equipo correcto: BTU necesarios, tipo de instalación, ruido, consumo y regulaciones de edificios.",
    keywords: "aire acondicionado departamento Santiago",
    categoria: "Guías",
    fecha: "2026-03-16",
    readTime: "8 min",
    image: "/images/blog/departamento-santiago.webp",
    imageAlt: "Living de departamento moderno con aire acondicionado y control por tablet",
  },
  {
    slug: "midea-vs-samsung",
    titulo: "Midea vs Samsung: ¿Cuál es mejor para tu hogar?",
    descripcion:
      "Comparativa detallada entre las dos marcas que instalamos. Tecnología, precios, eficiencia, ruido y funciones inteligentes.",
    keywords: "Midea vs Samsung aire acondicionado",
    categoria: "Comparativas",
    fecha: "2026-03-16",
    readTime: "7 min",
    image: "/images/blog/midea-vs-samsung.webp",
    imageAlt: "Pareja evaluando opciones de aire acondicionado Midea en tablet",
  },
  {
    slug: "que-son-los-btu",
    titulo: "¿Qué son los BTU y cuántos necesito?",
    descripcion:
      "Explicación simple de la unidad de medida más importante en climatización. Incluye tabla de referencia por metros cuadrados.",
    keywords: "BTU aire acondicionado calculadora",
    categoria: "Guías",
    fecha: "2026-03-16",
    readTime: "5 min",
    image: "/images/blog/que-son-los-btu.webp",
    imageAlt: "Equipo Midea con flujos de aire frío y calor representando capacidad en BTU",
  },
  {
    slug: "mantencion-aire-acondicionado",
    titulo: "Mantención de aire acondicionado: cuándo, cómo y por qué",
    descripcion:
      "Todo sobre la mantención: frecuencia recomendada, qué incluye, señales de alerta y por qué no deberías saltártela.",
    keywords: "mantención aire acondicionado",
    categoria: "Mantención",
    fecha: "2026-03-16",
    readTime: "8 min",
    image: "/images/blog/mantencion.webp",
    imageAlt: "Mujer coordinando mantención de unidad exterior de aire acondicionado",
  },
  {
    slug: "multi-split-departamento",
    titulo: "Multi Split: la solución para climatizar todo el departamento",
    descripcion:
      "Un solo equipo exterior, múltiples interiores. Cómo funciona, cuánto cuesta y para quién es ideal el sistema Multi Split.",
    keywords: "multi split departamento",
    categoria: "Soluciones",
    fecha: "2026-03-16",
    readTime: "7 min",
    image: "/images/blog/multi-split.webp",
    imageAlt: "Equipo Midea con flujos de aire frío y calor para múltiples ambientes",
  },
  {
    slug: "comparativa-calefaccion-chile",
    titulo: "Parafina vs Gas vs Eléctrica vs Aire Acondicionado: cuál conviene en Chile (2026)",
    descripcion:
      "Comparativa de costos de calefacción actualizados a marzo 2026. El aire acondicionado Inverter cuesta $25.560/mes — 70% menos que calefacción eléctrica. Incluye tabla de retorno de inversión.",
    keywords: "comparativa calefacción Chile costo parafina gas aire acondicionado",
    categoria: "Comparativas",
    fecha: "2026-03-24",
    readTime: "6 min",
    image: "/images/blog/instalacion-estetica.webp",
    imageAlt: "Habitación calefaccionada con aire acondicionado Inverter",
  },
  {
    slug: "instalacion-estetica",
    titulo:
      "Instalación estética de aire acondicionado: el nuevo estándar",
    descripcion:
      "Canaletas ocultas, cables invisibles, acabados perfectos. Por qué la instalación estética debería ser la norma, no la excepción.",
    keywords: "instalación estética aire acondicionado",
    categoria: "Instalación",
    fecha: "2026-03-16",
    readTime: "6 min",
    image: "/images/blog/instalacion-estetica.webp",
    imageAlt: "Dormitorio con aire acondicionado instalado estéticamente sin cables visibles",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPublishedPosts(): BlogPost[] {
  return blogPosts;
}

/**
 * Devuelve hasta `limit` posts relacionados al slug dado.
 * Prioriza misma categoría, luego resto en orden del array. Excluye el post mismo.
 */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return blogPosts.slice(0, limit);
  const others = blogPosts.filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.categoria === current.categoria);
  const rest = others.filter((p) => p.categoria !== current.categoria);
  return [...sameCategory, ...rest].slice(0, limit);
}
