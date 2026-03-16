import type { Metadata } from "next";
import CoberturaLayout from "@/components/CoberturaLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado en Vitacura",
  description:
    "Instalación de aire acondicionado en Vitacura. Precio cerrado, instalación estética invisible, garantía total. Diagnóstico gratuito por Zoom.",
  alternates: { canonical: "/cobertura/vitacura" },
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
    />
  );
}
