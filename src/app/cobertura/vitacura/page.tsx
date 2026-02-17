import type { Metadata } from "next";
import CoberturaLayout from "@/components/CoberturaLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado Vitacura · Instalación Estética · Meser",
  description:
    "Instalación de aire acondicionado en Vitacura. Precio cerrado, instalación estética invisible, garantía total. Diagnóstico gratuito por Zoom.",
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
    />
  );
}
