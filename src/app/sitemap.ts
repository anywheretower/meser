import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.meser.cl";

  // Fechas reales de última modificación significativa
  const lastUpdate = new Date("2026-03-16");
  const contentUpdate = new Date("2026-03-15");
  const initialLaunch = new Date("2026-03-01");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/aires-acondicionados`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/termos`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/todo-incluido`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/climatizacion-integral`,
      lastModified: contentUpdate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/climatizacion-inteligente`,
      lastModified: initialLaunch,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/instalacion-aire-acondicionado`,
      lastModified: contentUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mantencion`,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/garantia`,
      lastModified: initialLaunch,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: initialLaunch,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: initialLaunch,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: initialLaunch,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/club-meser`,
      lastModified: initialLaunch,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const soluciones = ["departamento", "casa", "mansarda", "oficina", "multisplit"];
  const solucionPages: MetadataRoute.Sitemap = soluciones.map((s) => ({
    url: `${baseUrl}/soluciones/${s}`,
    lastModified: contentUpdate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const coberturas = ["las-condes", "lo-barnechea", "nunoa", "providencia", "vitacura"];
  const coberturaPages: MetadataRoute.Sitemap = coberturas.map((c) => ({
    url: `${baseUrl}/cobertura/${c}`,
    lastModified: contentUpdate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...solucionPages, ...coberturaPages];
}
