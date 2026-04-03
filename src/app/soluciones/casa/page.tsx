import type { Metadata } from "next";
import SolucionLayout from "@/components/SolucionLayout";

export const metadata: Metadata = {
  title: "Climatización para Casas en Santiago",
  description:
    "Proyecto integral de climatización para casas. Desde una habitación hasta toda la vivienda con sistema multisplit. Precio cerrado, instalación estética.",
  alternates: { canonical: "/soluciones/casa" },
};

export default function CasaPage() {
  return (
    <SolucionLayout
      slug="casa"
      label="Casas"
      h1="Climatización integral para casas en Santiago"
      subtitulo="Desde una habitación hasta toda la vivienda con sistema multisplit."
      parrafo="Las casas ofrecen más flexibilidad para la instalación, pero también más variables: múltiples pisos, distancias entre unidades, y la necesidad de mantener la estética exterior. En Meser diseñamos proyectos integrales que consideran cada detalle."
      desafios={[
        {
          title: "Múltiples ambientes",
          text: "Con sistemas Multi Split, un solo equipo exterior alimenta hasta 5 ambientes interiores. Sin saturar la fachada ni multiplicar unidades exteriores.",
        },
        {
          title: "Distancias largas",
          text: "En casas de dos pisos o con espacios amplios, las distancias entre unidades importan. Calculamos y planificamos cada metro de cañería.",
        },
        {
          title: "Estética exterior",
          text: "La unidad exterior se posiciona estratégicamente para minimizar impacto visual y ruido. Sin improvisar.",
        },
        {
          title: "Eficiencia energética",
          text: "Equipos Inverter que consumen hasta 70% menos que los convencionales. Frío en verano, calor en invierno. Un equipo para todo el año.",
        },
      ]}
      paquetes={[
        {
          label: "Una habitación",
          btu: "Split Muro 9K BTU",
          espacio: "Hasta 18 m²",
          precio: "Desde $449.990",
        },
        {
          label: "Living o comedor",
          btu: "Split Muro 12K-18K BTU",
          espacio: "Hasta 32 m²",
          precio: "Desde $479.990",
        },
        {
          label: "Casa completa",
          btu: "Multi Split personalizado",
          espacio: "Múltiples ambientes",
          precio: "Cotización personalizada",
        },
      ]}
      ctaTitle="¿Quieres climatizar tu casa?"
      casoReal={{
        titulo: "Casa 180 m² en La Dehesa — 4 ambientes",
        texto: "Casa de 2 pisos con living-comedor, escritorio en primer piso, 2 dormitorios en segundo piso y mansarda como sala de estar. El cliente quería climatizar todo sin saturar la fachada con múltiples equipos exteriores. Diseñamos un sistema Multi Split 4x1 con una sola unidad exterior lateral.",
        resultado: "Resultado: 4 ambientes con control independiente de temperatura, un solo equipo exterior discreto, y ahorro del 40% vs instalar 4 splits individuales.",
      }}
      faqs={[
        {
          q: "¿Es mejor un Multi Split o varios splits individuales para mi casa?",
          a: "Para casas con 3+ ambientes, el Multi Split suele ser mejor: un solo equipo exterior (menos impacto visual y menos ruido), instalación más limpia y control independiente por habitación. Para 1-2 ambientes, splits individuales son más económicos.",
        },
        {
          q: "¿Cuánto cuesta climatizar una casa completa en Santiago?",
          a: "Depende de la cantidad de ambientes y el tamaño. Una casa con 2 ambientes parte desde $800.000 con Multi Split. Para 3-4 ambientes, el rango es $1.200.000-$1.800.000. Te damos un precio cerrado exacto en el diagnóstico gratuito por Zoom.",
        },
        {
          q: "¿Pueden climatizar casas de 2 pisos sin romper paredes?",
          a: "Sí. Planificamos la ruta de cañerías para minimizar la intervención: usamos ductos existentes cuando es posible, perforación diamantada precisa y canaletas ocultas pintadas al tono de la pared. El resultado es una instalación limpia sin rastros visibles.",
        },
      ]}
    />
  );
}
