import Link from "next/link";
import CTASection from "@/components/CTASection";

type Desafio = {
  title: string;
  text: string;
};

type Paquete = {
  label: string;
  btu: string;
  precio: string;
  espacio: string;
};

interface SolucionLayoutProps {
  h1: string;
  subtitulo: string;
  parrafo: string;
  desafios: Desafio[];
  paquetes: Paquete[];
  ctaTitle?: string;
}

export default function SolucionLayout({
  h1,
  subtitulo,
  parrafo,
  desafios,
  paquetes,
  ctaTitle,
}: SolucionLayoutProps) {
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
                Diagnóstico gratuito por Zoom
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Desafíos */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">
            Desafíos y cómo los resolvemos
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {desafios.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-6"
              >
                <h3 className="text-base font-semibold text-navy">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-steel-dark leading-relaxed">
                  {d.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluciones recomendadas */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">
            Soluciones recomendadas
          </h2>
          <div className="mt-12 space-y-4">
            {paquetes.map((p) => (
              <div
                key={p.label}
                className="flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl bg-white border border-gray-200 p-6 gap-4"
              >
                <div>
                  <h3 className="text-base font-semibold text-navy">
                    {p.label}
                  </h3>
                  <p className="text-sm text-steel-dark">
                    {p.btu} · {p.espacio}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-navy">
                    {p.precio}
                  </span>
                  <Link
                    href="/cotizar"
                    className="rounded-full bg-cyan px-5 py-2 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors whitespace-nowrap"
                  >
                    Cotizar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
            ¿Cómo funciona?
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Diagnóstico por Zoom",
                text: "25 minutos gratis. Analizamos tu espacio y te recomendamos la mejor solución.",
              },
              {
                step: "2",
                title: "Propuesta precio cerrado",
                text: "Todo incluido: equipo, instalación, materiales y garantía. Sin sorpresas.",
              },
              {
                step: "3",
                title: "Instalación estética",
                text: "Técnicos certificados. Canaletas ocultas, acabados prolijos. Garantía total.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="w-12 h-12 rounded-full bg-cyan text-navy flex items-center justify-center text-lg font-bold mx-auto">
                  {item.step}
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-steel-dark">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={ctaTitle || "¿Listo para climatizar tu espacio?"}
        text="Agenda tu diagnóstico gratuito por Zoom. Sin compromiso, sin presión."
      />
    </>
  );
}
