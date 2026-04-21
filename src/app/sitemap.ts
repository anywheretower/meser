import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.meser.cl";

  // S71: Fecha dinámica de build — refleja último deploy real
  const buildDate = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/aires-acondicionados`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/termos`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/todo-incluido`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/climatizacion-integral`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/climatizacion-inteligente`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/instalacion-aire-acondicionado`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mantencion`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/garantia`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/club-meser`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/politica-devoluciones`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/politica-privacidad`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/comparativa-calefaccion`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/glosario-climatizacion`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const soluciones = ["departamento", "casa", "mansarda", "oficina", "multisplit"];
  const solucionPages: MetadataRoute.Sitemap = soluciones.map((s) => ({
    url: `${baseUrl}/soluciones/${s}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const coberturas = ["las-condes", "lo-barnechea", "nunoa", "providencia", "vitacura"];
  const coberturaPages: MetadataRoute.Sitemap = coberturas.map((c) => ({
    url: `${baseUrl}/cobertura/${c}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.fechaActualizacion ?? post.fecha),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...solucionPages, ...coberturaPages, ...blogPages];
}
