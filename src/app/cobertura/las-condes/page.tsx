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
    />
  );
}
