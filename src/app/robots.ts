import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/carrito", "/cotizar", "/pago/", "/api/"],
      },
    ],
    sitemap: "https://www.meser.cl/sitemap.xml",
  };
}
