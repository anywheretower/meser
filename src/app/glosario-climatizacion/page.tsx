import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Glosario de Climatización · BTU, Inverter, Split, R32 y más",
  description:
    "Diccionario claro de términos de climatización: BTU, Inverter, Split, Multi Split, R32, COP, SEER, bomba de calor. Definiciones breves con ejemplos y cuándo importan al comprar un aire acondicionado.",
  alternates: { canonical: "/glosario-climatizacion" },
  openGraph: { url: "/glosario-climatizacion" },
};

type Termino = {
  termino: string;
  slug: string;
  resumen: string;
  descripcion: string;
  ejemplo?: string;
  relacionados?: string[];
};

const terminos: Termino[] = [
  {
    termino: "BTU",
    slug: "btu",
    resumen:
      "Unidad de medida de la capacidad de enfriamiento o calefacción de un equipo de aire acondicionado.",
    descripcion:
      "BTU (British Thermal Unit) indica cuánta energía térmica puede mover un equipo por hora. A más BTU, más capacidad para enfriar o calentar espacios grandes. En Chile la mayoría de los aires residenciales van de 9.000 a 24.000 BTU. Una regla práctica: ~500 BTU por cada m² a climatizar en Santiago.",
    ejemplo:
      "Un dormitorio de 15 m² necesita entre 7.500 y 9.000 BTU. Un living-comedor de 30 m² suele requerir 12.000 a 18.000 BTU.",
    relacionados: ["inverter", "multi-split"],
  },
  {
    termino: "Inverter",
    slug: "inverter",
    resumen:
      "Tecnología que regula la velocidad del compresor en lugar de apagarlo y encenderlo, ahorrando energía.",
    descripcion:
      "Un aire acondicionado Inverter ajusta la potencia del compresor de forma continua para mantener la temperatura exacta. Esto reduce el consumo eléctrico entre un 30% y un 50% respecto a un equipo On/Off tradicional, baja el ruido y alarga la vida útil del compresor.",
    ejemplo:
      "Un Midea Inverter 9.000 BTU consume ~0,6 kWh/hora calentando (bomba de calor), contra ~1,0 kWh/hora de un equipo On/Off equivalente.",
    relacionados: ["btu", "bomba-de-calor", "cop"],
  },
  {
    termino: "Split",
    slug: "split",
    resumen:
      "Sistema de dos piezas — unidad interior en el muro y unidad exterior fuera de la casa — conectadas por cañerías.",
    descripcion:
      "El split separa la parte ruidosa (compresor) afuera, lo que permite un interior silencioso y estético. Es el formato estándar residencial en Chile. Cada unidad interior se conecta a una unidad exterior por un par de cañerías de cobre y un cable eléctrico.",
    ejemplo:
      "Un split 1:1 climatiza un solo ambiente. Si quieres varios, revisa Multi Split.",
    relacionados: ["multi-split", "btu"],
  },
  {
    termino: "Multi Split",
    slug: "multi-split",
    resumen:
      "Un solo condensador exterior conectado a varias unidades interiores, una por ambiente.",
    descripcion:
      "Ideal para departamentos y casas donde no hay espacio para varios condensadores afuera. Reduce impacto estético, cumple reglamentos de copropiedad y permite controlar la temperatura de cada ambiente de forma independiente.",
    ejemplo:
      "Un Multi Split 2x1 enfría dormitorio + living con una sola unidad exterior en el balcón.",
    relacionados: ["split", "btu"],
  },
  {
    termino: "R32",
    slug: "r32",
    resumen:
      "Gas refrigerante actual, con menor impacto ambiental que el R410A que reemplaza.",
    descripcion:
      "El R32 tiene un potencial de calentamiento global (GWP) de 675, casi un tercio del R410A (2.088). Es el estándar en equipos nuevos vendidos en Chile desde 2020. Requiere herramientas específicas durante la instalación y la recarga.",
    ejemplo:
      "Todos los Midea, Samsung y Anwo que Meser instala en 2026 usan R32.",
    relacionados: ["inverter"],
  },
  {
    termino: "Bomba de calor",
    slug: "bomba-de-calor",
    resumen:
      "Sistema que mueve calor de un lado a otro en vez de generarlo, por lo que calienta con menos energía.",
    descripcion:
      "Un aire acondicionado con bomba de calor extrae calor del aire exterior (incluso en invierno) y lo transfiere al interior. Por cada 1 kWh eléctrico que consume, puede entregar 3 a 4 kWh de calor útil. Es la forma más eficiente de calefacción eléctrica para Santiago.",
    ejemplo:
      "Un equipo 9.000 BTU bomba de calor cuesta unos $25.560/mes en calefacción, contra $84.960 de un calefactor eléctrico tradicional (Santiago, abril 2026).",
    relacionados: ["inverter", "cop"],
  },
  {
    termino: "COP",
    slug: "cop",
    resumen:
      "Coefficient of Performance — cuántos kWh de calor entrega un equipo por cada kWh eléctrico que consume.",
    descripcion:
      "El COP mide eficiencia en modo calefacción. Un COP de 3,5 significa que por 1 kWh eléctrico el equipo entrega 3,5 kWh de calor. A mayor COP, menor cuenta de luz. Buenos equipos residenciales rondan COP 3,8 a 4,5.",
    ejemplo:
      "Un Midea Inverter 9.000 BTU con COP 4,0 consume ~580 W para entregar 2.320 W de calefacción.",
    relacionados: ["inverter", "bomba-de-calor", "seer"],
  },
  {
    termino: "SEER / EER",
    slug: "seer",
    resumen:
      "Índices de eficiencia en modo enfriamiento. SEER promedia toda una temporada; EER mide un punto fijo.",
    descripcion:
      "SEER (Seasonal EER) considera las variaciones de temperatura de toda la temporada de verano, por lo que refleja mejor el consumo real. Un SEER alto baja la cuenta de luz en los meses calurosos. En Chile los equipos Inverter residenciales suelen ir de SEER 5,0 a 8,0.",
    relacionados: ["cop", "inverter"],
  },
  {
    termino: "Clase energética",
    slug: "clase-energetica",
    resumen:
      "Etiqueta oficial (A++ a D) que indica qué tan eficiente es el equipo comparado con el estándar.",
    descripcion:
      "En Chile, los aires acondicionados llevan etiqueta de eficiencia energética similar a la europea. Un equipo clase A o superior garantiza bajo consumo. La diferencia entre A y C puede significar un 20–30% más en la cuenta de luz.",
    relacionados: ["cop", "seer"],
  },
  {
    termino: "Canaleta",
    slug: "canaleta",
    resumen:
      "Conducto plástico que oculta las cañerías entre la unidad interior y la exterior.",
    descripcion:
      "La canaleta protege las cañerías de cobre, el cable eléctrico y el drenaje, y mejora la estética. Una instalación \"prolija\" usa canaleta del mismo color que el muro, con esquinas y uniones selladas. Instaladores sin oficio dejan cables y tubos a la vista — esto acorta la vida del equipo y afea el hogar.",
    ejemplo:
      "En Meser usamos canaleta blanca o color muro, con acabados a 90° y tornillos ocultos.",
  },
  {
    termino: "Carga térmica",
    slug: "carga-termica",
    resumen:
      "Cantidad de BTU necesarios para climatizar un espacio, considerando m², orientación y aislación.",
    descripcion:
      "Un cálculo de carga térmica real toma metros cuadrados, altura de cielo, ventanas, orientación (norte/sur/poniente), número de ocupantes y aislación térmica. Sobredimensionar un equipo gasta más energía; subdimensionar deja espacios sin enfriar.",
    ejemplo:
      "Dormitorio 12 m² a poniente en un cuarto piso: ~7.500 BTU. Mismo dormitorio a sur en planta baja: ~6.000 BTU.",
    relacionados: ["btu"],
  },
  {
    termino: "WiFi / Smart",
    slug: "wifi",
    resumen:
      "Módulo que permite controlar el equipo desde el celular o por voz (Google Home, Alexa).",
    descripcion:
      "Los equipos WiFi modernos se controlan por app oficial del fabricante (Midea Air, SmartThings de Samsung) y permiten encender el equipo antes de llegar a casa, programar horarios y monitorear consumo. La mayoría de los equipos vendidos en Chile en 2026 lo incluyen de serie.",
    relacionados: ["inverter"],
  },
];

function GlosarioSchemaScript() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": "https://www.meser.cl/glosario-climatizacion#termset",
    name: "Glosario de climatización",
    description:
      "Diccionario de términos de climatización residencial en Chile: BTU, Inverter, Split, R32, COP, SEER, bomba de calor y más.",
    url: "https://www.meser.cl/glosario-climatizacion",
    hasDefinedTerm: terminos.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `https://www.meser.cl/glosario-climatizacion#${t.slug}`,
      name: t.termino,
      description: t.descripcion,
      inDefinedTermSet: "https://www.meser.cl/glosario-climatizacion#termset",
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function GlosarioPage() {
  return (
    <>
      <GlosarioSchemaScript />
      <Breadcrumbs items={[{ label: "Glosario de climatización" }]} />

      {/* Hero */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy">
            Glosario de climatización
          </h1>
          <p className="mt-4 text-lg text-steel-dark leading-relaxed">
            Definiciones breves y claras de los términos que vas a ver cuando
            cotices un aire acondicionado en Chile. Cada entrada incluye por
            qué importa al comprar.
          </p>
        </div>
      </section>

      {/* Índice */}
      <section className="py-6 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-steel-dark">
            Ir a término
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {terminos.map((t) => (
              <a
                key={t.slug}
                href={`#${t.slug}`}
                className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-navy hover:border-cyan hover:text-cyan transition-colors"
              >
                {t.termino}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Términos */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {terminos.map((t) => (
              <article
                key={t.slug}
                id={t.slug}
                className="scroll-mt-24 border-b border-gray-100 pb-10 last:border-b-0"
              >
                <h2 className="text-2xl font-bold text-navy">{t.termino}</h2>
                <p className="mt-2 text-base font-medium text-steel-dark">
                  {t.resumen}
                </p>
                <p className="mt-4 text-sm text-navy/80 leading-relaxed">
                  {t.descripcion}
                </p>
                {t.ejemplo && (
                  <div className="mt-4 rounded-xl border-l-4 border-cyan bg-cyan/5 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan">
                      Ejemplo
                    </p>
                    <p className="mt-1 text-sm text-navy/80">{t.ejemplo}</p>
                  </div>
                )}
                {t.relacionados && t.relacionados.length > 0 && (
                  <p className="mt-4 text-xs text-steel">
                    Términos relacionados:{" "}
                    {t.relacionados.map((r, i) => {
                      const rel = terminos.find((x) => x.slug === r);
                      if (!rel) return null;
                      return (
                        <span key={r}>
                          <a
                            href={`#${rel.slug}`}
                            className="font-medium text-cyan hover:text-cyan-dark"
                          >
                            {rel.termino}
                          </a>
                          {i < t.relacionados!.length - 1 ? ", " : ""}
                        </span>
                      );
                    })}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy">
            ¿Te faltó algún término?
          </h2>
          <p className="mt-3 text-sm text-steel-dark">
            Si estás cotizando y no entiendes un concepto, escríbenos. Nuestro
            equipo responde por WhatsApp en menos de 2 horas.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link
              href="/contacto"
              className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
            >
              Contactar a Meser
            </Link>
            <Link
              href="/comparativa-calefaccion"
              className="rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-white transition-colors"
            >
              Ver comparativa de calefacción
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
