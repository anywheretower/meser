import Image from "next/image";

type Variant = "compact" | "full";

interface SECBadgeProps {
  /** `compact` para cards de producto, `full` para footer / páginas legales */
  variant?: Variant;
  /** Código de aprobación SEC específico del modelo, si existe */
  certCode?: string;
  className?: string;
}

/**
 * Sello oficial SEC (Superintendencia de Electricidad y Combustibles de Chile)
 * con logo + QR. Usado como indicador visual de certificación en todos los
 * productos. Si se entrega `certCode`, se anuncia al lector de pantalla.
 */
export default function SECBadge({
  variant = "compact",
  certCode,
  className = "",
}: SECBadgeProps) {
  const label = certCode
    ? `Certificado SEC · Aprobación N° ${certCode}`
    : "Certificado SEC · Clase A de eficiencia energética";

  if (variant === "full") {
    return (
      <div
        className={`inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 ${className}`}
        role="img"
        aria-label={label}
      >
        <Image
          src="/images/sec-certificado.webp"
          alt=""
          width={56}
          height={75}
          className="h-16 w-auto"
          aria-hidden="true"
        />
        <div className="text-left leading-tight">
          <p className="text-xs font-semibold text-white">Certificado SEC</p>
          <p className="text-[11px] text-steel-light">
            Eficiencia energética clase A &middot; Chile
          </p>
        </div>
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1 text-[10px] font-medium text-steel-dark ${className}`}
      role="img"
      aria-label={label}
      title={label}
    >
      <Image
        src="/images/sec-certificado.webp"
        alt=""
        width={28}
        height={38}
        className="h-8 w-auto shrink-0"
        aria-hidden="true"
      />
      <span className="flex flex-col leading-tight">
        <span className="font-semibold text-navy">Certificado SEC</span>
        <span className="text-[9px] text-steel">Clase A · Chile</span>
      </span>
    </span>
  );
}
