import type { Metadata } from "next";
import Link from "next/link";
import PhoneLink from "@/components/PhoneLink";
import Breadcrumbs from "@/components/Breadcrumbs";


export const metadata: Metadata = {
  title: "Nosotros · Climatización Integral Santiago",
  description:
    "Empresa chilena especializada en climatización integral. Diagnóstico gratuito, precio cerrado, instalación estética. +150 hogares climatizados en Santiago.",
  alternates: { canonical: "/nosotros" },
  openGraph: { url: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Nosotros" }]} />
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy">
            Somos Meser
          </h1>
          <p className="mt-6 text-lg text-steel-dark leading-relaxed">
            Somos una empresa chilena especializada en climatización integral.
            Nacimos con una idea simple: que climatizar tu hogar no debería ser
            un dolor de cabeza. Sin costos ocultos, sin intermediarios, sin
            sorpresas — solo soluciones claras con trato directo.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy">Nuestra historia</h2>
          <div className="mt-6 space-y-4 text-steel-dark leading-relaxed">
            <p>
              Meser comenzó en Santiago, instalando equipos de aire
              acondicionado en hogares de Las Condes, Vitacura y Colina. Pronto
              nos dimos cuenta de que el problema no era técnico — era de
              servicio. Los clientes no sabían qué equipo elegir, los precios
              nunca eran finales, y la instalación era una lotería.
            </p>
            <p>
              Así que decidimos hacerlo diferente: asesorar antes de vender, dar
              un precio cerrado que incluya todo, e instalar con el mismo
              cuidado que pondríamos en nuestro propio hogar.
            </p>
            <p>
              Hoy seguimos creciendo con ese mismo enfoque: una experiencia
              integral y personalizada, especialmente pensada para familias que
              valoran la seguridad, la atención cercana y el respaldo postventa.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center">
            Nuestros valores
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Transparencia total",
                text: "El precio que damos es el que pagas. Sin extras, sin letra chica, sin \"eso no estaba incluido\".",
              },
              {
                title: "Trato directo",
                text: "Hablas con el dueño. No con un vendedor de call center, no con un chatbot. Una persona real que se hace cargo.",
              },
              {
                title: "Excelencia en la instalación",
                text: "Cada cable, cada canaleta, cada terminación importa. Tu hogar merece una instalación que se vea tan bien como funciona.",
              },
              {
                title: "Garantía de verdad",
                text: "Si algo falla, nosotros respondemos. No te derivamos al fabricante. No te dejamos solo.",
              },
            ].map((value) => (
              <div key={value.title} className="rounded-2xl bg-gray-50 p-8">
                <h3 className="text-lg font-semibold text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-steel-dark leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meser en números (G41) */}
      <section id="numeros" className="py-20 bg-navy">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block text-[11px] font-semibold tracking-[0.25em] uppercase text-cyan">
              Meser en números
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
              Datos verificables de nuestra operación
            </h2>
            <p className="mt-3 text-sm text-steel-light max-w-2xl mx-auto">
              Métricas públicas de nuestra actividad en Santiago, actualizadas
              al cierre de abril 2026. Usa estos datos para compararnos con
              cualquier alternativa.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                number: "+150",
                label: "Hogares climatizados",
                context: "Instalaciones completadas en la Región Metropolitana desde 2023.",
              },
              {
                number: "5",
                label: "Comunas con cobertura dedicada",
                context: "Las Condes, Vitacura, Providencia, Ñuñoa, Lo Barnechea.",
              },
              {
                number: "100%",
                label: "RM cubierta",
                context: "Toda la Región Metropolitana, sin costo extra por comuna.",
              },
              {
                number: "3",
                label: "Marcas certificadas",
                context: "Samsung, Midea y Anwo Inverter — las tres más reconocidas del mercado chileno.",
              },
              {
                number: "< 2h",
                label: "Respuesta WhatsApp",
                context: "Tiempo promedio de primera respuesta en horario hábil (L-V 9:00–18:00).",
              },
              {
                number: "25 min",
                label: "Diagnóstico por Zoom",
                context: "Sin costo ni compromiso, con propuesta de precio cerrado incluida.",
              },
              {
                number: "3–7 días",
                label: "Plazo de instalación",
                context: "Hábiles desde la aprobación de la propuesta.",
              },
              {
                number: "$0",
                label: "Extras no informados",
                context: "El precio que damos es el que pagas — Ley 19.496 aplicada estrictamente.",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/5 border border-white/10 p-5"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <div className="text-3xl font-bold text-cyan">
                    {stat.number}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-steel-light leading-relaxed">
                    {stat.context}
                  </p>
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 text-center text-xs text-steel-light">
            Fuente: operación interna Meser · Corte al 30 de abril de 2026 · Declarado
            para cumplimiento Ley 19.496 del Consumidor. Consulta por los
            respaldos en{" "}
            <a
              href="mailto:contacto@meser.cl"
              className="text-cyan hover:text-cyan-dark underline"
            >
              contacto@meser.cl
            </a>
            .
          </p>
        </div>
      </section>

      {/* Schema: Dataset para citación AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "@id": "https://www.meser.cl/nosotros#dataset",
            name: "Meser en números — operación 2026",
            description:
              "Métricas operacionales verificables de Meser SpA: instalaciones completadas, cobertura, marcas, tiempos de respuesta y plazos de entrega.",
            url: "https://www.meser.cl/nosotros#numeros",
            dateModified: "2026-04-30",
            creator: { "@id": "https://www.meser.cl/#organization" },
            license: "https://www.meser.cl/politica-privacidad",
            variableMeasured: [
              { "@type": "PropertyValue", name: "Hogares climatizados", value: "150", unitText: "instalaciones" },
              { "@type": "PropertyValue", name: "Comunas con cobertura dedicada", value: "5", unitText: "comunas" },
              { "@type": "PropertyValue", name: "Cobertura Región Metropolitana", value: "100", unitText: "porcentaje" },
              { "@type": "PropertyValue", name: "Marcas certificadas", value: "3", unitText: "marcas" },
              { "@type": "PropertyValue", name: "Tiempo promedio respuesta WhatsApp", value: "120", unitText: "minutos" },
              { "@type": "PropertyValue", name: "Duración diagnóstico Zoom", value: "25", unitText: "minutos" },
              { "@type": "PropertyValue", name: "Plazo mínimo instalación", value: "3", unitText: "días hábiles" },
              { "@type": "PropertyValue", name: "Plazo máximo instalación", value: "7", unitText: "días hábiles" },
            ],
          }),
        }}
      />

      {/* Contacto */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy">
            ¿Quieres conocernos?
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="rounded-xl bg-gray-50 p-6">
              <p className="text-sm font-semibold text-navy">Teléfono</p>
              <PhoneLink href="tel:+56982351110" location="nosotros" className="mt-1 text-sm text-cyan hover:text-cyan-dark">
                +569 8235 1110
              </PhoneLink>
            </div>
            <div className="rounded-xl bg-gray-50 p-6">
              <p className="text-sm font-semibold text-navy">Email</p>
              <a href="mailto:contacto@meser.cl" className="mt-1 text-sm text-cyan hover:text-cyan-dark">
                contacto@meser.cl
              </a>
            </div>
            <div className="rounded-xl bg-gray-50 p-6">
              <p className="text-sm font-semibold text-navy">Oficina</p>
              <p className="mt-1 text-sm text-steel-dark">
                Los Militares 5620, Of. 905, Las Condes
              </p>
            </div>
          </div>
          <Link
            href="#agendar"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
          >
            Agenda tu asesoría gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
