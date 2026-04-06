import type { Metadata } from "next";
import SolucionLayout from "@/components/SolucionLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado para Mansardas · Santiago",
  description:
    "Climatización a medida para mansardas y altillos. Techos inclinados y geometrías difíciles requieren diagnóstico experto. Consola piso-cielo desde $649.990.",
  alternates: { canonical: "/soluciones/mansarda" },
  openGraph: { url: "/soluciones/mansarda" },
};

export default function MansardaPage() {
  return (
    <SolucionLayout
      slug="mansarda"
      label="Mansardas"
      h1="Climatización para mansardas y altillos"
      subtitulo="Espacios difíciles requieren soluciones inteligentes."
      parrafo="Las mansardas son de los espacios más desafiantes para climatizar: techos inclinados, geometrías irregulares, poco espacio en paredes y temperaturas extremas por la exposición directa al techo. En Meser tenemos experiencia resolviendo estos casos con soluciones a medida."
      desafios={[
        {
          title: "Techos inclinados",
          text: "No siempre hay pared disponible para un split muro. Las consolas piso-cielo son la solución ideal: se instalan a nivel del piso y distribuyen el aire verticalmente.",
        },
        {
          title: "Calor extremo en verano",
          text: "Las mansardas reciben calor directo del techo. Necesitan un equipo correctamente dimensionado — no el mismo que un living. Lo calculamos en el diagnóstico.",
        },
        {
          title: "Espacio reducido",
          text: "Cada centímetro cuenta. La instalación debe ser especialmente cuidadosa con la ubicación del equipo y el recorrido de las cañerías.",
        },
        {
          title: "Acceso para instalación",
          text: "Escaleras estrechas, accesos complicados. Nuestros técnicos tienen experiencia en estos espacios y planifican la logística antes de llegar.",
        },
      ]}
      paquetes={[
        {
          label: "Mansarda pequeña",
          btu: "Consola 14K BTU",
          espacio: "Hasta 23 m²",
          precio: "Desde $649.990",
        },
        {
          label: "Mansarda grande",
          btu: "Consola 18K BTU",
          espacio: "Hasta 32 m²",
          precio: "Desde $679.990",
        },
        {
          label: "Mansarda + otra habitación",
          btu: "Multi Split personalizado",
          espacio: "Múltiples ambientes",
          precio: "Cotización personalizada",
        },
      ]}
      ctaTitle="¿Necesitas climatizar tu mansarda?"
      casoReal={{
        titulo: "Mansarda 28 m² en Lo Barnechea — techo a 2 aguas",
        texto: "Mansarda usada como dormitorio principal con techo inclinado a 2 aguas (altura mínima 1.5m en los costados). En verano superaba los 38°C por el calor del techo. Un split mural no cabía por la inclinación. Instalamos una consola piso-cielo de 18K BTU en la pared recta central.",
        resultado: "Resultado: mansarda habitable todo el año, temperatura de 22°C estable incluso en enero, sin intervención en el techo inclinado.",
      }}
      faqs={[
        {
          q: "¿Por qué hace tanto calor en las mansardas?",
          a: "Las mansardas están directamente bajo el techo, que absorbe el calor solar durante todo el día. Sin aislación térmica adecuada, la temperatura interior puede superar los 38-40°C en verano. Un aire acondicionado bien dimensionado resuelve el problema por completo.",
        },
        {
          q: "¿Qué es una consola piso-cielo y por qué es mejor para mansardas?",
          a: "Es un equipo que se instala a nivel del piso en lugar de en la pared. Distribuye el aire verticalmente, lo que funciona perfectamente con techos inclinados donde no hay espacio para un split mural convencional. Además, es más fácil de mantener y limpiar.",
        },
        {
          q: "¿Se puede llevar las cañerías hasta una mansarda en un tercer piso?",
          a: "Sí, pero requiere planificación experta. Las distancias largas entre la unidad exterior y la mansarda deben evaluarse para asegurar el rendimiento del equipo. En el diagnóstico por Zoom revisamos la ruta óptima y confirmamos la viabilidad técnica.",
        },
      ]}
    />
  );
}
