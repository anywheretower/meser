import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import WhatsAppLink from "@/components/WhatsAppLink";


export const metadata: Metadata = {
  title: "Club · Plan de Referidos",
  description:
    "Refiere a un amigo que instale con Meser y acumula 25% de descuento en tu próxima mantención preventiva. Acumulable sin límite.",
  alternates: { canonical: "/club-meser" },
  openGraph: { url: "/club-meser" },
};

const descuentos = [
  { referidos: 0, porcentaje: 0, precio: "$64.990" },
  { referidos: 1, porcentaje: 25, precio: "$48.740" },
  { referidos: 2, porcentaje: 50, precio: "$32.490" },
  { referidos: 3, porcentaje: 75, precio: "$16.250" },
  { referidos: 4, porcentaje: 100, precio: "Gratis" },
];

export default function ClubMeserPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Club Meser" }]} />
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
            <span className="font-semibold text-navy">$64.990</span>
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
                Aplica exclusivamente a mantención preventiva ($64.990).
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

      {/* Compartir */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy">
            Empieza a acumular ahora
          </h2>
          <p className="mt-3 text-sm text-steel-dark">
            Comparte Meser con un amigo por WhatsApp. Cuando tu referido
            instale, tu 25% de descuento se activa automáticamente.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <WhatsAppLink
              href="https://wa.me/?text=Instal%C3%A9%20mi%20aire%20acondicionado%20con%20Meser%20y%20me%20recomendaron%20para%20ti.%20Diagn%C3%B3stico%20gratis%20y%20precio%20cerrado%3A%20https%3A%2F%2Fwww.meser.cl%20%E2%80%94%20mencionen%20mi%20nombre%20para%20que%20ambos%20acumulemos%20beneficios."
              location="club-share-wa"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1ebe57] transition-colors shadow-md shadow-green-500/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Compartir por WhatsApp
            </WhatsAppLink>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-gray-50 transition-colors"
            >
              Avísanos de tu referido
            </Link>
          </div>
          <p className="mt-4 text-xs text-steel">
            Tip: pídele a tu referido que mencione tu nombre al cotizar para
            que tu descuento se registre automáticamente.
          </p>
        </div>
      </section>

    </>
  );
}
