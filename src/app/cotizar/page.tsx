import type { Metadata } from "next";
import CotizarForm from "@/components/CotizarForm";

export const metadata: Metadata = {
  title: "Cotiza tu Climatización · Respuesta en 2 horas · Meser",
  description:
    "Cotiza tu proyecto de climatización en menos de 1 minuto. Te contactamos en menos de 2 horas con una propuesta personalizada.",
};

export default function CotizarPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy">
              Cotiza tu proyecto de climatización
            </h1>
            <p className="mt-4 text-lg text-steel-dark">
              En menos de 1 minuto nos cuentas qué necesitas. Te contactamos en
              menos de 2 horas con una propuesta.
            </p>
          </div>

          <CotizarForm />

          {/* Trust elements */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-steel-dark">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Sin compromiso
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Respuesta en menos de 2 horas
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              O llama: +569 8235 1110
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
