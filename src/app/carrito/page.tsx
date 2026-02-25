"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { getProductById, formatPrice } from "@/lib/products";
import { useState } from "react";
import { pushEvent } from "@/lib/gtm";

const COMUNAS = [
  "Las Condes",
  "Vitacura",
  "Providencia",
  "Lo Barnechea",
  "Ñuñoa",
  "La Reina",
  "Peñalolén",
  "Santiago Centro",
  "Independencia",
  "Recoleta",
  "Macul",
  "La Florida",
  "Puente Alto",
  "Maipú",
  "Colina",
  "Chicureo",
  "Otra",
];

interface BillingData {
  nombre: string;
  apellidos: string;
  rut: string;
  telefono: string;
  email: string;
  direccion: string;
  depto: string;
  comuna: string;
  notas: string;
}

function formatRut(value: string): string {
  const clean = value.replace(/[^0-9kK]/g, "").toUpperCase();
  if (clean.length <= 1) return clean;
  const body = clean.slice(0, -1);
  const dv = clean.slice(-1);
  const formatted = body.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formatted}-${dv}`;
}

export default function CarritoPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } =
    useCart();
  const [loading, setLoading] = useState(false);
  const [billing, setBilling] = useState<BillingData>({
    nombre: "",
    apellidos: "",
    rut: "",
    telefono: "",
    email: "",
    direccion: "",
    depto: "",
    comuna: "",
    notas: "",
  });

  const updateBilling = (field: keyof BillingData, value: string) => {
    if (field === "rut") {
      setBilling((prev) => ({ ...prev, rut: formatRut(value) }));
    } else {
      setBilling((prev) => ({ ...prev, [field]: value }));
    }
  };

  const isFormValid =
    billing.nombre.trim() !== "" &&
    billing.apellidos.trim() !== "" &&
    billing.rut.trim().length >= 9 &&
    billing.telefono.trim() !== "" &&
    billing.email.trim() !== "" &&
    billing.direccion.trim() !== "" &&
    billing.comuna !== "";

  const handleCheckout = async () => {
    if (!isFormValid) return;
    setLoading(true);
    try {
      const res = await fetch("/api/transbank/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, billing }),
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

        {/* Items */}
        <div className="mt-8 divide-y divide-gray-200">
          {items.map((item) => {
            const product = getProductById(item.productId);
            if (!product) return null;
            const unitPrice = item.withInstallation
              ? product.todoIncluidoPrice
              : product.price;
            const cartKey = `${item.productId}-${item.withInstallation ? "inst" : "solo"}`;
            return (
              <div
                key={cartKey}
                className="py-6 flex items-start gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-navy">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        item.withInstallation
                          ? "bg-cyan/10 text-cyan"
                          : "bg-gray-100 text-steel-dark"
                      }`}
                    >
                      {item.withInstallation ? "Con instalación" : "Solo equipo"}
                    </span>
                  </div>
                  <p className="text-sm text-steel-dark mt-1">
                    {formatPrice(unitPrice)} c/u
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.withInstallation, item.quantity - 1)
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
                          item.withInstallation,
                          Math.min(item.quantity + 1, 10)
                        )
                      }
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-navy hover:bg-gray-50"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.productId, item.withInstallation)}
                      className="ml-4 text-xs text-red-500 hover:text-red-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-navy">
                    {formatPrice(unitPrice * item.quantity)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-navy">Total</span>
            <span className="text-2xl font-bold text-navy">
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>

        {/* Datos de facturación */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-navy">Datos de facturación</h2>
          <p className="mt-1 text-sm text-steel-dark">
            Completa tus datos para procesar el pago.
          </p>

          <div className="mt-6 space-y-4">
            {/* Nombre + Apellidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Nombre <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={billing.nombre}
                  onChange={(e) => updateBilling("nombre", e.target.value)}
                  placeholder="Juan"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy bg-white placeholder:text-steel focus:border-cyan focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Apellidos <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={billing.apellidos}
                  onChange={(e) => updateBilling("apellidos", e.target.value)}
                  placeholder="Pérez González"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy bg-white placeholder:text-steel focus:border-cyan focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* RUT */}
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">
                RUT <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={billing.rut}
                onChange={(e) => updateBilling("rut", e.target.value)}
                placeholder="12.345.678-9"
                maxLength={12}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy bg-white placeholder:text-steel focus:border-cyan focus:outline-none transition-colors"
              />
            </div>

            {/* Teléfono + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Teléfono <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  value={billing.telefono}
                  onChange={(e) => updateBilling("telefono", e.target.value)}
                  placeholder="+56 9 1234 5678"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy bg-white placeholder:text-steel focus:border-cyan focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={billing.email}
                  onChange={(e) => updateBilling("email", e.target.value)}
                  placeholder="juan@email.com"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy bg-white placeholder:text-steel focus:border-cyan focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Dirección + Depto */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Dirección <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={billing.direccion}
                  onChange={(e) => updateBilling("direccion", e.target.value)}
                  placeholder="Los Militares 5620"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy bg-white placeholder:text-steel focus:border-cyan focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-1.5">
                  Depto/Oficina <span className="text-steel font-normal">(opcional)</span>
                </label>
                <input
                  type="text"
                  value={billing.depto}
                  onChange={(e) => updateBilling("depto", e.target.value)}
                  placeholder="Of. 905"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy bg-white placeholder:text-steel focus:border-cyan focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Comuna */}
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">
                Comuna <span className="text-red-400">*</span>
              </label>
              <select
                value={billing.comuna}
                onChange={(e) => updateBilling("comuna", e.target.value)}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy bg-white focus:border-cyan focus:outline-none transition-colors"
              >
                <option value="">Selecciona tu comuna</option>
                {COMUNAS.map((comuna) => (
                  <option key={comuna} value={comuna}>
                    {comuna}
                  </option>
                ))}
              </select>
            </div>

            {/* Notas */}
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">
                Notas del pedido <span className="text-steel font-normal">(opcional)</span>
              </label>
              <textarea
                value={billing.notas}
                onChange={(e) => updateBilling("notas", e.target.value)}
                placeholder="Instrucciones especiales para la entrega o instalación..."
                rows={3}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-navy bg-white placeholder:text-steel focus:border-cyan focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>
        </div>

        {/* Pagar */}
        <div className="mt-8">
          <button
            onClick={handleCheckout}
            disabled={loading || !isFormValid}
            className="w-full rounded-full bg-cyan px-6 py-4 text-base font-semibold text-navy hover:bg-cyan-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Procesando..." : `Pagar ${formatPrice(totalPrice)} con WebPay`}
          </button>

          {!isFormValid && (
            <p className="mt-2 text-center text-xs text-steel">
              Completa todos los campos obligatorios para continuar.
            </p>
          )}

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
