import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Aires Acondicionados · Catálogo Meser · Samsung y Midea",
  description:
    "Catálogo completo de aires acondicionados Samsung Wind-Free y Midea EcoMaster. Todos Inverter, frío/calor, WiFi. Precio todo incluido con instalación.",
};

const productos = [
  {
    marca: "Midea",
    linea: "EcoMaster",
    modelos: [
      {
        nombre: "Midea EcoMaster 9.000 BTU",
        btu: "9.000",
        cobertura: "Hasta 17 m²",
        precioAntes: "$549.990",
        precio: "$319.990",
        precioTodoIncluido: "$449.980",
        features: ["Inverter frío/calor", "WiFi + IA", "Clase A", "19 dB"],
        popular: false,
      },
      {
        nombre: "Midea EcoMaster 12.000 BTU",
        btu: "12.000",
        cobertura: "Hasta 22 m²",
        precioAntes: "$629.990",
        precio: "$349.990",
        precioTodoIncluido: "$499.980",
        features: ["Inverter frío/calor", "WiFi + IA", "Clase A", "22 dB"],
        popular: true,
      },
      {
        nombre: "Midea EcoMaster 18.000 BTU",
        btu: "18.000",
        cobertura: "Hasta 32 m²",
        precioAntes: "$899.990",
        precio: "$529.990",
        precioTodoIncluido: "$679.990",
        features: ["Inverter frío/calor", "WiFi + IA", "Clase A", "24 dB"],
        popular: false,
      },
      {
        nombre: "Midea EcoMaster 24.000 BTU",
        btu: "24.000",
        cobertura: "Hasta 40 m²",
        precioAntes: "$1.069.990",
        precio: "$649.990",
        precioTodoIncluido: "Consultar",
        features: ["Inverter frío/calor", "WiFi + IA", "Clase A", "26 dB"],
        popular: false,
      },
    ],
  },
  {
    marca: "Samsung",
    linea: "Wind-Free",
    modelos: [
      {
        nombre: "Samsung Wind-Free 9.000 BTU",
        btu: "9.000",
        cobertura: "Hasta 17 m²",
        precioAntes: "",
        precio: "Consultar",
        precioTodoIncluido: "$499.980",
        features: ["Inverter frío/calor", "Wind-Free", "WiFi", "Clase A"],
        popular: false,
      },
      {
        nombre: "Samsung Wind-Free 12.000 BTU",
        btu: "12.000",
        cobertura: "Hasta 22 m²",
        precioAntes: "",
        precio: "Consultar",
        precioTodoIncluido: "$549.980",
        features: ["Inverter frío/calor", "Wind-Free", "WiFi", "Clase A"],
        popular: false,
      },
      {
        nombre: "Samsung Wind-Free 18.000 BTU",
        btu: "18.000",
        cobertura: "Hasta 32 m²",
        precioAntes: "",
        precio: "Consultar",
        precioTodoIncluido: "$699.980",
        features: ["Inverter frío/calor", "Wind-Free", "WiFi", "Clase A"],
        popular: false,
      },
    ],
  },
  {
    marca: "Midea",
    linea: "Consola Xtreme Heat",
    modelos: [
      {
        nombre: "Consola Midea Xtreme Heat 14.000 BTU",
        btu: "14.000",
        cobertura: "Hasta 23 m²",
        precioAntes: "$899.990",
        precio: "$499.990",
        precioTodoIncluido: "$649.990",
        features: ["Inverter frío/calor", "Piso-cielo", "WiFi", "Ideal mansardas"],
        popular: false,
      },
      {
        nombre: "Consola Midea Xtreme Heat 18.000 BTU",
        btu: "18.000",
        cobertura: "Hasta 32 m²",
        precioAntes: "$1.049.990",
        precio: "$579.990",
        precioTodoIncluido: "$729.990",
        features: ["Inverter frío/calor", "Piso-cielo", "WiFi", "Ideal mansardas"],
        popular: false,
      },
    ],
  },
];

export default function AiresAcondicionadosPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy">
              Aires acondicionados
            </h1>
            <p className="mt-4 text-lg text-steel-dark leading-relaxed">
              Todos nuestros equipos son Inverter, frío/calor, con WiFi y
              eficiencia energética clase A. Precio todo incluido con
              instalación estética y garantía total.
            </p>
          </div>
        </div>
      </section>

      {/* Catálogo por marca */}
      {productos.map((grupo) => (
        <section
          key={`${grupo.marca}-${grupo.linea}`}
          className="py-16 odd:bg-gray-50 even:bg-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy">{grupo.marca}</h2>
              <p className="text-sm font-medium text-cyan">{grupo.linea}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {grupo.modelos.map((producto) => (
                <div
                  key={producto.nombre}
                  className={`relative rounded-2xl border p-6 flex flex-col ${
                    producto.popular
                      ? "border-2 border-cyan shadow-lg"
                      : "border-gray-200 hover:border-cyan hover:shadow-lg"
                  } transition-all`}
                >
                  {producto.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan px-3 py-0.5 text-xs font-semibold text-navy">
                      Más vendido
                    </div>
                  )}

                  <h3 className="text-base font-semibold text-navy">
                    {producto.nombre}
                  </h3>
                  <p className="mt-1 text-sm text-steel-dark">
                    {producto.cobertura}
                  </p>

                  {/* Precio equipo */}
                  <div className="mt-4">
                    {producto.precioAntes && (
                      <span className="text-xs text-steel line-through mr-2">
                        {producto.precioAntes}
                      </span>
                    )}
                    <span className="text-lg font-bold text-navy">
                      {producto.precio}
                    </span>
                    <span className="block text-xs text-steel-dark mt-0.5">
                      Solo equipo
                    </span>
                  </div>

                  {/* Precio todo incluido */}
                  <div className="mt-3 rounded-lg bg-cyan/5 border border-cyan/20 px-3 py-2">
                    <span className="text-xs text-steel-dark">
                      Todo incluido:
                    </span>
                    <span className="ml-1 text-base font-bold text-cyan">
                      {producto.precioTodoIncluido}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {producto.features.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-medium text-steel-dark bg-gray-100 px-2 py-0.5 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <Link
                      href="/cotizar"
                      className="block w-full text-center rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
                    >
                      Consultar precio
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Servicios adicionales */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8">
            Servicios adicionales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-navy">
                Mantención
              </h3>
              <div className="mt-2">
                <span className="text-sm text-steel line-through">$99.990</span>
                <span className="ml-2 text-xl font-bold text-navy">$59.990</span>
              </div>
              <p className="mt-2 text-sm text-steel-dark">
                Limpieza profunda + revisión técnica + optimización.
              </p>
              <Link
                href="/mantencion"
                className="mt-4 inline-flex text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
              >
                Ver detalles →
              </Link>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-navy">
                Instalación (solo servicio)
              </h3>
              <div className="mt-2">
                <span className="text-xl font-bold text-navy">$150.000</span>
              </div>
              <p className="mt-2 text-sm text-steel-dark">
                Si ya tienes equipo. Incluye montaje, cañerías, puesta en marcha.
              </p>
              <Link
                href="/instalacion-aire-acondicionado"
                className="mt-4 inline-flex text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
              >
                Ver detalles →
              </Link>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-navy">
                Electricista
              </h3>
              <div className="mt-2">
                <span className="text-xl font-bold text-navy">$49.990</span>
              </div>
              <p className="mt-2 text-sm text-steel-dark">
                Circuito eléctrico dedicado para tu equipo de climatización.
              </p>
              <Link
                href="/cotizar"
                className="mt-4 inline-flex text-sm font-medium text-cyan hover:text-cyan-dark transition-colors"
              >
                Consultar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿No sabes qué equipo elegir?"
        text="Agenda un diagnóstico gratuito por Zoom de 25 minutos. Un experto Meser te recomienda el equipo ideal para tu espacio."
        ctaLabel="Diagnóstico gratuito"
      />
    </>
  );
}
