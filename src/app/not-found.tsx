import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppLink from "@/components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description:
    "La página que buscas no existe o fue movida. Te dejamos atajos a las secciones más visitadas y a nuestro equipo por WhatsApp.",
  robots: { index: false, follow: true },
};

const sugerencias = [
  {
    label: "Paquete Todo Incluido",
    desc: "Aire + instalación + garantía desde $449.990",
    href: "/todo-incluido",
  },
  {
    label: "Catálogo de aires",
    desc: "Midea, Samsung y Anwo Inverter",
    href: "/aires-acondicionados",
  },
  {
    label: "Termos eléctricos",
    desc: "Midea Lume 50 a 120 litros",
    href: "/termos",
  },
  {
    label: "Mantención",
    desc: "Limpieza profunda + revisión desde $64.990",
    href: "/mantencion",
  },
  {
    label: "Comparativa calefacción",
    desc: "Aire acondicionado vs parafina, gas y eléctrica",
    href: "/comparativa-calefaccion",
  },
  {
    label: "Glosario de climatización",
    desc: "BTU, Inverter, Split, R32 explicados",
    href: "/glosario-climatizacion",
  },
];

export default function NotFound() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan">
              Error 404
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-navy">
              No encontramos esa página
            </h1>
            <p className="mt-4 text-lg text-steel-dark max-w-2xl mx-auto leading-relaxed">
              La URL que buscas no existe, fue movida o la escribiste con una
              letra distinta. Aquí te dejamos atajos a lo que la mayoría de
              visitantes busca.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
              >
                Volver al inicio
              </Link>
              <WhatsAppLink
                href="https://wa.me/56982351110?text=Hola%2C%20estaba%20buscando%20algo%20en%20su%20sitio%20y%20no%20lo%20encuentro"
                location="not-found"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1ebe57] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pregúntanos por WhatsApp
              </WhatsAppLink>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-steel-dark">
              Secciones más visitadas
            </h2>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sugerencias.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group rounded-2xl border border-gray-200 p-5 hover:border-cyan hover:shadow-md transition-all"
                >
                  <p className="text-sm font-semibold text-navy group-hover:text-cyan transition-colors">
                    {s.label}
                  </p>
                  <p className="mt-1 text-xs text-steel-dark leading-relaxed">
                    {s.desc}
                  </p>
                  <span className="mt-3 inline-block text-xs font-medium text-cyan">
                    Ir →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-gray-50 border border-gray-200 p-6 text-center">
            <p className="text-sm text-steel-dark">
              ¿Llegaste acá desde un link roto?{" "}
              <a
                href="mailto:contacto@meser.cl?subject=Link%20roto%20en%20meser.cl"
                className="font-semibold text-cyan hover:text-cyan-dark"
              >
                Avísanos
              </a>{" "}
              y lo arreglamos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
