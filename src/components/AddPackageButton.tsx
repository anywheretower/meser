"use client";

import { useCart } from "@/lib/cart-context";
import { useRouter } from "next/navigation";
import { trackAddToCart } from "@/lib/gtm";

interface Props {
  productId: string;
  price?: number;
  className?: string;
  children: React.ReactNode;
}

export default function AddPackageButton({ productId, price, className, children }: Props) {
  const { addItem } = useCart();
  const router = useRouter();

  return (
    <button
      onClick={() => {
        addItem(productId, true);
        trackAddToCart(productId, price ?? 0, true);
        router.push("/carrito");
      }}
      className={className}
    >
      {children}
    </button>
  );
}
