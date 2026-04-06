"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-5xl font-bold text-navy">Error</h1>
      <p className="mt-4 text-lg text-steel-dark max-w-md">
        Algo salió mal. Puedes intentar de nuevo o contactarnos por WhatsApp.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors"
        >
          Intentar de nuevo
        </button>
        <a
          href="https://wa.me/56982351110"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-navy hover:bg-gray-50 transition-colors"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </section>
  );
}
