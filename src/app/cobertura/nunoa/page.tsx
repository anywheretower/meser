import type { Metadata } from "next";
import CoberturaLayout from "@/components/CoberturaLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado en Ñuñoa",
  description:
    "Instalación de aire acondicionado en Ñuñoa. Departamentos y casas. Precio cerrado, instalación estética, garantía total. Diagnóstico gratuito.",
  alternates: { canonical: "/cobertura/nunoa" },
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
      localInfo={{
        clima: "Ñuñoa tiene temperaturas similares al centro de Santiago: veranos hasta 33°C con islas de calor en zonas más densas, inviernos entre 3-7°C. La comuna ha crecido mucho en densidad, aumentando la necesidad de climatización.",
        tipoVivienda: "Boom inmobiliario reciente: muchos departamentos nuevos de 40-70 m² en Irarrázaval y Plaza Ñuñoa. También casas antiguas de 80-150 m² en barrios residenciales que requieren soluciones diferentes.",
        desafio: "En edificios nuevos el espacio para la unidad exterior es limitado (balcones pequeños). Las casas antiguas tienen techos altos y muros gruesos que dificultan el paso de cañerías.",
        solucion: "Equipos compactos de alta eficiencia para departamentos nuevos. En casas antiguas, diagnóstico experto para encontrar la ruta óptima de cañerías con mínima intervención.",
      }}
      stats={[
        { label: "Instalaciones en la comuna", value: "32+" },
        { label: "Edificios nuevos atendidos", value: "15" },
        { label: "Casas antiguas adaptadas", value: "11" },
        { label: "Nota promedio clientes", value: "4.9" },
      ]}
      faqs={[
        {
          q: "¿Pueden instalar en los edificios nuevos de Irarrázaval?",
          a: "Sí, tenemos experiencia en la mayoría de los edificios nuevos de Irarrázaval y Plaza Ñuñoa. Muchos vienen con espacio prediseñado para la unidad exterior en el balcón. Verificamos las condiciones específicas de tu edificio en el diagnóstico por Zoom.",
        },
        {
          q: "¿Qué solución recomiendan para una casa antigua en Ñuñoa?",
          a: "Las casas antiguas de Ñuñoa tienen muros gruesos y techos altos. Realizamos un diagnóstico detallado para encontrar la ruta óptima de cañerías con mínima intervención. Usamos perforación diamantada y sellado profesional para no dañar la estructura original.",
        },
        {
          q: "¿Qué equipo recomiendan para un departamento de 50 m² en Ñuñoa?",
          a: "Para un departamento de 50 m² recomendamos un split muro de 12K BTU. Si el departamento recibe mucho sol o tiene ventanales grandes, puede necesitar 18K BTU. Lo definimos con precisión en el diagnóstico gratuito según tu orientación y piso.",
        },
      ]}
    />
  );
}
