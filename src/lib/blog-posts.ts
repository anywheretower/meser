export interface BlogPost {
  slug: string;
  titulo: string;
  descripcion: string;
  keywords: string;
  categoria: string;
  fecha: string;
  readTime: string;
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cuanto-cuesta-instalar-aire-acondicionado-chile",
    titulo:
      "¿Cuánto cuesta instalar un aire acondicionado en Chile? (Guía 2026)",
    descripcion:
      "Desglosamos todos los costos: equipo, instalación, materiales. Comparamos precios del mercado y te mostramos cómo ahorrar con el modelo todo incluido.",
    keywords: "cuánto cuesta instalar aire acondicionado Chile",
    categoria: "Precios",
    fecha: "2026-03-16",
    readTime: "6 min",
    published: true,
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
    published: true,
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
    published: true,
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
    published: true,
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
    published: true,
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
    published: true,
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
    published: true,
  },
  {
    slug: "inverter-vale-la-pena",
    titulo:
      "Aire acondicionado Inverter: ¿Vale la pena? (Ahorro real calculado)",
    descripcion:
      "Calculamos cuánto ahorra un equipo Inverter vs uno convencional en la cuenta de luz mensual. Los números hablan solos.",
    keywords: "aire acondicionado inverter vale la pena",
    categoria: "Guías",
    fecha: "2026-03-16",
    readTime: "6 min",
    published: false,
  },
  {
    slug: "climatizar-mansarda",
    titulo: "Climatizar una mansarda: desafíos y soluciones",
    descripcion:
      "Las mansardas son los espacios más difíciles de climatizar. Te explicamos por qué y cómo resolverlo con la solución correcta.",
    keywords: "aire acondicionado mansarda",
    categoria: "Soluciones",
    fecha: "2026-03-16",
    readTime: "5 min",
    published: false,
  },
  {
    slug: "todo-incluido-vs-separado",
    titulo:
      "Todo incluido vs. comprar por separado: la verdad sobre los precios",
    descripcion:
      "Hacemos la matemática que nadie hace. ¿Realmente conviene comprar equipo e instalación por separado? Spoiler: no.",
    keywords: "aire acondicionado todo incluido precio",
    categoria: "Precios",
    fecha: "2026-03-16",
    readTime: "5 min",
    published: false,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.published);
}
