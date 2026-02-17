import type { Metadata } from "next";
import SolucionLayout from "@/components/SolucionLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado para Departamentos Santiago · Meser",
  description:
    "Climatización discreta para departamentos en Santiago. Equipos silenciosos, instalación sin afectar fachadas. Diagnóstico gratuito por Zoom.",
};

export default function DepartamentoPage() {
  return (
    <SolucionLayout
      h1="Aire acondicionado para departamentos en Santiago"
      subtitulo="Instalación discreta que respeta la estética y las normas de tu edificio."
      parrafo="Climatizar un departamento tiene sus particularidades: regulaciones del edificio, ubicación de la unidad exterior, ruido para los vecinos y estética del espacio. En Meser evaluamos todo esto en un diagnóstico por Zoom gratuito y te proponemos la solución exacta para tu caso."
      desafios={[
        {
          title: "Regulación del edificio",
          text: "Muchos edificios restringen dónde y cómo instalar la unidad exterior. Lo resolvemos con ubicaciones aprobadas y montaje discreto.",
        },
        {
          title: "Ruido",
          text: "Los equipos Inverter que instalamos operan desde 19 dB — más silenciosos que una conversación susurrada. Tus vecinos ni se enteran.",
        },
        {
          title: "Estética",
          text: "En departamentos cada metro cuadrado importa. Nuestras instalaciones con canaletas ocultas mantienen tu diseño interior intacto.",
        },
        {
          title: "Eficiencia en espacios compactos",
          text: "Un equipo bien dimensionado consume menos y climatiza mejor. Por eso el diagnóstico previo es clave — no adivinamos, calculamos.",
        },
      ]}
      paquetes={[
        {
          label: "Dormitorio",
          btu: "Split Muro 9K BTU",
          espacio: "Hasta 18 m²",
          precio: "Desde $449.980",
        },
        {
          label: "Living-comedor",
          btu: "Split Muro 12K BTU",
          espacio: "Hasta 24 m²",
          precio: "Desde $499.980",
        },
        {
          label: "Departamento completo",
          btu: "Multi Split",
          espacio: "1 exterior, múltiples interiores",
          precio: "Cotización personalizada",
        },
      ]}
      ctaTitle="¿Quieres climatizar tu departamento?"
    />
  );
}
