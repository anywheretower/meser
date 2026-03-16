import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioGlobal from "@/components/FormularioGlobal";
import StickyCTA from "@/components/StickyCTA";
import SocialSidebar from "@/components/SocialSidebar";
import { CartProvider } from "@/lib/cart-context";
import { GTM_ID } from "@/lib/gtm";
import SchemaOrg from "@/components/SchemaOrg";

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Meser — Climatización Integral para tu Hogar en Santiago",
    template: "%s | Meser",
  },
  description:
    "Climatización integral para hogares en Santiago. Diagnóstico gratuito por Zoom, precio cerrado todo incluido y instalación estética. Samsung y Midea. +150 hogares.",
  metadataBase: new URL("https://www.meser.cl"),
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Meser",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Meser — Climatización Integral para tu Hogar en Santiago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <SchemaOrg />
      </head>
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
        className={`${geist.variable} antialiased`}
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
          <FormularioGlobal />
          <Footer />
          <StickyCTA />
          <SocialSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
