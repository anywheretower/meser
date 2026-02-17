import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Somos Meser · Climatización Integral Santiago",
  description:
    "Empresa chilena especializada en climatización integral. Diagnóstico gratuito, precio cerrado, instalación estética. +150 hogares climatizados en Santiago.",
};

export default function NosotrosPage() {
  return (
    <>
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

      {/* Números */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "+150", label: "Hogares climatizados" },
              { number: "100%", label: "RM cubierta" },
              { number: "2", label: "Marcas certificadas" },
              { number: "Total", label: "Garantía equipo + instalación" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-cyan">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm text-steel-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy">
            ¿Quieres conocernos?
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="rounded-xl bg-gray-50 p-6">
              <p className="text-sm font-semibold text-navy">Teléfono</p>
              <a href="tel:+56982351110" className="mt-1 text-sm text-cyan hover:text-cyan-dark">
                +569 8235 1110
              </a>
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
            href="/cotizar"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
          >
            Agenda tu asesoría gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
