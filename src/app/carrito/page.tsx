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

  const [checkoutError, setCheckoutError] = useState("");

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
    setCheckoutError("");
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
        setCheckoutError("payment");
        setLoading(false);
      }
    } catch {
      setCheckoutError("connection");
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
            Elige una de nuestras opciones más populares para empezar:
          </p>

          {/* Paquetes sugeridos */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <Link
              href="/todo-incluido"
              className="rounded-2xl border border-gray-200 p-5 hover:border-cyan hover:shadow-md transition-all group"
            >
              <div className="text-xs font-semibold text-cyan uppercase tracking-wide">Más popular</div>
              <div className="mt-2 text-base font-bold text-navy group-hover:text-cyan transition-colors">Paquete Todo Incluido</div>
              <div className="mt-1 text-sm text-steel-dark">Aire + instalación + garantía</div>
              <div className="mt-3 text-lg font-bold text-navy">Desde $449.990</div>
            </Link>
            <Link
              href="/aires-acondicionados"
              className="rounded-2xl border border-gray-200 p-5 hover:border-cyan hover:shadow-md transition-all group"
            >
              <div className="text-xs font-semibold text-steel uppercase tracking-wide">Solo equipo</div>
              <div className="mt-2 text-base font-bold text-navy group-hover:text-cyan transition-colors">Aires Acondicionados</div>
              <div className="mt-1 text-sm text-steel-dark">Samsung, Midea y Anwo Inverter</div>
              <div className="mt-3 text-lg font-bold text-navy">Desde $319.990</div>
            </Link>
            <Link
              href="/termos"
              className="rounded-2xl border border-gray-200 p-5 hover:border-cyan hover:shadow-md transition-all group"
            >
              <div className="text-xs font-semibold text-steel uppercase tracking-wide">Agua caliente</div>
              <div className="mt-2 text-base font-bold text-navy group-hover:text-cyan transition-colors">Termos Eléctricos</div>
              <div className="mt-1 text-sm text-steel-dark">Midea Lume 50 a 120 litros</div>
              <div className="mt-3 text-lg font-bold text-navy">Desde $149.990</div>
            </Link>
          </div>

          <p className="mt-8 text-sm text-steel">
            ¿No sabes por dónde empezar?{" "}
            <Link href="#agendar" className="text-cyan font-semibold hover:text-cyan-dark transition-colors">
              Agenda una asesoría gratuita por Zoom
            </Link>
          </p>
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
                        product.category === "servicio"
                          ? "bg-green-50 text-green-700"
                          : item.withInstallation
                          ? "bg-cyan/10 text-cyan"
                          : "bg-gray-100 text-steel-dark"
                      }`}
                    >
                      {product.category === "servicio" ? "Servicio" : item.withInstallation ? "Con instalación" : "Solo equipo"}
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

          {/* C56: Trust badges */}
          <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-gray-200 text-green-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-7a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-navy">Pago 100% seguro</p>
                  <p className="text-steel-dark">Procesado por Transbank / WebPay Plus</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-gray-200 text-cyan">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-navy">Garantía Meser</p>
                  <p className="text-steel-dark">Equipo + instalación · 6 meses legal mínimo</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-gray-200 text-navy">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-navy">Derecho de retracto</p>
                  <p className="text-steel-dark">10 días corridos · Ley 19.496</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-[11px] text-steel">
              Al hacer clic en &ldquo;Pagar&rdquo; serás redirigido al entorno seguro de
              Transbank. Meser no almacena datos de tu tarjeta.
            </p>
          </div>

          {!isFormValid && (
            <p className="mt-2 text-center text-xs text-steel">
              Completa todos los campos obligatorios para continuar.
            </p>
          )}

          {checkoutError && (
            <div className="mt-3 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-800">
              <p className="font-medium">
                {checkoutError === "payment"
                  ? "No pudimos iniciar el pago. Intenta nuevamente."
                  : "Error de conexión. Revisa tu internet e intenta de nuevo."}
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <button
                  onClick={handleCheckout}
                  className="text-sm font-semibold text-red-700 underline underline-offset-2 hover:text-red-900"
                >
                  Reintentar
                </button>
                <a
                  href="https://wa.me/56982351110?text=Hola%2C%20tengo%20un%20problema%20con%20el%20pago"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-green-700 underline underline-offset-2 hover:text-green-900"
                >
                  Ayuda por WhatsApp
                </a>
              </div>
            </div>
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
