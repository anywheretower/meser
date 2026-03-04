"use client";

import { useCart } from "@/lib/cart-context";
import { useRouter } from "next/navigation";

interface Props {
  productId: string;
  className?: string;
  children: React.ReactNode;
}

export default function AddPackageButton({ productId, className, children }: Props) {
  const { addItem } = useCart();
  const router = useRouter();

  return (
    <button
      onClick={() => {
        addItem(productId, true);
        router.push("/carrito");
      }}
      className={className}
    >
      {children}
    </button>
  );
}
