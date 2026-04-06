import Image from "next/image";
import CotizarForm, { QuickCapture } from "./CotizarForm";
import WhatsAppLink from "./WhatsAppLink";

export default function FormularioGlobal() {
  return (
    <section id="agendar" className="relative bg-navy py-20 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/formulario-bg.webp"
        alt="Living de hogar en Santiago con climatización integral instalada"
        fill
        className="object-cover object-right"
      />
      {/* Gradient overlay left for form readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy from-40% via-navy/90 via-55% to-transparent to-75%" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
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
                  aria-hidden="true"
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

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-500/90 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="text-xs font-semibold text-white">Precios válidos por tiempo limitado</span>
        </div>

        <div className="mt-4 max-w-lg">
          <CotizarForm />
        </div>

        <div className="mt-8 max-w-lg">
          <p className="text-sm text-steel-light/70 mb-2">
            ¿Sin tiempo? Déjanos tu número y te llamamos:
          </p>
          <QuickCapture />
        </div>

        <p className="mt-6 text-sm text-steel-light/80">
          ¿Prefieres hablar ahora?{" "}
          <WhatsAppLink
            href="https://wa.me/56982351110"
            location="formulario_global"
            className="font-semibold text-cyan hover:text-cyan-dark transition-colors"
          >
            +569 8235 1110
          </WhatsAppLink>
        </p>

        {/* C11: Testimonial near form */}
        <div className="mt-8 max-w-lg rounded-xl bg-white/5 border border-white/10 p-4">
          <div className="flex items-center gap-1 text-cyan text-sm">★★★★★</div>
          <p className="mt-2 text-sm text-steel-light/90 italic leading-relaxed">
            &ldquo;Agendar fue súper fácil y en la videollamada me explicaron todo claro. Al día siguiente ya tenía la cotización y en 3 días el aire instalado.&rdquo;
          </p>
          <p className="mt-2 text-xs text-steel-light/80">
            — María González, Las Condes
          </p>
        </div>
      </div>
    </section>
  );
}
