import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Comparativa Calefacción Chile 2026 · Parafina vs Gas vs Eléctrica vs Aire Acondicionado",
  description:
    "Cuadro comparativo de costos de calefacción en Chile (marzo 2026): aire acondicionado Inverter $25.560/mes vs parafina $41.760 vs gas $69.120 vs eléctrica $84.960. Retorno de inversión en 8 meses.",
  alternates: { canonical: "/comparativa-calefaccion" },
};

const consumo = [
  {
    metodo: "Aire Acondicionado Inverter",
    subtitulo: "9.000 BTU (bomba de calor)",
    consumoHora: "~0,6 kWh",
    costoHora: "$142",
    gastoMensual: "$25.560",
    observaciones: "El más eficiente. Multiplica el calor con tecnología bomba de calor. Basado en $236/kWh.",
    highlight: true,
  },
  {
    metodo: "Estufa a Parafina",
    subtitulo: "Láser / Mecha",
    consumoHora: "~0,2 L",
    costoHora: "$232",
    gastoMensual: "$41.760",
    observaciones: "Precio $1.160/L tras alza ENAP de $107,4/L (18 marzo 2026). Precio volátil.",
    highlight: false,
  },
  {
    metodo: "Estufa a Gas",
    subtitulo: "Cilindro 15 kg",
    consumoHora: "~0,18 kg",
    costoHora: "$384",
    gastoMensual: "$69.120",
    observaciones: "Cilindro 15 kg a $32.000. Alto costo por carga. Genera humedad.",
    highlight: false,
  },
  {
    metodo: "Calefactor Eléctrico",
    subtitulo: "Convencional 2000W",
    consumoHora: "2,0 kWh",
    costoHora: "$472",
    gastoMensual: "$84.960",
    observaciones: "El menos eficiente. 1 kWh = 1 kWh de calor. Solo para uso corto.",
    highlight: false,
  },
];

const roi = [
  {
    vs: "Calefactor Eléctrico",
    ahorroMensual: "$59.400",
    difInversion: "$445.000",
    recuperacion: "7,5 meses",
    detalle: "~2 inviernos",
  },
  {
    vs: "Estufa a Gas",
    ahorroMensual: "$43.560",
    difInversion: "$360.000",
    recuperacion: "8 meses",
    detalle: "~2 inviernos",
  },
  {
    vs: "Estufa a Parafina",
    ahorroMensual: "$16.200",
    difInversion: "$130.000",
    recuperacion: "8 meses",
    detalle: "~2 inviernos",
  },
];

const inversion = [
  { equipo: "Aire Acondicionado 9K BTU", precio: "$330.000", instalacion: "$150.000", total: "$480.000" },
  { equipo: "Estufa Parafina (Láser)", precio: "$350.000", instalacion: "$0", total: "$350.000" },
  { equipo: "Estufa a Gas (Cilindro 15kg)", precio: "$120.000", instalacion: "$0", total: "$120.000" },
  { equipo: "Calefactor Convencional", precio: "$35.000", instalacion: "$0", total: "$35.000" },
];

export default function ComparativaCalefaccionPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Comparativa Calefacción" }]} />

      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-cyan/10 border border-cyan/20 px-4 py-1.5 text-xs font-semibold text-cyan mb-6">
              Datos actualizados marzo 2026
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              ¿Cuánto cuesta calentar tu casa en Chile?
            </h1>
            <p className="mt-4 text-lg text-cyan font-medium">
              Parafina vs Gas vs Eléctrica vs Aire Acondicionado — la comparativa definitiva
            </p>
            <p className="mt-6 text-lg text-steel-light leading-relaxed max-w-2xl">
              Para una habitación de 18 m² con uso de 6 horas diarias, el aire
              acondicionado Inverter cuesta <strong className="text-white">$25.560 al mes</strong> —
              un 70% menos que un calefactor eléctrico y un 39% menos que parafina.
            </p>
          </div>
        </div>
      </section>

      {/* Tabla de consumo */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center">
            Costo mensual de calefacción
          </h2>
          <p className="mt-3 text-center text-sm text-steel-dark max-w-2xl mx-auto">
            Habitación de 18 m² · 6 horas diarias · 30 días · Precios Chile marzo 2026
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-navy px-4 py-3 text-left text-xs font-semibold text-white">Método</th>
                  <th className="bg-navy px-4 py-3 text-center text-xs font-semibold text-white">Consumo/hora</th>
                  <th className="bg-navy px-4 py-3 text-center text-xs font-semibold text-white">Costo/hora</th>
                  <th className="bg-navy px-4 py-3 text-center text-xs font-semibold text-white">Gasto mensual</th>
                  <th className="bg-navy px-4 py-3 text-left text-xs font-semibold text-white hidden sm:table-cell">Observaciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {consumo.map((item, i) => (
                  <tr key={i} className={item.highlight ? "bg-cyan/5" : i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-4">
                      <span className={`font-semibold ${item.highlight ? "text-cyan" : "text-navy"}`}>{item.metodo}</span>
                      <span className="block text-xs text-steel-dark mt-0.5">{item.subtitulo}</span>
                    </td>
                    <td className="px-4 py-4 text-center text-navy/80">{item.consumoHora}</td>
                    <td className="px-4 py-4 text-center text-navy/80">{item.costoHora}</td>
                    <td className="px-4 py-4 text-center">
                      <span className={`font-bold text-base ${item.highlight ? "text-cyan" : "text-navy"}`}>{item.gastoMensual}</span>
                    </td>
                    <td className="px-4 py-4 text-xs text-steel-dark hidden sm:table-cell max-w-[200px]">{item.observaciones}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Visual comparison */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {consumo.map((item, i) => (
              <div key={i} className={`rounded-2xl p-5 text-center ${item.highlight ? "border-2 border-cyan bg-cyan/5" : "border border-gray-200"}`}>
                <div className={`text-2xl font-bold ${item.highlight ? "text-cyan" : "text-navy"}`}>
                  {item.gastoMensual}
                </div>
                <div className="text-xs text-steel-dark mt-1">{item.metodo}</div>
                {item.highlight && (
                  <span className="inline-block mt-2 text-[10px] font-bold text-white bg-cyan rounded-full px-2 py-0.5">
                    El más barato
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inversión inicial */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center">
            Inversión inicial
          </h2>
          <p className="mt-3 text-center text-sm text-steel-dark">
            Precio de compra + instalación. Chile 2026.
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="bg-navy px-4 py-3 text-left text-xs font-semibold text-white">Equipo</th>
                  <th className="bg-navy px-4 py-3 text-center text-xs font-semibold text-white">Precio equipo</th>
                  <th className="bg-navy px-4 py-3 text-center text-xs font-semibold text-white">Instalación</th>
                  <th className="bg-navy px-4 py-3 text-center text-xs font-semibold text-white">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {inversion.map((item, i) => (
                  <tr key={i} className={i === 0 ? "bg-cyan/5" : i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className={`px-4 py-3 font-medium ${i === 0 ? "text-cyan" : "text-navy"}`}>{item.equipo}</td>
                    <td className="px-4 py-3 text-center text-navy/80">{item.precio}</td>
                    <td className="px-4 py-3 text-center text-navy/80">{item.instalacion}</td>
                    <td className={`px-4 py-3 text-center font-bold ${i === 0 ? "text-cyan" : "text-navy"}`}>{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-steel-dark">
            En Meser, el paquete todo incluido (equipo + instalación + garantía) parte en{" "}
            <Link href="/todo-incluido" className="font-semibold text-cyan hover:text-cyan-dark">$449.990</Link>.
          </p>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center">
            ¿En cuánto tiempo recuperas la inversión?
          </h2>
          <p className="mt-3 text-center text-sm text-steel-dark max-w-2xl mx-auto">
            Comparamos el ahorro mensual del aire acondicionado vs cada alternativa.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {roi.map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 p-6 text-center hover:border-cyan hover:shadow-lg transition-all">
                <div className="text-xs font-semibold text-steel-dark uppercase tracking-wider">
                  AC vs {item.vs}
                </div>
                <div className="mt-4 text-4xl font-bold text-cyan">
                  {item.recuperacion}
                </div>
                <div className="text-xs text-steel-dark mt-1">{item.detalle}</div>
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-steel-dark">Ahorro mensual</span>
                    <span className="font-semibold text-green-600">{item.ahorroMensual}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-steel-dark">Dif. inversión</span>
                    <span className="font-semibold text-navy">{item.difInversion}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué gana el AC */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center">
            ¿Por qué el aire acondicionado gana a largo plazo?
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />,
                title: "Multitemporada",
                text: "El aire acondicionado sirve en verano (frío) e invierno (calor). La inversión se aprovecha todo el año, no solo 4 meses.",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                title: "Vida útil 10-15 años",
                text: "Con mantenciones básicas, un AC dura 10-15 años. Un calefactor eléctrico barato dura 2-3 temporadas.",
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
                title: "Seguridad y salud",
                text: "Sin riesgo de quemaduras, sin emanación de CO2, sin humedad excesiva. Mejor calidad del aire para dormir.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-steel-dark leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Empieza a ahorrar desde este invierno
          </h2>
          <p className="mt-4 text-steel-light leading-relaxed">
            Paquetes todo incluido desde $449.990: equipo Inverter + instalación
            estética + garantía total. Diagnóstico gratuito por Zoom.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#agendar"
              className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors"
            >
              Cotiza tu aire acondicionado
            </Link>
            <Link
              href="/todo-incluido"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Ver paquetes todo incluido
            </Link>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto cuesta calentar una habitación de 18 m² con aire acondicionado en Chile?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un aire acondicionado Inverter de 9.000 BTU cuesta aproximadamente $25.560 al mes (6 horas diarias, $236/kWh, marzo 2026). Es la opción más económica: 39% más barato que parafina, 63% más barato que gas y 70% más barato que calefacción eléctrica convencional.",
                },
              },
              {
                "@type": "Question",
                name: "¿En cuánto tiempo se recupera la inversión de un aire acondicionado vs otros métodos de calefacción?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La inversión de un aire acondicionado ($480.000 con instalación) se recupera en aproximadamente 8 meses de uso frente a cualquier alternativa. Frente al calefactor eléctrico se ahorra $59.400/mes, frente a gas $43.560/mes y frente a parafina $16.200/mes.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
