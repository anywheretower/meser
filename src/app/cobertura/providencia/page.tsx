import type { Metadata } from "next";
import CoberturaLayout from "@/components/CoberturaLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado en Providencia",
  description:
    "Instalación de aire acondicionado en Providencia. Equipos silenciosos, instalación discreta, precio cerrado. Diagnóstico gratuito por Zoom.",
  alternates: { canonical: "/cobertura/providencia" },
  openGraph: { url: "/cobertura/providencia" },
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
      localInfo={{
        clima: "Providencia tiene el microclima típico de Santiago centro-oriente: veranos de 30-35°C con noches cálidas, inviernos de 3-8°C. La contaminación invernal hace útil el modo filtro anti-PM2.5.",
        tipoVivienda: "Mix de departamentos nuevos (30-80 m²) en torres de Nueva Providencia y departamentos antiguos remodelados en barrios como Pedro de Valdivia y Manuel Montt. Oficinas en el eje Providencia.",
        desafio: "Departamentos antiguos con muros gruesos y sin preparación para AC requieren adaptación especial. Los edificios nuevos tienen espacios prediseñados pero muchas veces con distancias cortas al vecino.",
        solucion: "Equipos Inverter ultra-silenciosos (20 dB) para convivencia en departamentos. Instalación con perforación y sellado profesional que minimiza intervención en muros antiguos.",
      }}
      stats={[
        { label: "Instalaciones en la comuna", value: "38+" },
        { label: "Edificios y oficinas", value: "22" },
        { label: "Nota promedio clientes", value: "5.0" },
        { label: "Años en la zona", value: "3+" },
      ]}
      faqs={[
        {
          q: "¿Pueden instalar en departamentos antiguos de Providencia?",
          a: "Sí, tenemos amplia experiencia en edificios de Pedro de Valdivia, Manuel Montt y Suecia. Los departamentos antiguos con muros gruesos requieren perforación y sellado profesional que minimiza la intervención. Lo evaluamos todo en el diagnóstico por Zoom.",
        },
        {
          q: "¿Los equipos Inverter son realmente silenciosos para un departamento en Providencia?",
          a: "Sí. Los equipos Samsung Wind-Free y Midea que instalamos operan desde 19-20 dB en modo silencioso, más bajo que una conversación susurrada. Ideal para edificios de Providencia donde la distancia entre vecinos es corta.",
        },
        {
          q: "¿Instalan aires acondicionados en oficinas de Nueva Providencia?",
          a: "Sí, atendemos oficinas en todo el eje Providencia. Coordinamos la instalación fuera del horario laboral o fines de semana para no interrumpir la operación. Los equipos Inverter consumen hasta un 70% menos que los convencionales.",
        },
      ]}
    />
  );
}
