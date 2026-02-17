import type { Metadata } from "next";
import CoberturaLayout from "@/components/CoberturaLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado Lo Barnechea · Instalación Estética · Meser",
  description:
    "Instalación de aire acondicionado en Lo Barnechea. Casas amplias, mansardas, proyectos multi-ambiente. Precio cerrado con diagnóstico gratuito.",
};

export default function LoBarnecheaPage() {
  return (
    <CoberturaLayout
      comuna="Lo Barnechea"
      h1="Instalación de aire acondicionado en Lo Barnechea"
      subtitulo="Proyectos integrales para casas y condominios en Lo Barnechea."
      parrafo="Lo Barnechea se caracteriza por casas amplias, muchas con mansardas y múltiples ambientes. Nuestros proyectos Multi Split permiten climatizar toda la vivienda con un solo equipo exterior, manteniendo la estética de tu hogar."
      experiencia={[
        "Proyectos en casas de La Dehesa, El Arrayán y Valle Escondido",
        "Experiencia con mansardas y techos inclinados (consolas piso-cielo)",
        "Sistemas Multi Split para casas de múltiples ambientes",
        "Equipos frío/calor — esenciales para las temperaturas extremas de la zona",
        "Coordinación de instalación con tiempos de acceso a condominios",
      ]}
      testimonio={{
        quote: "Teníamos una mansarda imposible de climatizar. Meser propuso una consola piso-cielo y quedó perfecto. El diagnóstico por Zoom nos ahorró tiempo y plata.",
        name: "Felipe Araya",
      }}
    />
  );
}
