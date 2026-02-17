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
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
        <p className="mt-4 text-lg text-steel-light leading-relaxed">{text}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaHref}
            className="rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
          >
            {ctaLabel}
          </Link>
          {whatsapp && (
            <a
              href="https://wa.me/56982351110"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-steel-light hover:text-cyan transition-colors"
            >
              Prefiero WhatsApp → +569 8235 1110
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
