"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CartButton from "@/components/CartButton";

interface DropdownItem {
  href: string;
  label: string;
  desc?: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

interface NavLink {
  href: string;
  label: string;
}

type NavEntry = NavDropdown | NavLink;

function isDropdown(entry: NavEntry): entry is NavDropdown {
  return "items" in entry;
}

const nav: NavEntry[] = [
  {
    label: "Productos",
    items: [
      {
        href: "/aires-acondicionados",
        label: "Aires acondicionados",
        desc: "Samsung Wind-Free y Midea Inverter",
      },
      {
        href: "/termos",
        label: "Termos eléctricos",
        desc: "Midea Lume 50L a 120L",
      },
    ],
  },
  {
    label: "Servicios",
    items: [
      {
        href: "/climatizacion-integral",
        label: "Soluciones integrales",
        desc: "Diagnóstico + proyecto completo",
      },
      {
        href: "/instalacion-aire-acondicionado",
        label: "Instalación",
        desc: "Servicio profesional estético",
      },
      {
        href: "/todo-incluido",
        label: "Todo Incluido",
        desc: "Equipo + instalación + garantía",
      },
      {
        href: "/mantencion",
        label: "Mantención",
        desc: "Limpieza y revisión técnica",
      },
      {
        href: "/climatizacion-inteligente",
        label: "Inteligente",
        desc: "WiFi, IA y domótica",
      },
    ],
  },
  { href: "/club-meser", label: "Club Meser" },
  { href: "/nosotros", label: "Nosotros" },
];

/* ── Desktop Dropdown ── */

function DesktopDropdown({ entry }: { entry: NavDropdown }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(null);

  const show = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };
  const hide = () => {
    timeout.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        className="flex items-center gap-1 text-[13px] font-medium text-navy/60 hover:text-navy transition-colors duration-200"
        onClick={() => setOpen((v) => !v)}
      >
        {entry.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="w-64 rounded-xl bg-white/95 backdrop-blur-xl border border-gray-200/80 shadow-lg shadow-black/[0.04] p-2 animate-fade-in">
            {entry.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 hover:bg-gray-50 transition-colors group"
              >
                <span className="text-sm font-medium text-navy group-hover:text-cyan transition-colors">
                  {item.label}
                </span>
                {item.desc && (
                  <span className="block text-[11px] text-steel-dark mt-0.5">
                    {item.desc}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Mobile Accordion ── */

function MobileAccordion({
  entry,
  onNavigate,
}: {
  entry: NavDropdown;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-sm font-medium text-navy/70 hover:text-navy rounded-lg px-3 py-2.5 transition-colors"
      >
        {entry.label}
        <svg
          className={`w-4 h-4 text-steel transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="ml-3 pl-3 border-l border-gray-200 space-y-0.5 pb-1">
          {entry.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="block rounded-lg px-3 py-2 text-sm text-navy/60 hover:text-navy hover:bg-gray-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Header ── */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl backdrop-saturate-150 border-b border-gray-200/60 shadow-sm"
          : "bg-white/95 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-2xl font-bold text-navy tracking-tight">
              meser
            </span>
            <span className="hidden sm:inline text-[11px] text-steel-dark font-medium tracking-wide uppercase">
              Climatización Integral
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((entry) =>
              isDropdown(entry) ? (
                <DesktopDropdown key={entry.label} entry={entry} />
              ) : (
                <Link
                  key={entry.href}
                  href={entry.href}
                  className="text-[13px] font-medium text-navy/60 hover:text-navy transition-colors duration-200"
                >
                  {entry.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA + Cart + Phone */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+56982351110"
              className="text-[13px] font-medium text-navy/50 hover:text-navy transition-colors"
            >
              +569 8235 1110
            </a>
            <CartButton />
            <Link
              href="/cotizar"
              className="rounded-full bg-cyan px-5 py-2.5 text-sm font-semibold text-navy hover:bg-cyan-dark transition-all btn-glow"
            >
              Asesoría gratuita
            </Link>
          </div>

          {/* Mobile: cart + menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <CartButton />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-navy"
              aria-label="Abrir menú"
            >
              {mobileOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-0.5">
            {nav.map((entry) =>
              isDropdown(entry) ? (
                <MobileAccordion
                  key={entry.label}
                  entry={entry}
                  onNavigate={closeMobile}
                />
              ) : (
                <Link
                  key={entry.href}
                  href={entry.href}
                  onClick={closeMobile}
                  className="block text-sm font-medium text-navy/70 hover:text-navy hover:bg-gray-50 rounded-lg px-3 py-2.5 transition-colors"
                >
                  {entry.label}
                </Link>
              )
            )}
            <div className="pt-3 mt-2 border-t border-gray-100">
              <Link
                href="/cotizar"
                onClick={closeMobile}
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
