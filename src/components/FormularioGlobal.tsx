import Image from "next/image";
import CotizarForm from "./CotizarForm";

export default function FormularioGlobal() {
  return (
    <section id="agendar" className="relative bg-navy py-20 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/formulario-bg.png"
        alt=""
        fill
        className="object-cover object-right"
      />
      {/* Gradient overlay left for form readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy from-40% via-navy/90 via-55% to-transparent to-75%" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight whitespace-nowrap">
          Agenda tu asesoría gratuita
        </h2>
        <p className="mt-4 text-lg text-steel-light/80 leading-relaxed max-w-lg">
          25 minutos por Zoom con un especialista. Sin compromiso, sin
          presión — solo la información que necesitas.
        </p>

        <div className="mt-6 space-y-3">
          {[
            "Diagnóstico experto de tu espacio",
            "Propuesta con precio cerrado",
            "Respuesta en menos de 2 horas",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center shrink-0">
                <svg
                  className="w-3 h-3 text-cyan"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm text-steel-light/90">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-lg">
          <CotizarForm />
        </div>

        <p className="mt-6 text-sm text-steel-light/60">
          ¿Prefieres hablar ahora?{" "}
          <a
            href="https://wa.me/56982351110"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan hover:text-cyan-dark transition-colors"
          >
            +569 8235 1110
          </a>
        </p>
      </div>
    </section>
  );
}
