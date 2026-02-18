import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { CartProvider } from "@/lib/cart-context";
import { GTM_ID } from "@/lib/gtm";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
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
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <body
        className={`${plusJakarta.variable} ${instrumentSerif.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyCTA />
          <WhatsAppWidget />
        </CartProvider>
      </body>
    </html>
  );
}
