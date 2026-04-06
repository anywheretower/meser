import type { Metadata } from "next";
import SolucionLayout from "@/components/SolucionLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado para Oficinas Santiago",
  description:
    "Climatización eficiente para oficinas y locales comerciales. Equipos silenciosos que mantienen la productividad sin elevar la cuenta de luz.",
  alternates: { canonical: "/soluciones/oficina" },
  openGraph: { url: "/soluciones/oficina" },
};

export default function OficinaPage() {
  return (
    <SolucionLayout
      slug="oficina"
      label="Oficinas"
      h1="Climatización para oficinas y locales comerciales"
      subtitulo="Equipos eficientes que mantienen la productividad."
      parrafo="Un espacio de trabajo bien climatizado mejora la productividad y el bienestar. En Meser instalamos equipos Inverter que operan de forma silenciosa y eficiente, sin impactar tu cuenta de luz."
      desafios={[
        {
          title: "Ruido en el ambiente de trabajo",
          text: "Nuestros equipos Inverter operan desde 19 dB — no interfieren con reuniones ni llamadas. Tecnología silenciosa de verdad.",
        },
        {
          title: "Consumo eléctrico",
          text: "Los equipos Inverter consumen hasta 70% menos que los convencionales. Climatización eficiente sin sorpresas en la boleta de luz.",
        },
        {
          title: "Horarios de instalación",
          text: "Coordinamos la instalación fuera de horario laboral o en fines de semana si es necesario. Sin interrumpir tu operación.",
        },
        {
          title: "Regulaciones del edificio",
          text: "En edificios de oficinas, coordinamos con administración para cumplir normativas de instalación de unidades exteriores.",
        },
      ]}
      paquetes={[
        {
          label: "Oficina pequeña",
          btu: "Split Muro 9K BTU",
          espacio: "Hasta 18 m²",
          precio: "Desde $449.990",
        },
        {
          label: "Oficina / local mediano",
          btu: "Split Muro 12K-18K BTU",
          espacio: "Hasta 32 m²",
          precio: "Desde $479.990",
        },
        {
          label: "Oficina completa",
          btu: "Multi Split personalizado",
          espacio: "Múltiples espacios",
          precio: "Cotización personalizada",
        },
      ]}
      ctaTitle="¿Quieres climatizar tu oficina?"
      casoReal={{
        titulo: "Oficina 90 m² en Providencia — 3 espacios",
        texto: "Oficina de una consultora con sala de reuniones, open space y oficina del gerente. Necesitaban climatización silenciosa para no interferir con videollamadas y que se pudiera instalar un sábado para no parar la operación. Multi Split 3x1 con instalación completa en un día.",
        resultado: "Resultado: temperatura controlada por zona, reuniones sin ruido de fondo, instalación completada en sábado sin interrumpir la operación del lunes.",
      }}
      faqs={[
        {
          q: "¿Se puede instalar sin interrumpir la jornada laboral?",
          a: "Sí, coordinamos la instalación fuera del horario de oficina: tardes, fines de semana o feriados. Una instalación típica toma 4-6 horas. Dejamos el espacio limpio y listo para trabajar al día siguiente.",
        },
        {
          q: "¿Cuánto consume un aire acondicionado en una oficina?",
          a: "Los equipos Inverter que instalamos consumen entre $8.000 y $25.000 mensuales en electricidad según el uso. Eso es hasta un 70% menos que equipos convencionales. Se pagan solos con el ahorro en productividad y bienestar del equipo.",
        },
        {
          q: "¿Necesito permiso del edificio de oficinas?",
          a: "En la mayoría de los casos sí. Coordinamos con la administración del edificio y preparamos la documentación técnica. Muchos edificios de oficinas ya tienen espacios prediseñados para unidades exteriores.",
        },
      ]}
    />
  );
}
