import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Meser — Climatización Integral",
    short_name: "Meser",
    description:
      "Aire acondicionado con instalación estética en Santiago. Diagnóstico gratuito, precio cerrado, garantía total.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0A1628",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/images/og-image.png",
        sizes: "1200x630",
        type: "image/png",
      },
    ],
  };
}
