import Link from "next/link";
import CTASection from "@/components/CTASection";

interface CoberturaLayoutProps {
  comuna: string;
  h1: string;
  subtitulo: string;
  parrafo: string;
  experiencia: string[];
  testimonio: {
    quote: string;
    name: string;
  };
}

export default function CoberturaLayout({
  comuna,
  h1,
  subtitulo,
  parrafo,
  experiencia,
  testimonio,
}: CoberturaLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              {h1}
            </h1>
            <p className="mt-4 text-lg text-cyan font-medium">{subtitulo}</p>
            <p className="mt-6 text-lg text-steel-light leading-relaxed max-w-2xl">
              {parrafo}
            </p>
            <div className="mt-10">
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
              >
                Agendar asesoría gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia en la comuna */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            Nuestra experiencia en {comuna}
          </h2>
          <ul className="mt-8 space-y-3">
            {experiencia.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-navy/80">
                <svg className="w-5 h-5 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonio */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, j) => (
              <svg key={j} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-lg text-navy/80 leading-relaxed italic">
            &ldquo;{testimonio.quote}&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-navy">
            — {testimonio.name}, {comuna}
          </p>
        </div>
      </section>

      {/* Servicios disponibles */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">
            Servicios disponibles en {comuna}
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Instalación",
                desc: "Equipo + instalación estética todo incluido",
                precio: "Desde $449.980",
                href: "/instalacion-aire-acondicionado",
              },
              {
                title: "Mantención",
                desc: "Limpieza profunda + revisión técnica",
                precio: "Desde $59.990",
                href: "/mantencion",
              },
              {
                title: "Multi Split",
                desc: "Varios ambientes, un solo equipo exterior",
                precio: "Cotización personalizada",
                href: "/soluciones/multisplit",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl border border-gray-200 p-6 hover:border-cyan hover:shadow-lg transition-all"
              >
                <h3 className="text-base font-semibold text-navy group-hover:text-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-steel-dark">{service.desc}</p>
                <p className="mt-3 text-sm font-bold text-cyan">
                  {service.precio}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`¿Vives en ${comuna}?`}
        text="Agenda tu diagnóstico gratuito por Zoom y recibe una propuesta con precio cerrado en menos de 24 horas."
      />
    </>
  );
}
