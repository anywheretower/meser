"use client";

import { useCart } from "@/lib/cart-context";
import { useState, useRef, useEffect } from "react";
import { formatPrice } from "@/lib/products";

interface AddToCartButtonProps {
  productId: string;
  price: number;
  todoIncluidoPrice: number;
}

export default function AddToCartButton({
  productId,
  price,
  todoIncluidoPrice,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [open, setOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSelect = (withInstallation: boolean) => {
    addItem(productId, withInstallation);
    setOpen(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  if (added) {
    return (
      <button
        disabled
        className="block w-full text-center rounded-full bg-cyan/80 px-4 py-2.5 text-sm font-semibold text-navy"
      >
        Agregado ✓
      </button>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="block w-full text-center rounded-full bg-cyan px-4 py-2.5 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors"
      >
        Agregar al carrito
      </button>

      {open && (
        <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-30">
          <button
            onClick={() => handleSelect(false)}
            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            <span className="block text-sm font-semibold text-navy">Solo equipo</span>
            <span className="block text-xs text-steel-dark">{formatPrice(price)}</span>
          </button>
          <button
            onClick={() => handleSelect(true)}
            className="w-full px-4 py-3 text-left hover:bg-cyan/5 transition-colors"
          >
            <span className="block text-sm font-semibold text-cyan">Con instalación</span>
            <span className="block text-xs text-steel-dark">{formatPrice(todoIncluidoPrice)}</span>
          </button>
        </div>
      )}
    </div>
  );
}
