"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/climatizacion-integral", label: "Soluciones" },
  { href: "/aires-acondicionados", label: "Equipos" },
  { href: "/instalacion-aire-acondicionado", label: "Instalación" },
  { href: "/todo-incluido", label: "Todo Incluido" },
  { href: "/climatizacion-inteligente", label: "Inteligente" },
  { href: "/mantencion", label: "Mantención" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-navy">meser</span>
            <span className="hidden sm:inline text-xs text-steel-dark font-medium">
              Climatización Integral
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy/70 hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+56982351110"
              className="text-sm font-medium text-navy/70 hover:text-navy"
            >
              +569 8235 1110
            </a>
            <Link
              href="/cotizar"
              className="rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors"
            >
              Asesoría gratuita
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-navy"
            aria-label="Abrir menú"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-navy/70 hover:text-navy py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link
                href="/cotizar"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors"
              >
                Asesoría gratuita
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
