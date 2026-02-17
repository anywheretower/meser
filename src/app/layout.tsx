import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Meser — Climatización Integral para tu Hogar en Santiago",
    template: "%s | Meser",
  },
  description:
    "Climatización integral para hogares en Santiago. Diagnóstico gratuito por Zoom, precio cerrado todo incluido y instalación estética. Samsung y Midea. +150 hogares.",
  metadataBase: new URL("https://meser.cl"),
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Meser",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
