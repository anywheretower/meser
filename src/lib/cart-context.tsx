"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { pushEvent } from "@/lib/gtm";
import { getProductById } from "@/lib/products";

export interface CartItem {
  productId: string;
  quantity: number;
  withInstallation: boolean;
}

interface CartContextType {
  items: CartItem[];
  addItem: (productId: string, withInstallation: boolean) => void;
  removeItem: (productId: string, withInstallation: boolean) => void;
  updateQuantity: (productId: string, withInstallation: boolean, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

const CART_KEY = "meser-cart";

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setItems(loadCart());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveCart(items);
  }, [items, loaded]);

  const addItem = useCallback((productId: string, withInstallation: boolean) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === productId && i.withInstallation === withInstallation
      );
      if (existing) {
        return prev.map((i) =>
          i.productId === productId && i.withInstallation === withInstallation
            ? { ...i, quantity: Math.min(i.quantity + 1, 10) }
            : i
        );
      }
      return [...prev, { productId, quantity: 1, withInstallation }];
    });
    const product = getProductById(productId);
    if (product) {
      pushEvent({
        event: "add_to_cart",
        product_name: product.name,
        product_price: withInstallation ? product.todoIncluidoPrice : product.price,
        product_category: product.category,
      });
    }
  }, []);

  const removeItem = useCallback((productId: string, withInstallation: boolean) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.productId === productId && i.withInstallation === withInstallation)
      )
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, withInstallation: boolean, quantity: number) => {
      if (quantity <= 0) {
        setItems((prev) =>
          prev.filter(
            (i) => !(i.productId === productId && i.withInstallation === withInstallation)
          )
        );
      } else {
        setItems((prev) =>
          prev.map((i) =>
            i.productId === productId && i.withInstallation === withInstallation
              ? { ...i, quantity: Math.min(quantity, 10) }
              : i
          )
        );
      }
    },
    []
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  const totalPrice = items.reduce((sum, i) => {
    const product = getProductById(i.productId);
    if (!product) return sum;
    const unitPrice = i.withInstallation ? product.todoIncluidoPrice : product.price;
    return sum + unitPrice * i.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
