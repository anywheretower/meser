"use client";

import { useCart } from "@/lib/cart-context";
import { useState } from "react";

export default function AddToCartButton({ productId }: { productId: string }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addItem(productId);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      onClick={handleClick}
      className="block w-full text-center rounded-full bg-cyan px-4 py-2.5 text-sm font-semibold text-navy hover:bg-cyan-dark transition-colors"
    >
      {added ? "Agregado ✓" : "Agregar al carrito"}
    </button>
  );
}
