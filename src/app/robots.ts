import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/carrito", "/cotizar", "/pago/", "/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/carrito", "/cotizar", "/pago/"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/", "/carrito", "/cotizar", "/pago/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/", "/carrito", "/cotizar", "/pago/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/", "/carrito", "/cotizar", "/pago/"],
      },
      {
        userAgent: "Bytespider",
        allow: "/",
        disallow: ["/api/", "/carrito", "/cotizar", "/pago/"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/", "/carrito", "/cotizar", "/pago/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/", "/carrito", "/cotizar", "/pago/"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/api/", "/carrito", "/cotizar", "/pago/"],
      },
      {
        userAgent: "meta-externalagent",
        allow: "/",
        disallow: ["/api/", "/carrito", "/cotizar", "/pago/"],
      },
    ],
    sitemap: "https://www.meser.cl/sitemap.xml",
  };
}
