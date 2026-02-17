import type { Metadata } from "next";
import CoberturaLayout from "@/components/CoberturaLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado Las Condes · Instalación Estética · Meser",
  description:
    "Instalación de aire acondicionado en Las Condes. Servicio integral con instalación estética, precio cerrado y garantía total. Diagnóstico gratuito por Zoom.",
};

export default function LasCondesPage() {
  return (
    <CoberturaLayout
      comuna="Las Condes"
      h1="Instalación de aire acondicionado en Las Condes"
      subtitulo="Servicio integral con instalación estética para hogares en Las Condes y alrededores."
      parrafo="Las Condes es una de las comunas donde más trabajamos. Conocemos los tipos de vivienda, las regulaciones de los edificios y los estándares de calidad que nuestros clientes esperan. Cada instalación cuida el diseño interior y las terminaciones de tu hogar."
      experiencia={[
        "Instalaciones en edificios de Isidora Goyenechea, Apoquindo, Kennedy",
        "Experiencia con departamentos, casas y oficinas en la comuna",
        "Conocimiento de regulaciones de administración de edificios",
        "Tiempos de respuesta: diagnóstico en 24-48 horas, instalación en 3-7 días",
        "Técnicos certificados que conocen los accesos y normativas de la zona",
      ]}
      testimonio={{
        quote: "El diagnóstico por Zoom fue clave. En 25 minutos entendí exactamente qué necesitaba y cuánto iba a costar. La instalación en mi departamento quedó impecable.",
        name: "María González",
      }}
    />
  );
}
