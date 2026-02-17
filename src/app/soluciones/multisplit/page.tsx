import type { Metadata } from "next";
import SolucionLayout from "@/components/SolucionLayout";

export const metadata: Metadata = {
  title: "Sistema Multi Split · Varios Ambientes · Meser Santiago",
  description:
    "Un solo equipo exterior para múltiples ambientes. Multi Split ideal para departamentos y casas. Cotización personalizada con diagnóstico Zoom gratuito.",
};

export default function MultisplitPage() {
  return (
    <SolucionLayout
      h1="Multi Split: climatiza todo tu hogar con un solo equipo exterior"
      subtitulo="Hasta 5 ambientes independientes, una sola unidad exterior."
      parrafo="El sistema Multi Split es la solución perfecta cuando necesitas climatizar varios ambientes sin llenar la fachada de unidades exteriores. Un solo compresor exterior alimenta múltiples unidades interiores, cada una con control independiente de temperatura."
      desafios={[
        {
          title: "Múltiples ambientes, un exterior",
          text: "Un solo equipo exterior alimenta hasta 5 unidades interiores. Menos impacto visual, menos ruido, más eficiencia.",
        },
        {
          title: "Control independiente",
          text: "Cada habitación tiene su propio control de temperatura. El dormitorio a 22°C mientras el living está a 24°C. Total flexibilidad.",
        },
        {
          title: "Planificación técnica",
          text: "Un Multi Split requiere un diseño técnico preciso: distancias, capacidades, distribución. Por eso el diagnóstico por Zoom es fundamental.",
        },
        {
          title: "Instalación compleja",
          text: "Más cañerías, más conexiones, más detalles. Nuestros técnicos tienen experiencia específica en Multi Split y cuidan cada terminación.",
        },
      ]}
      paquetes={[
        {
          label: "2 ambientes",
          btu: "Multi Split 2x1",
          espacio: "2 interiores + 1 exterior",
          precio: "Cotización personalizada",
        },
        {
          label: "3 ambientes",
          btu: "Multi Split 3x1",
          espacio: "3 interiores + 1 exterior",
          precio: "Cotización personalizada",
        },
        {
          label: "4-5 ambientes",
          btu: "Multi Split 4x1 / 5x1",
          espacio: "4-5 interiores + 1 exterior",
          precio: "Cotización personalizada",
        },
      ]}
      ctaTitle="¿Necesitas climatizar varios ambientes?"
    />
  );
}
