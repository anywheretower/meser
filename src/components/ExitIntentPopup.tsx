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
    const timer = setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    }, 100);
    return () => {
      document.removeEventListener("keydown", trapFocus);
      clearTimeout(timer);
    };
  }, [show, trapFocus]);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem("meser_exit_dismissed")) return;
    // Don't show if user already submitted form
    if (sessionStorage.getItem("meser_form_submitted")) return;

    const isMobile = window.innerWidth < 1024;

    const triggerPopup = () => {
      if (!dismissed) {
        setShow(true);
        pushEvent({ event: "exit_intent_shown", device: isMobile ? "mobile" : "desktop" });
      }
    };

    let cleanup: () => void;

    if (isMobile) {
      // Mobile: detect rapid scroll-up (user about to leave)
      let lastScrollY = window.scrollY;
      let scrollUpDistance = 0;
      const threshold = 300; // px of rapid upward scroll
      let activated = false;

      const handleScroll = () => {
        if (activated) return;
        const currentY = window.scrollY;
        const delta = lastScrollY - currentY;

        if (delta > 0) {
          // Scrolling up
          scrollUpDistance += delta;
          if (scrollUpDistance >= threshold && currentY > 200) {
            activated = true;
            triggerPopup();
          }
        } else {
          scrollUpDistance = 0;
        }
        lastScrollY = currentY;
      };

      // Delay activation by 15 seconds on mobile
      const timer = setTimeout(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
      }, 15000);

      cleanup = () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      // Desktop: mouse leave detection
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0) triggerPopup();
      };

      const timer = setTimeout(() => {
        document.addEventListener("mouseleave", handleMouseLeave);
      }, 10000);

      cleanup = () => {
        clearTimeout(timer);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

    return cleanup;
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
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-navy/60 backdrop-blur-sm p-4"
      onClick={handleDismiss}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="¿Te vas sin cotizar?"
        className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-steel hover:text-navy hover:bg-gray-100 transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
            <svg className="w-7 h-7 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>

          <h2 className="mt-4 text-xl font-bold text-navy">
            ¿Te vas sin cotizar?
          </h2>
          <p className="mt-2 text-sm text-steel-dark leading-relaxed">
            Recibe tu presupuesto en 2 minutos por WhatsApp. Sin compromiso.
          </p>

          <div className="mt-4 rounded-xl bg-cyan/5 border border-cyan/20 px-4 py-3">
            <p className="text-sm font-semibold text-navy">
              Paquetes desde <span className="text-cyan">$399.990</span> todo incluido
            </p>
            <p className="text-xs text-steel-dark mt-1">
              Equipo + instalación estética + garantía total
            </p>
          </div>

          {/* WhatsApp as primary CTA */}
          <a
            href="https://wa.me/56982351110?text=Hola%2C%20quiero%20cotizar%20un%20aire%20acondicionado"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCTA}
            className="mt-5 flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1ebe57] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Cotizar por WhatsApp
          </a>

          <Link
            href="#agendar"
            onClick={handleCTA}
            className="mt-3 block w-full text-center rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-navy hover:bg-gray-50 transition-colors"
          >
            Prefiero llenar el formulario
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
