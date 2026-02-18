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
        <div className="mx-auto max-w-xl px-4 text-center">
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
          <p className="mt-4 text-sm text-steel">
            Nos pondremos en contacto contigo para coordinar la entrega e
            instalación.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
          >
            Volver al inicio
          </Link>
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
