"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import { useCart } from "@/lib/cart-context";
import { pushEvent } from "@/lib/gtm";

function ConfirmacionContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const order = searchParams.get("order");
  const amount = searchParams.get("amount");
  const { clearCart } = useCart();
  const tracked = useRef(false);

  useEffect(() => {
    if (status === "success" && !tracked.current) {
      tracked.current = true;
      clearCart();
      pushEvent({
        event: "purchase",
        transaction_id: order || "",
        value: Number(amount) || 0,
      });
    }
  }, [status, order, amount, clearCart]);

  if (status === "success") {
    return (
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-2xl px-4">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
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
            </div>
            <h1 className="mt-6 text-3xl font-bold text-navy">
              ¡Pago exitoso!
            </h1>
            <p className="mt-3 text-steel-dark">
              Tu orden{" "}
              <span className="font-semibold text-navy">#{order}</span> ha
              sido confirmada.
            </p>
            {amount && (
              <p className="mt-1 text-steel-dark">
                Monto pagado:{" "}
                <span className="font-semibold text-navy">
                  ${Number(amount).toLocaleString("es-CL")}
                </span>
              </p>
            )}
          </div>

          {/* Next steps */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-semibold text-navy">
              Qué sigue ahora
            </h2>
            <ol className="mt-4 space-y-4 text-sm text-navy/80">
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan text-xs font-bold text-navy">
                  1
                </span>
                <span>
                  <strong className="text-navy">Hoy mismo (hábil):</strong>{" "}
                  nuestro equipo te llama por WhatsApp para coordinar visita
                  técnica y fecha tentativa de instalación.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan text-xs font-bold text-navy">
                  2
                </span>
                <span>
                  <strong className="text-navy">2 a 7 días hábiles:</strong>{" "}
                  coordinamos entrega e instalación en la fecha que elijas.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan text-xs font-bold text-navy">
                  3
                </span>
                <span>
                  <strong className="text-navy">Post-instalación:</strong>{" "}
                  prueba de funcionamiento, inducción de uso y entrega de
                  garantía.
                </span>
              </li>
            </ol>
            <a
              href={`https://wa.me/56982351110?text=${encodeURIComponent(
                `Hola, acabo de pagar la orden #${order ?? ""} y quiero coordinar la instalación`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1ebe57] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Coordinar instalación por WhatsApp
            </a>
          </div>

          {/* Cross-sell + referido */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/mantencion"
              className="group rounded-2xl border border-cyan/40 bg-cyan/5 p-5 hover:border-cyan hover:bg-cyan/10 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan">
                Agenda tu primera mantención
              </p>
              <p className="mt-2 text-base font-semibold text-navy">
                25% off al agendar ahora
              </p>
              <p className="mt-1 text-xs text-steel-dark">
                La mantención preventiva alarga la vida útil del equipo y
                ahorra hasta 30% en la cuenta de luz.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-cyan group-hover:text-cyan-dark">
                Ver mantención →
              </span>
            </Link>
            <Link
              href="/club-meser"
              className="group rounded-2xl border border-gray-200 bg-white p-5 hover:border-navy hover:bg-gray-50 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-steel-dark">
                Club Meser
              </p>
              <p className="mt-2 text-base font-semibold text-navy">
                Refiere a un amigo, ahorra 25%
              </p>
              <p className="mt-1 text-xs text-steel-dark">
                Cada referido que instale suma 25% de descuento en tu
                próxima mantención. Acumulable sin límite.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-navy group-hover:underline">
                Cómo funciona →
              </span>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="text-sm font-medium text-steel-dark hover:text-navy transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (status === "aborted") {
    return (
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-bold text-navy">
            Pago cancelado
          </h1>
          <p className="mt-3 text-steel-dark">
            El pago fue cancelado. Tu carrito sigue disponible.
          </p>
          <Link
            href="/carrito"
            className="mt-8 inline-block rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
          >
            Volver al carrito
          </Link>
        </div>
      </section>
    );
  }

  // Error or rejected
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-xl px-4 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-bold text-navy">
          Error en el pago
        </h1>
        <p className="mt-3 text-steel-dark">
          No pudimos procesar tu pago. Puedes intentar nuevamente.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/carrito"
            className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
          >
            Volver al carrito
          </Link>
          <Link
            href="/contacto"
            className="rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-gray-50 transition-colors"
          >
            Contactar soporte
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ConfirmacionPage() {
  return (
    <Suspense
      fallback={
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-xl px-4 text-center">
            <p className="text-steel-dark">
              Procesando resultado del pago...
            </p>
          </div>
        </section>
      }
    >
      <ConfirmacionContent />
    </Suspense>
  );
}
