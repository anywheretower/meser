import type { Metadata } from "next";
import SolucionLayout from "@/components/SolucionLayout";

export const metadata: Metadata = {
  title: "Aire Acondicionado para Oficinas Santiago · Meser",
  description:
    "Climatización eficiente para oficinas y locales comerciales. Equipos silenciosos que mantienen la productividad sin elevar la cuenta de luz.",
};

export default function OficinaPage() {
  return (
    <SolucionLayout
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
          precio: "Desde $449.980",
        },
        {
          label: "Oficina / local mediano",
          btu: "Split Muro 12K-18K BTU",
          espacio: "Hasta 32 m²",
          precio: "Desde $499.980",
        },
        {
          label: "Oficina completa",
          btu: "Multi Split personalizado",
          espacio: "Múltiples espacios",
          precio: "Cotización personalizada",
        },
      ]}
      ctaTitle="¿Quieres climatizar tu oficina?"
    />
  );
}
