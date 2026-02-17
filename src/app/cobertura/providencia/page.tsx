import type { Metadata } from "next";
import CoberturaLayout from "@/components/CoberturaLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado Providencia · Instalación Estética · Meser",
  description:
    "Instalación de aire acondicionado en Providencia. Equipos silenciosos, instalación discreta, precio cerrado. Diagnóstico gratuito por Zoom.",
};

export default function ProvidenciaPage() {
  return (
    <CoberturaLayout
      comuna="Providencia"
      h1="Instalación de aire acondicionado en Providencia"
      subtitulo="Climatización eficiente para departamentos y oficinas en Providencia."
      parrafo="Providencia combina hogares, oficinas y espacios comerciales. Conocemos los edificios de la comuna, sus normativas y las necesidades específicas de cada tipo de espacio. Instalación discreta que respeta la arquitectura del barrio."
      experiencia={[
        "Amplia experiencia en departamentos de Providencia (nuevos y antiguos)",
        "Instalaciones en oficinas del sector Nueva Providencia",
        "Equipos Inverter silenciosos — ideales para espacios compartidos",
        "Conocimiento de regulaciones de edificios de la comuna",
        "Diagnóstico en 24-48 horas, instalación en 3-7 días hábiles",
      ]}
      testimonio={{
        quote: "El precio cerrado fue clave. Sin sorpresas, sin costos extra. Exactamente lo que prometieron desde el diagnóstico por Zoom.",
        name: "Carolina Muñoz",
      }}
    />
  );
}
