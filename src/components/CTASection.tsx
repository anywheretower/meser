import Link from "next/link";

interface CTASectionProps {
  title?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
  whatsapp?: boolean;
}

export default function CTASection({
  title = "¿Listo para climatizar tu hogar?",
  text = "Agenda una asesoría gratuita de 25 minutos por Zoom. Sin compromiso, sin presión — solo la información que necesitas para tomar la mejor decisión.",
  ctaLabel = "Agendar asesoría gratuita",
  ctaHref = "/cotizar",
  whatsapp = true,
}: CTASectionProps) {
  return (
    <section className="relative bg-navy py-24 overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan/[0.04] blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-cyan/[0.03] blur-[80px]" />
      </div>
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
          {title}
        </h2>
        <p className="mt-5 text-lg text-steel-light/80 leading-relaxed">
          {text}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaHref}
            className="group inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-all btn-glow"
          >
            {ctaLabel}
            <svg
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          {whatsapp && (
            <a
              href="https://wa.me/56982351110"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-steel-light/70 hover:text-cyan transition-colors"
            >
              Prefiero WhatsApp &rarr; +569 8235 1110
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
