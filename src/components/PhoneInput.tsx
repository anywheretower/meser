"use client";

/**
 * Celular chileno con el prefijo +56 9 ya puesto: la persona escribe solo
 * los 8 dígitos que siguen. El valor que se emite es el número completo
 * («+56 9 1234 5678») o "" mientras esté vacío.
 */

const PREFIJO = "+56 9";

/** Los 8 dígitos que van después del +56 9, tolerando que peguen el número entero. */
function digitosDe(texto: string): string {
  let d = texto.replace(/\D/g, "");
  if (d.startsWith("569") && d.length >= 11) d = d.slice(3);
  else if (d.startsWith("56") && d.length >= 10) d = d.slice(2);
  if (d.startsWith("9") && d.length === 9) d = d.slice(1);
  return d.slice(0, 8);
}

/** Los dígitos locales del valor emitido (que ya trae el prefijo puesto). */
function digitosDelValor(valor: string): string {
  if (valor.startsWith(PREFIJO)) return valor.slice(PREFIJO.length).replace(/\D/g, "").slice(0, 8);
  return digitosDe(valor);
}

function formatear(d: string): string {
  return d.length > 4 ? `${d.slice(0, 4)} ${d.slice(4)}` : d;
}

/** true si el valor trae los 8 dígitos completos. */
export function telefonoCompleto(valor: string): boolean {
  return digitosDelValor(valor).length === 8;
}

type Props = {
  id?: string;
  value: string;
  onChange: (valor: string) => void;
  required?: boolean;
  /** Clases del contenedor (borde, fondo, radio, padding). */
  className?: string;
  /** Clases del prefijo fijo. */
  prefijoClassName?: string;
  /** Clases del input (color de texto y del placeholder). */
  inputClassName?: string;
};

export default function PhoneInput({
  id,
  value,
  onChange,
  required,
  className = "",
  prefijoClassName = "",
  inputClassName = "",
}: Props) {
  const digitos = digitosDelValor(value);
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`shrink-0 select-none ${prefijoClassName}`} aria-hidden="true">
        {PREFIJO}
      </span>
      <input
        id={id}
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        aria-label="Número de celular, 8 dígitos después del +56 9"
        required={required}
        pattern="[0-9]{4} [0-9]{4}"
        value={formatear(digitos)}
        onChange={(e) => {
          const d = digitosDe(e.target.value);
          onChange(d ? `${PREFIJO} ${formatear(d)}` : "");
        }}
        placeholder="1234 5678"
        className={`min-w-0 flex-1 bg-transparent focus:outline-none ${inputClassName}`}
      />
    </div>
  );
}
