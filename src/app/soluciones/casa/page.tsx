import type { Metadata } from "next";
import SolucionLayout from "@/components/SolucionLayout";

export const metadata: Metadata = {
  title: "Climatización para Casas en Santiago · Meser",
  description:
    "Proyecto integral de climatización para casas. Desde una habitación hasta toda la vivienda con sistema multisplit. Precio cerrado, instalación estética.",
};

export default function CasaPage() {
  return (
    <SolucionLayout
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
          precio: "Desde $449.980",
        },
        {
          label: "Living o comedor",
          btu: "Split Muro 12K-18K BTU",
          espacio: "Hasta 32 m²",
          precio: "Desde $499.980",
        },
        {
          label: "Casa completa",
          btu: "Multi Split personalizado",
          espacio: "Múltiples ambientes",
          precio: "Cotización personalizada",
        },
      ]}
      ctaTitle="¿Quieres climatizar tu casa?"
    />
  );
}
