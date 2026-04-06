import type { Metadata } from "next";
import SolucionLayout from "@/components/SolucionLayout";

export const metadata: Metadata = {
  title: "Sistema Multi Split · Varios Ambientes · Santiago",
  description:
    "Un solo equipo exterior para múltiples ambientes. Multi Split ideal para departamentos y casas. Cotización personalizada con diagnóstico Zoom gratuito.",
  alternates: { canonical: "/soluciones/multisplit" },
  openGraph: { url: "/soluciones/multisplit" },
};

export default function MultisplitPage() {
  return (
    <SolucionLayout
      slug="multisplit"
      label="Multi Split"
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
      casoReal={{
        titulo: "Departamento 95 m² en Las Condes — 3 ambientes",
        texto: "Departamento con living-comedor, dormitorio principal y dormitorio de niños. El edificio permitía solo 1 unidad exterior. Con un Multi Split 3x1 instalamos: 18K BTU en el living, 9K BTU en cada dormitorio, con una sola unidad exterior compacta en el balcón.",
        resultado: "Resultado: cada habitación con su temperatura independiente (living 24°C, dormitorios 22°C por la noche), un solo equipo exterior, ahorro del 35% vs 3 splits individuales.",
      }}
      faqs={[
        {
          q: "¿Cuál es la diferencia entre Multi Split y varios splits individuales?",
          a: "El Multi Split usa una sola unidad exterior potente para alimentar múltiples unidades interiores. Ventajas: menos impacto visual (1 equipo afuera vs 3), menos ruido exterior, y generalmente más económico. La desventaja: si falla la unidad exterior, se afectan todos los ambientes.",
        },
        {
          q: "¿Puedo controlar cada habitación por separado con Multi Split?",
          a: "Sí, cada unidad interior tiene su propio control remoto y termostato. Puedes tener el living a 24°C mientras el dormitorio está a 22°C, o apagar los ambientes que no usas para ahorrar energía.",
        },
        {
          q: "¿Hasta cuántos ambientes puede cubrir un Multi Split?",
          a: "Los sistemas que instalamos cubren hasta 5 unidades interiores con una sola exterior. Para una casa de 5+ ambientes, usamos 2 unidades exteriores o un sistema VRF. Lo diseñamos según tu caso específico en el diagnóstico por Zoom.",
        },
      ]}
    />
  );
}
