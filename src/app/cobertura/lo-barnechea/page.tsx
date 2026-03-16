import type { Metadata } from "next";
import CoberturaLayout from "@/components/CoberturaLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado en Lo Barnechea",
  description:
    "Instalación de aire acondicionado en Lo Barnechea. Casas amplias, mansardas, proyectos multi-ambiente. Precio cerrado con diagnóstico gratuito.",
  alternates: { canonical: "/cobertura/lo-barnechea" },
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
      localInfo={{
        clima: "Lo Barnechea tiene el clima más extremo del sector oriente: veranos muy calurosos (35-38°C) en zonas bajas como La Dehesa, e inviernos con heladas frecuentes (-2 a 3°C). El equipo frío/calor potente es esencial.",
        tipoVivienda: "Predominan casas de 150-500 m² en condominios cerrados (La Dehesa, El Arrayán, Valle Escondido). Muchas con 2-3 pisos, mansardas y amplios jardines. Proyectos multi split de 3-5 ambientes son frecuentes.",
        desafio: "Las casas grandes requieren múltiples equipos. Las mansardas con techos inclinados necesitan soluciones especiales. Los condominios tienen horarios de acceso para trabajos de instalación.",
        solucion: "Proyectos integrales Multi Split: una sola unidad exterior potente para 3-5 ambientes. Consolas piso-cielo para mansardas. Coordinamos instalación respetando horarios y normas del condominio.",
      }}
    />
  );
}
