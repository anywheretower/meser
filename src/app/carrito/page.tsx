"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { getProductById, formatPrice } from "@/lib/products";
import { useState } from "react";
import { pushEvent } from "@/lib/gtm";

export default function CarritoPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } =
    useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/transbank/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();

      if (data.url && data.token) {
        pushEvent({
          event: "begin_checkout",
          value: totalPrice,
        });
        window.location.href = `${data.url}?token_ws=${data.token}`;
      } else {
        alert("Error al iniciar el pago. Intenta nuevamente.");
        setLoading(false);
      }
    } catch {
      alert("Error de conexión. Intenta nuevamente.");
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <svg
            className="mx-auto w-16 h-16 text-steel"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"
            />
          </svg>
          <h1 className="mt-6 text-2xl font-bold text-navy">
            Tu carrito está vacío
          </h1>
          <p className="mt-2 text-steel-dark">
            Agrega productos desde nuestro catálogo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/aires-acondicionados"
              className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
            >
              Ver aires acondicionados
            </Link>
            <Link
              href="/termos"
              className="rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-gray-50 transition-colors"
            >
              Ver termos eléctricos
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-navy">Tu carrito</h1>

        <div className="mt-8 divide-y divide-gray-200">
          {items.map((item) => {
            const product = getProductById(item.productId);
            if (!product) return null;
            return (
              <div
                key={item.productId}
                className="py-6 flex items-start gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-navy">
                    {product.name}
                  </h3>
                  <p className="text-sm text-steel-dark mt-1">
                    {formatPrice(product.price)} c/u
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity - 1)
                      }
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-navy hover:bg-gray-50"
                    >
                      &minus;
                    </button>
                    <span className="text-sm font-medium text-navy w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          Math.min(item.quantity + 1, 10)
                        )
                      }
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-navy hover:bg-gray-50"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.productId)}
                      className="ml-4 text-xs text-red-500 hover:text-red-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-navy">
                    {formatPrice(product.price * item.quantity)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-navy">Total</span>
            <span className="text-2xl font-bold text-navy">
              {formatPrice(totalPrice)}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="mt-6 w-full rounded-full bg-cyan px-6 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Procesando..." : "Pagar con WebPay"}
          </button>

          <div className="mt-4 flex justify-between">
            <Link
              href="/aires-acondicionados"
              className="text-sm text-cyan hover:text-cyan-dark transition-colors"
            >
              &larr; Seguir comprando
            </Link>
            <button
              onClick={clearCart}
              className="text-sm text-steel hover:text-red-500 transition-colors"
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
