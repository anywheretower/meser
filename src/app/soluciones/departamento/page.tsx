import type { Metadata } from "next";
import SolucionLayout from "@/components/SolucionLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado para Departamentos Santiago",
  description:
    "Climatización discreta para departamentos en Santiago. Equipos silenciosos, instalación sin afectar fachadas. Diagnóstico gratuito por Zoom.",
  alternates: { canonical: "/soluciones/departamento" },
  openGraph: { url: "/soluciones/departamento" },
};

export default function DepartamentoPage() {
  return (
    <SolucionLayout
      slug="departamento"
      label="Departamentos"
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
          precio: "Desde $449.990",
        },
        {
          label: "Living-comedor",
          btu: "Split Muro 12K BTU",
          espacio: "Hasta 24 m²",
          precio: "Desde $479.990",
        },
        {
          label: "Departamento completo",
          btu: "Multi Split",
          espacio: "1 exterior, múltiples interiores",
          precio: "Cotización personalizada",
        },
      ]}
      ctaTitle="¿Quieres climatizar tu departamento?"
      casoReal={{
        titulo: "Departamento 65 m² en Providencia — 2 ambientes",
        texto: "Departamento en piso 12 con living-comedor orientado al poniente (mucho calor en verano) y un dormitorio. El edificio permitía solo 1 unidad exterior en el balcón. Instalamos un Multi Split 2x1: 12K BTU para el living y 9K BTU para el dormitorio, con una sola unidad exterior compacta.",
        resultado: "Resultado: temperatura estable en ambos ambientes, cuenta de luz solo $15.000/mes más en verano, canaletas invisibles y aprobación del comité en 5 días.",
      }}
      faqs={[
        {
          q: "¿Mi edificio permite instalar aire acondicionado?",
          a: "La mayoría de los edificios en Santiago lo permiten con autorización del comité de administración. En Meser preparamos la documentación técnica y coordinamos con tu administración para facilitar la aprobación. En el diagnóstico por Zoom verificamos las condiciones de tu edificio.",
        },
        {
          q: "¿Cuántos BTU necesito para mi departamento?",
          a: "La regla general es 600-800 BTU por m². Un dormitorio de 15 m² necesita 9K BTU, un living de 24 m² necesita 12K BTU. Si tu departamento recibe mucho sol o está en un piso alto, puede necesitar más. Lo calculamos con precisión en el diagnóstico.",
        },
        {
          q: "¿El aire acondicionado se escucha mucho en un departamento?",
          a: "Los equipos Inverter que instalamos operan desde 19 dB en modo silencioso — más bajo que el ruido de una biblioteca. Samsung Wind-Free dispersa el aire sin flujo directo, evitando la sensación de viento. Tus vecinos no notarán diferencia.",
        },
      ]}
    />
  );
}
