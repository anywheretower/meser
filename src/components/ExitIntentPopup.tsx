"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { pushEvent } from "@/lib/gtm";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const trapFocus = useCallback((e: KeyboardEvent) => {
    if (e.key !== "Tab" || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    document.addEventListener("keydown", trapFocus);
    // Focus the dialog on open
    const timer = setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    }, 100);
    return () => {
      document.removeEventListener("keydown", trapFocus);
      clearTimeout(timer);
    };
  }, [show, trapFocus]);

  useEffect(() => {
    // Only show on desktop (exit intent doesn't work well on mobile)
    if (window.innerWidth < 1024) return;

    // Don't show if already dismissed this session
    if (sessionStorage.getItem("meser_exit_dismissed")) return;

    // Don't show if user already submitted form
    if (sessionStorage.getItem("meser_form_submitted")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
        pushEvent({ event: "exit_intent_shown" });
      }
    };

    // Delay activation by 10 seconds to avoid triggering on quick bounces
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("meser_exit_dismissed", "1");
    pushEvent({ event: "exit_intent_dismissed" });
  };

  const handleCTA = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem("meser_exit_dismissed", "1");
    pushEvent({ event: "exit_intent_cta_click" });
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 backdrop-blur-sm p-4"
      onClick={handleDismiss}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="¿Te vas sin cotizar?"
        className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-steel hover:text-navy hover:bg-gray-100 transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-cyan/10 flex items-center justify-center">
            <svg className="w-7 h-7 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="mt-5 text-xl font-bold text-navy">
            ¿Te vas sin cotizar?
          </h2>
          <p className="mt-3 text-sm text-steel-dark leading-relaxed">
            Agenda un diagnóstico gratuito de 25 minutos por Zoom.
            Sin compromiso — solo la información que necesitas.
          </p>

          <div className="mt-4 rounded-xl bg-cyan/5 border border-cyan/20 px-4 py-3">
            <p className="text-sm font-semibold text-navy">
              Paquetes desde <span className="text-cyan">$399.990</span> todo incluido
            </p>
            <p className="text-xs text-steel-dark mt-1">
              Equipo + instalación estética + garantía total
            </p>
          </div>

          <Link
            href="#agendar"
            onClick={handleCTA}
            className="mt-6 block w-full text-center rounded-full bg-cyan px-6 py-3.5 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors btn-glow"
          >
            Agendar asesoría gratuita
          </Link>

          <button
            onClick={handleDismiss}
            className="mt-3 text-xs text-steel hover:text-navy transition-colors"
          >
            No gracias, seguiré mirando
          </button>
        </div>
      </div>
    </div>
  );
}
