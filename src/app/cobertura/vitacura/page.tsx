import type { Metadata } from "next";
import CoberturaLayout from "@/components/CoberturaLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado en Vitacura",
  description:
    "Instalación de aire acondicionado en Vitacura. Precio cerrado, instalación estética invisible, garantía total. Diagnóstico gratuito por Zoom.",
  alternates: { canonical: "/cobertura/vitacura" },
  openGraph: { url: "/cobertura/vitacura" },
};

export default function VitacuraPage() {
  return (
    <CoberturaLayout
      comuna="Vitacura"
      h1="Instalación de aire acondicionado en Vitacura"
      subtitulo="Climatización premium para hogares que exigen los más altos estándares."
      parrafo="En Vitacura, la estética y la calidad no son opcionales — son requisitos. Nuestras instalaciones estéticas con canaletas ocultas y acabados perfectos están pensadas para hogares donde cada detalle importa."
      experiencia={[
        "Instalaciones en casas y departamentos de alto estándar en Vitacura",
        "Experiencia con proyectos multi-ambiente en viviendas amplias",
        "Coordinación con administraciones de edificios exclusivos",
        "Equipos premium Samsung Wind-Free y Midea EcoMaster con IA",
        "Tiempos de respuesta: diagnóstico en 24 horas, instalación en 3-7 días",
      ]}
      testimonio={{
        quote: "Por fin encontré un servicio que entiende que no quiero ver cables ni tubos. La instalación quedó perfecta, como si siempre hubiera estado ahí.",
        name: "Rodrigo Fernández",
      }}
      localInfo={{
        clima: "Vitacura es una de las comunas más calurosas de Santiago en verano (picos de 36°C+) por su ubicación en el piedemonte. Inviernos con heladas frecuentes (0-3°C). Equipo frío/calor es imprescindible.",
        tipoVivienda: "Casas de 150-400 m² con múltiples ambientes y mansardas, además de departamentos premium en Alonso de Córdova y Nueva Costanera. Proyectos multi split son frecuentes para climatizar toda la casa.",
        desafio: "Las viviendas amplias requieren soluciones multi-ambiente. Muchas casas tienen mansardas con techos inclinados que complican la instalación estándar y necesitan diagnóstico experto.",
        solucion: "Multi Split con una sola unidad exterior para toda la casa. Consolas piso-cielo para mansardas. Cada ambiente con control independiente de temperatura.",
      }}
      stats={[
        { label: "Proyectos multi split", value: "25+" },
        { label: "Mansardas climatizadas", value: "12" },
        { label: "Nota promedio clientes", value: "5.0" },
        { label: "Ambientes promedio/proyecto", value: "3.2" },
      ]}
      faqs={[
        {
          q: "¿Cuánto cuesta climatizar una casa completa en Vitacura?",
          a: "Depende de la cantidad de ambientes. Un sistema Multi Split para 3 ambientes parte desde $1.200.000 aproximadamente. Para casas de 4-5 ambientes, la cotización es personalizada según las distancias y configuración. Te lo detallamos en el diagnóstico gratuito por Zoom.",
        },
        {
          q: "¿Pueden climatizar mansardas con techo inclinado en Vitacura?",
          a: "Sí, es una de nuestras especialidades. Para mansardas usamos consolas piso-cielo que se instalan a nivel del suelo y distribuyen el aire verticalmente. No requieren espacio en la pared y funcionan perfectamente con techos inclinados.",
        },
        {
          q: "¿Qué marca recomiendan para casas de alto estándar en Vitacura?",
          a: "Para hogares premium recomendamos Samsung Wind-Free por su tecnología de dispersión de aire sin viento directo, diseño elegante y conectividad WiFi con SmartThings. Para una relación calidad-precio óptima, Midea EcoMaster con IA es excelente.",
        },
        {
          q: "¿Cómo manejan la estética de la instalación en viviendas premium?",
          a: "Usamos canaletas pintadas al tono de la pared, cables completamente ocultos y ubicación estratégica del equipo exterior. El resultado es una instalación invisible que se integra con la decoración de tu hogar.",
        },
      ]}
    />
  );
}
