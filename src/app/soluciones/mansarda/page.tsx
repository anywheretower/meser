import type { Metadata } from "next";
import SolucionLayout from "@/components/SolucionLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado para Mansardas · Meser Santiago",
  description:
    "Climatización a medida para mansardas y altillos. Techos inclinados y geometrías difíciles requieren diagnóstico experto. Consola piso-cielo desde $649.990.",
};

export default function MansardaPage() {
  return (
    <SolucionLayout
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
    />
  );
}
