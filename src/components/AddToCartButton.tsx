"use client";

import { useCart } from "@/lib/cart-context";
import { useState } from "react";
import { formatPrice } from "@/lib/products";
import { trackAddToCart } from "@/lib/gtm";

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
  const [added, setAdded] = useState(false);

  const handleAdd = (withInstallation: boolean) => {
    addItem(productId, withInstallation);
    trackAddToCart(productId, withInstallation ? todoIncluidoPrice : price, withInstallation);
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
    <div className="space-y-1.5">
      <button
        onClick={() => handleAdd(true)}
        className="block w-full text-center rounded-full bg-cyan px-4 py-2.5 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors"
      >
        Con instalación — {formatPrice(todoIncluidoPrice)}
      </button>
      <button
        onClick={() => handleAdd(false)}
        className="block w-full text-center text-xs text-steel-dark hover:text-navy transition-colors py-1"
      >
        Solo equipo {formatPrice(price)}
      </button>
    </div>
  );
}
