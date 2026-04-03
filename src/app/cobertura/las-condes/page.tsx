import type { Metadata } from "next";
import CoberturaLayout from "@/components/CoberturaLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado en Las Condes",
  description:
    "Instalación de aire acondicionado en Las Condes. Servicio integral con instalación estética, precio cerrado y garantía total. Diagnóstico gratuito por Zoom.",
  alternates: { canonical: "/cobertura/las-condes" },
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
      localInfo={{
        clima: "Las Condes presenta veranos calurosos (32-36°C) con alta exposición solar en edificios de la zona oriente. En invierno las temperaturas bajan a 2-5°C. La mayoría de departamentos necesitan frío/calor.",
        tipoVivienda: "Predominan departamentos de 60-120 m² en edificios de 10-25 pisos en Apoquindo y Kennedy, y casas amplias en sectores como San Carlos de Apoquindo. Muchos edificios limitan a 1 unidad exterior por departamento.",
        desafio: "Los edificios de Las Condes tienen regulaciones estrictas de fachada. Muchas administraciones exigen aprobación del comité y requieren que la instalación sea invisible desde el exterior.",
        solucion: "Instalación estética con canaletas ocultas que cumple con los reglamentos de copropiedad. Coordinamos directamente con la administración de tu edificio y gestionamos los permisos necesarios.",
      }}
      stats={[
        { label: "Instalaciones en la comuna", value: "45+" },
        { label: "Edificios atendidos", value: "28" },
        { label: "Nota promedio clientes", value: "4.9" },
        { label: "Tiempo promedio instalación", value: "4h" },
      ]}
      faqs={[
        {
          q: "¿Necesito permiso de la administración del edificio en Las Condes?",
          a: "Sí, la mayoría de los edificios en Las Condes (Apoquindo, Kennedy, Isidora Goyenechea) requieren aprobación del comité de administración. En Meser coordinamos directamente con tu administración y preparamos la documentación técnica necesaria para agilizar la aprobación.",
        },
        {
          q: "¿Cuánto cuesta instalar un aire acondicionado en Las Condes?",
          a: "Nuestros paquetes todo incluido parten desde $449.990 (equipo 9K BTU + instalación estética + garantía). Para departamentos más grandes o multi split, el precio varía según la cantidad de ambientes. Te lo detallamos en el diagnóstico gratuito por Zoom.",
        },
        {
          q: "¿Hacen instalaciones en casas de San Carlos de Apoquindo?",
          a: "Sí, tenemos amplia experiencia en casas del sector oriente de Las Condes, incluyendo San Carlos de Apoquindo y La Dehesa baja. Para casas grandes recomendamos sistemas Multi Split que climatizan varios ambientes con un solo equipo exterior.",
        },
        {
          q: "¿Cuánto demora coordinar la instalación en un edificio de Las Condes?",
          a: "Desde que apruebas la propuesta, el equipo está instalado en 3-7 días hábiles. Si tu edificio requiere aprobación del comité, el proceso puede tomar 1-2 semanas adicionales dependiendo de la frecuencia de reuniones del comité.",
        },
      ]}
    />
  );
}
