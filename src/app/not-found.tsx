import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no existe o fue movida.",
};

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-navy">404</h1>
      <p className="mt-4 text-lg text-steel-dark max-w-md">
        La página que buscas no existe o fue movida. Pero podemos ayudarte a
        encontrar lo que necesitas.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors"
        >
          Volver al inicio
        </Link>
        <Link
          href="/todo-incluido"
          className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-navy hover:bg-gray-50 transition-colors"
        >
          Ver paquetes todo incluido
        </Link>
      </div>
    </section>
  );
}
