import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirmación de Pago",
  robots: { index: false, follow: false },
};

export default function ConfirmacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
