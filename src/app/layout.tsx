import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import dynamic from "next/dynamic";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioGlobal from "@/components/FormularioGlobal";
import { CartProvider } from "@/lib/cart-context";
import { GTM_ID } from "@/lib/gtm";
import SchemaOrg from "@/components/SchemaOrg";

// R39: Code splitting — 5 componentes client no-críticos (StickyCTA, SocialSidebar,
// RouteChangeTracker, ScrollDepthTracker, ExitIntentPopup) agrupados en un solo
// bundle lazy para evitar waterfalls de JS en mobile.
const ClientEnhancements = dynamic(
  () => import("@/components/ClientEnhancements")
);

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
    "Climatización integral para hogares en Santiago. Diagnóstico gratuito por Zoom, precio cerrado todo incluido y instalación estética. Samsung, Midea y Anwo. +150 hogares.",
  authors: [{ name: "Meser", url: "https://www.meser.cl" }],
  metadataBase: new URL("https://www.meser.cl"),
  alternates: { canonical: "/" },
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
    <html lang="es-CL">
      <head>
        <SchemaOrg />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />
        <link rel="llms-txt" href="/llms.txt" />
        <link rel="llms-full-txt" href="/llms-full.txt" />
        <meta name="google-site-verification" content="CpYswW3k5lPNH4Cn5OkRIaX_yatm8PZz_gwfL85M2IA" />
      </head>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){var loaded=false;function loadGTM(){if(loaded)return;loaded=true;
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
['scroll','click','touchstart','keydown'].forEach(function(e){document.removeEventListener(e,loadGTM,{passive:true});});
};['scroll','click','touchstart','keydown'].forEach(function(e){document.addEventListener(e,loadGTM,{once:true,passive:true});});
setTimeout(loadGTM,3000);})();`,
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
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-cyan focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy">
            Saltar al contenido
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <FormularioGlobal />
          <Footer />
          <ClientEnhancements />
        </CartProvider>
      </body>
    </html>
  );
}
