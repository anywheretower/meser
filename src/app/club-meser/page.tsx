import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Club Meser · Plan de Referidos",
  description:
    "Refiere a un amigo que instale con Meser y acumula 25% de descuento en tu próxima mantención preventiva. Acumulable sin límite.",
};

const descuentos = [
  { referidos: 0, porcentaje: 0, precio: "$59.990" },
  { referidos: 1, porcentaje: 25, precio: "$44.993" },
  { referidos: 2, porcentaje: 50, precio: "$29.995" },
  { referidos: 3, porcentaje: 75, precio: "$14.998" },
  { referidos: 4, porcentaje: 100, precio: "Gratis" },
];

export default function ClubMeserPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-cyan uppercase tracking-wide">
              Club Meser
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-navy">
              Refiere y ahorra en tu mantención
            </h1>
            <p className="mt-4 text-lg text-steel-dark leading-relaxed">
              Por cada persona que refieras y que instale con Meser, acumulas
              un <span className="font-semibold text-navy">25% de descuento</span> en
              tu próxima mantención preventiva. Acumulable sin límite: con 4
              referidos tu mantención es gratis.
            </p>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-10">
            Cómo funciona
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="relative rounded-2xl border border-gray-200 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan text-base font-bold text-navy">
                1
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy">
                Refiere a alguien
              </h3>
              <p className="mt-2 text-sm text-steel-dark">
                Comparte tu experiencia con un amigo, familiar o vecino que
                necesite climatización.
              </p>
            </div>
            <div className="relative rounded-2xl border border-gray-200 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan text-base font-bold text-navy">
                2
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy">
                Tu referido instala con Meser
              </h3>
              <p className="mt-2 text-sm text-steel-dark">
                Cuando tu referido contrate e instale su equipo con nosotros,
                tu descuento se activa automáticamente.
              </p>
            </div>
            <div className="relative rounded-2xl border border-gray-200 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan text-base font-bold text-navy">
                3
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy">
                Acumulas descuento
              </h3>
              <p className="mt-2 text-sm text-steel-dark">
                Cada referido suma 25% de descuento en tu próxima mantención
                preventiva. Sin tope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla de descuentos */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-2">
            Tu descuento crece con cada referido
          </h2>
          <p className="text-sm text-steel-dark mb-8">
            Mantención preventiva: precio base{" "}
            <span className="font-semibold text-navy">$59.990</span>
          </p>

          {/* Desktop table */}
          <div className="hidden sm:block overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-xs font-semibold text-steel-dark uppercase tracking-wide">
                    Referidos
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-steel-dark uppercase tracking-wide">
                    Descuento
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-steel-dark uppercase tracking-wide">
                    Pagas
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {descuentos.map((d) => (
                  <tr
                    key={d.referidos}
                    className={
                      d.porcentaje === 100
                        ? "bg-cyan/5"
                        : "hover:bg-gray-50"
                    }
                  >
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      {d.referidos === 0
                        ? "Sin referidos"
                        : `${d.referidos} referido${d.referidos > 1 ? "s" : ""}`}
                    </td>
                    <td className="px-6 py-4 text-sm text-steel-dark">
                      {d.porcentaje === 0
                        ? "—"
                        : `${d.porcentaje}%`}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-navy">
                      {d.precio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden space-y-3">
            {descuentos.map((d) => (
              <div
                key={d.referidos}
                className={`rounded-xl border p-4 flex items-center justify-between ${
                  d.porcentaje === 100
                    ? "border-cyan bg-cyan/5"
                    : "border-gray-200"
                }`}
              >
                <div>
                  <p className="text-sm font-medium text-navy">
                    {d.referidos === 0
                      ? "Sin referidos"
                      : `${d.referidos} referido${d.referidos > 1 ? "s" : ""}`}
                  </p>
                  {d.porcentaje > 0 && (
                    <p className="text-xs text-steel-dark">
                      {d.porcentaje}% descuento
                    </p>
                  )}
                </div>
                <span className="text-base font-bold text-navy">
                  {d.precio}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-steel">
            Con 4 o más referidos tu mantención preventiva es completamente
            gratis. El descuento aplica a la próxima mantención y se renueva
            con cada ciclo de referidos.
          </p>
        </div>
      </section>

      {/* Condiciones */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8">
            Condiciones del programa
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            <div className="flex gap-3">
              <svg
                className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-sm text-steel-dark">
                El referido debe ser un cliente nuevo que instale un equipo
                con Meser.
              </p>
            </div>
            <div className="flex gap-3">
              <svg
                className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-sm text-steel-dark">
                El descuento se acumula: 25% por cada referido sin límite.
              </p>
            </div>
            <div className="flex gap-3">
              <svg
                className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-sm text-steel-dark">
                Aplica exclusivamente a mantención preventiva ($59.990).
              </p>
            </div>
            <div className="flex gap-3">
              <svg
                className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-sm text-steel-dark">
                Tu referido debe mencionar tu nombre al momento de cotizar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Listo para referir?"
        text="Comparte Meser con alguien que necesite climatización y empieza a acumular descuentos en tu mantención."
        ctaLabel="Contactar a Meser"
        ctaHref="/contacto"
        whatsapp
      />
    </>
  );
}
