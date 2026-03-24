"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import CartButton from "@/components/CartButton";
import { trackPhoneClick } from "@/lib/gtm";

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

function DesktopDropdown({ entry, pathname }: { entry: NavDropdown; pathname: string }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const show = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };
  const hide = () => {
    timeout.current = setTimeout(() => setOpen(false), 120);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    } else if (e.key === "ArrowDown" && !open) {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onKeyDown={handleKeyDown}
      ref={menuRef}
    >
      <button
        className="flex items-center gap-1 text-[13px] font-medium text-navy/75 hover:text-navy transition-colors duration-200"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {entry.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50" role="menu">
          <div className="w-64 rounded-xl bg-white/95 backdrop-blur-xl border border-gray-200/80 shadow-lg shadow-black/[0.04] p-2 animate-fade-in">
            {entry.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
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
  pathname,
}: {
  entry: NavDropdown;
  onNavigate: () => void;
  pathname: string;
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
              aria-current={pathname === item.href ? "page" : undefined}
              className="block rounded-lg px-3 py-2 text-sm text-navy/75 hover:text-navy hover:bg-gray-50 transition-colors"
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
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl backdrop-saturate-150 border-b border-gray-200/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-4xl font-bold text-navy tracking-tight">
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
                <DesktopDropdown key={entry.label} entry={entry} pathname={pathname} />
              ) : (
                <Link
                  key={entry.href}
                  href={entry.href}
                  aria-current={pathname === entry.href ? "page" : undefined}
                  className="text-[13px] font-medium text-navy/75 hover:text-navy transition-colors duration-200"
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
              className="text-[13px] font-medium text-navy/70 hover:text-navy transition-colors"
              onClick={() => trackPhoneClick("header")}
            >
              +569 8235 1110
            </a>
            <CartButton />
            <Link
              href="#agendar"
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
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
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
                  pathname={pathname}
                />
              ) : (
                <Link
                  key={entry.href}
                  href={entry.href}
                  onClick={closeMobile}
                  aria-current={pathname === entry.href ? "page" : undefined}
                  className="block text-sm font-medium text-navy/70 hover:text-navy hover:bg-gray-50 rounded-lg px-3 py-2.5 transition-colors"
                >
                  {entry.label}
                </Link>
              )
            )}
            <div className="pt-3 mt-2 border-t border-gray-100 space-y-3">
              <a
                href="tel:+56982351110"
                onClick={() => { trackPhoneClick("mobile_menu"); closeMobile(); }}
                className="flex items-center justify-center gap-2 w-full text-sm font-medium text-navy/70 hover:text-navy transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +569 8235 1110
              </a>
              <Link
                href="#agendar"
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
