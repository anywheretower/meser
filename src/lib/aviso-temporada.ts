/**
 * Aviso de temporada de /mantencion. Sin fechas de corte en el texto, para que
 * no vuelva a quedar vencido (req #258: decía «antes del 30 de abril» en noviembre).
 *
 * Marzo a agosto: invierno. Septiembre a febrero: calor. Cambia solo: la página
 * se regenera una vez al día (ver `revalidate` en app/mantencion/page.tsx).
 */
export type Temporada = "calor" | "invierno";

export const AVISOS: Record<Temporada, { titulo: string; texto: string }> = {
  calor: {
    titulo: "Prepara tu equipo para el verano",
    texto:
      "Un aire acondicionado sin mantención consume hasta 30% más. Agenda ahora y asegura tu fecha antes de los días de más calor.",
  },
  invierno: {
    titulo: "Prepara tu equipo para el invierno",
    texto:
      "Un aire acondicionado sin mantención consume hasta 30% más. Agenda ahora y asegura tu fecha antes de los días de más frío.",
  },
};

/** El mes se lee en hora de Chile: el servidor corre en UTC. */
export function temporadaDe(fecha: Date): Temporada {
  const mes = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Santiago",
      month: "numeric",
    }).format(fecha),
  );
  return mes >= 3 && mes <= 8 ? "invierno" : "calor";
}
