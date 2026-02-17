import type { Metadata } from "next";
import CoberturaLayout from "@/components/CoberturaLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado Ñuñoa · Instalación Estética · Meser",
  description:
    "Instalación de aire acondicionado en Ñuñoa. Departamentos y casas. Precio cerrado, instalación estética, garantía total. Diagnóstico gratuito.",
};

export default function NunoaPage() {
  return (
    <CoberturaLayout
      comuna="Ñuñoa"
      h1="Instalación de aire acondicionado en Ñuñoa"
      subtitulo="Climatización para departamentos y casas en una de las comunas más activas de Santiago."
      parrafo="Ñuñoa es una comuna diversa: departamentos nuevos, casas antiguas, estudios y oficinas. Cada espacio tiene sus particularidades y en Meser las conocemos. Instalación estética que respeta el carácter de tu hogar."
      experiencia={[
        "Instalaciones en edificios nuevos de Irarrázaval y Plaza Ñuñoa",
        "Experiencia con casas antiguas que requieren adaptaciones especiales",
        "Equipos silenciosos ideales para departamentos con vecinos cercanos",
        "Soluciones para estudios y espacios compactos",
        "Diagnóstico en 24-48 horas, instalación en 3-7 días hábiles",
      ]}
      testimonio={{
        quote: "Vivo en un departamento nuevo en Ñuñoa y necesitaba algo silencioso. El equipo Samsung Wind-Free no se escucha. La instalación quedó impecable.",
        name: "Javiera Soto",
      }}
    />
  );
}
