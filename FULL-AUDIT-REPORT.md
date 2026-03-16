# Auditoría SEO Completa — www.meser.cl

**Fecha:** 16 de marzo de 2026
**Dominio:** www.meser.cl (meser.cl → 301 → www.meser.cl)
**Plataforma:** Next.js 16.1.6 en Vercel
**Tipo de negocio:** HVACBusiness (Climatización integral, Santiago)
**Páginas en sitemap:** 25
**Auditoría anterior:** 15 de marzo de 2026 (Score: 52/100)

---

## SEO Health Score: 78/100 (+26 pts vs auditoría anterior)

| Categoría | Peso | Antes | Ahora | Ponderado |
|-----------|------|-------|-------|-----------|
| Technical SEO | 22% | 38 | 82 | 18.0 |
| Content Quality | 23% | 78 | 68 | 15.6 |
| On-Page SEO | 20% | 65 | 85 | 17.0 |
| Schema / Structured Data | 10% | 15 | 92 | 9.2 |
| Performance (CWV) | 10% | 60 | 75 | 7.5 |
| AI Search Readiness | 10% | 10 | 80 | 8.0 |
| Images | 5% | 30 | 70 | 3.5 |
| **TOTAL** | **100%** | **52** | — | **78.8 ≈ 78** |

> **Nota:** Content Quality bajó de 78 a 68 porque el blog sigue sin contenido real y ahora pesa más como issue conocido sin resolver.

---

## Executive Summary

### Top 5 Problemas Restantes

1. **Blog sin contenido real** — 9 artículos "Próximamente" = thin content indexable
2. **Meta description duplicada** — /aires-acondicionados reutiliza la del homepage
3. **Títulos > 60 chars** — 4 páginas se truncan en SERPs
4. **Alt text background repetido** — Misma imagen/alt en ~20 páginas
5. **Sin HSTS header** — Falta Strict-Transport-Security

### Top 5 Quick Wins

1. Publicar al menos 3 artículos del blog (ya tienen títulos definidos)
2. Meta description única para /aires-acondicionados
3. Acortar títulos de 4 páginas (< 60 chars)
4. Agregar AggregateRating schema (testimonios ya existen)
5. Agregar HSTS header

---

## Progreso desde Auditoría Anterior (15 marzo → 16 marzo)

### Issues RESUELTOS ✅

| # | Issue | Estado |
|---|-------|--------|
| 1 | robots.txt no existía | ✅ Creado con reglas correctas |
| 2 | sitemap.xml no existía | ✅ 25 URLs con prioridades y frecuencias |
| 3 | metadataBase apuntaba a meser.cl (sin www) | ✅ Corregido a www.meser.cl |
| 4 | Sin schema en 90% de páginas | ✅ Organization + HVACBusiness + WebSite global |
| 5 | Alt text vacío en imágenes | ✅ Alt text descriptivo en todas las imágenes |
| 6 | Títulos duplicaban "Meser" | ✅ Corregidos (ya no duplican) |
| 7 | Sin og:image | ✅ OG image 1200x630 implementada |
| 8 | Security headers faltantes | ✅ X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy |
| 9 | Sin breadcrumbs | ✅ Componente con BreadcrumbList schema |
| 10 | Sin noindex en transaccionales | ✅ /carrito, /cotizar, /pago/confirmacion |
| 11 | Sin interlink en soluciones/cobertura | ✅ "Otras soluciones" / "También instalamos en" |
| 12 | Sin llms.txt | ✅ Completo con servicios, precios, contacto |
| 13 | Imágenes PNG pesadas (~6.2 MB) | ✅ WebP con ~97% compresión |
| 14 | Sin FAQPage schema | ✅ En /climatizacion-integral e /instalacion |
| 15 | Sin Service schema | ✅ En /instalacion, /mantencion, /todo-incluido |
| 16 | Sin Product schema | ✅ ItemList con 15 productos en /aires-acondicionados |
| 17 | Twitter card era "summary" | ✅ Ahora "summary_large_image" |

### Issues PENDIENTES ⚠️

| # | Issue | Prioridad |
|---|-------|-----------|
| 1 | Blog con 9 páginas "Próximamente" | 🔴 Crítico |
| 2 | Meta description duplicada en /aires-acondicionados | 🟠 Alto |
| 3 | Títulos > 60 chars en 4 páginas | 🟠 Alto |
| 4 | Logo en Organization schema = favicon.ico | 🟠 Alto |
| 5 | Alt text background repetido ~20 páginas | 🟠 Alto |
| 6 | Sin HSTS header | 🟡 Medio |
| 7 | FAQPage en más páginas | 🟡 Medio |
| 8 | AggregateRating schema (testimonios existen) | 🟡 Medio |
| 9 | Contenido thin en /termos (~900 palabras) | 🟡 Medio |
| 10 | Canonical tags explícitos | 🟡 Medio |
| 11 | lastModified real en sitemap | 🟡 Medio |
| 12 | Cache-Control headers | 🟢 Bajo |
| 13 | CSP header | 🟢 Bajo |
| 14 | Imágenes únicas por página solución/cobertura | 🟢 Bajo |

---

## 1. Technical SEO (82/100)

### Crawlability ✅
- **robots.txt:** Correctamente configurado
  - Allow: /
  - Disallow: /carrito, /cotizar, /pago/, /api/
  - Sitemap: https://www.meser.cl/sitemap.xml
- **Sitemap XML:** 25 URLs con prioridades (1.0 → 0.5) y frecuencias (weekly/monthly)
- **Noindex correcto:** /carrito, /cotizar, /pago/confirmacion

### Indexability ✅
- Todas las páginas públicas son indexables
- metadataBase = https://www.meser.cl (correcto)

### Canonical URLs ⚠️
- No se definen canonical tags explícitos
- Next.js genera canonicals implícitos vía metadataBase — funciona pero no es ideal
- **Riesgo:** Parámetros UTM podrían crear duplicados sin canonical explícito

### Security Headers
| Header | Estado |
|--------|--------|
| X-Content-Type-Options: nosniff | ✅ |
| X-Frame-Options: DENY | ✅ |
| Referrer-Policy: strict-origin-when-cross-origin | ✅ |
| Permissions-Policy: camera=(), microphone=(), geolocation=() | ✅ |
| Strict-Transport-Security (HSTS) | ❌ Falta |
| Content-Security-Policy | ❌ Falta |

### Sitemap Issues ⚠️
- Todas las URLs comparten el mismo lastModified (fecha de generación, no de edición real)
- /climatizacion-inteligente en sitemap pero sin link interno visible en nav

### Redirección ✅
- meser.cl → www.meser.cl (301)
- HTTPS forzado

---

## 2. Content Quality (68/100)

### E-E-A-T Assessment

| Señal | Antes | Ahora | Detalle |
|-------|-------|-------|---------|
| Experience | ✅ | ✅ | "+150 hogares", testimonios |
| Expertise | ⚠️ | ✅ | Contenido técnico sólido (BTU, instalación, marcas) |
| Authority | ⚠️ | ⚠️ | Sin blog publicado, sin backlinks visibles |
| Trust | ✅ | ✅ | Dirección real, precios, garantía documentada |

### Contenido por Página

| Página | Palabras | Evaluación |
|--------|----------|------------|
| / (Home) | ~1,500 | ✅ Bueno |
| /aires-acondicionados | ~2,800 | ✅ Excelente |
| /climatizacion-integral | ~2,300 | ✅ Bueno |
| /todo-incluido | ~1,500 | ✅ Bueno |
| /instalacion-aire-acondicionado | ~1,300 | ✅ Aceptable |
| /mantencion | ~1,200 | ✅ Aceptable |
| /termos | ~900 | ⚠️ Podría expandirse |
| /blog | ~900 | ❌ **TODO "Próximamente"** |
| /nosotros | ~1,300 | ✅ Aceptable |
| /garantia | ~1,300 | ✅ Bueno |
| /contacto | ~450 | ✅ Normal |
| /club-meser | ~900 | ✅ Aceptable |
| /soluciones/* (5) | ~1,300 c/u | ✅ Aceptable |
| /cobertura/* (5) | ~1,300 c/u | ✅ Aceptable |

### Problemas de Contenido

1. **❌ CRÍTICO: Blog vacío** — 9 artículos marcados "Próximamente". Google los indexa como thin content. Daña la calidad percibida del sitio completo.

2. **⚠️ Meta description duplicada** — /aires-acondicionados usa la misma description que el homepage: "Climatización integral para hogares en Santiago. Diagnóstico gratuito, precio cerrado, instalación estética."

3. **⚠️ /termos tiene ~900 palabras** — Podría beneficiarse de FAQs, guía de capacidades, comparativa.

---

## 3. On-Page SEO (85/100)

### Title Tags

| Página | Title | Chars | Status |
|--------|-------|-------|--------|
| / | Meser — Climatización Integral para tu Hogar en Santiago | 57 | ✅ |
| /aires-acondicionados | Aires Acondicionados · Catálogo Samsung y Midea \| Meser | 54 | ✅ |
| /climatizacion-integral | Climatización Integral Santiago · Diagnóstico Gratis · Precio Cerrado \| Meser | 89 | ⚠️ Largo |
| /todo-incluido | Aire Acondicionado Todo Incluido desde $449.980 · Santiago \| Meser | 82 | ⚠️ Largo |
| /instalacion-aire-acondicionado | Instalación Aire Acondicionado Santiago · Estética · Garantía Total \| Meser | 83 | ⚠️ Largo |
| /mantencion | Mantención Aire Acondicionado Santiago · Desde $59.990 \| Meser | 75 | ⚠️ Límite |
| /termos | Termos Eléctricos · Midea Lume \| Meser | 52 | ✅ |
| /blog | Blog · Guías y Consejos de Climatización \| Meser | 49 | ✅ |
| /nosotros | Nosotros · Climatización Integral Santiago \| Meser | 65 | ⚠️ Límite |
| /contacto | Contacto · Climatización Santiago \| Meser | 59 | ✅ |
| /garantia | Garantía Total · Equipo + Instalación \| Meser | 47 | ✅ |
| /soluciones/departamento | Aire Acondicionado para Departamentos Santiago \| Meser | 67 | ⚠️ Límite |
| /cobertura/las-condes | Aire Acondicionado Las Condes · Instalación Estética \| Meser | 73 | ⚠️ Largo |

**4 páginas con títulos > 70 chars** que se truncarán en SERPs.

### Meta Descriptions ✅
- Presentes en todas las páginas
- Longitudes 103-158 chars (rango aceptable)
- **Problema:** /aires-acondicionados reutiliza la description del homepage

### Heading Structure ✅
- Todas las páginas tienen un solo H1
- Jerarquía H1 → H2 → H3 respetada
- Keywords relevantes en headings

### Internal Linking ✅
- Header con dropdown navigation (Productos/Servicios)
- Footer con 4 categorías de links
- Breadcrumbs con BreadcrumbList schema en todas las internas
- Interlinks contextuales en /soluciones/* y /cobertura/*

### Open Graph ✅
- og:title, og:description, og:site_name, og:locale (es_CL)
- og:image 1200x630 implementada
- Twitter card: summary_large_image

---

## 4. Schema / Structured Data (92/100)

### Schemas Implementados

| Schema | Páginas | Status |
|--------|---------|--------|
| Organization | Todas | ✅ Completo |
| HVACBusiness | Todas | ✅ Con geo, horarios, servicios, catálogo |
| WebSite | Todas | ✅ |
| BreadcrumbList | Todas las internas | ✅ Con posición y URLs |
| Product + AggregateOffer | /aires-acondicionados | ✅ ItemList 15 productos |
| FAQPage | /climatizacion-integral, /instalacion | ✅ |
| Service | /instalacion, /mantencion, /todo-incluido | ✅ Con precios |

### Oportunidades Faltantes

| Schema | Dónde | Impacto |
|--------|-------|---------|
| AggregateRating / Review | Homepage (testimonios) | ⭐ Estrellas en SERPs |
| FAQPage | /mantencion, /termos, /soluciones/* | FAQ expandibles |
| Logo real (no favicon) | Organization schema | Knowledge panel |
| LocalBusiness con reviews | HVACBusiness | Rich results local |

---

## 5. Performance (75/100)

### Optimizaciones Activas
- ✅ Hero image con `priority` (preload LCP)
- ✅ Imágenes WebP (~97% compresión)
- ✅ next/image en todas las imágenes
- ✅ Responsive sizes attributes
- ✅ Font preload (woff2)
- ✅ RevealOnScroll con viewport trigger
- ✅ ISR activo con Vercel CDN

### Áreas de Mejora
- ⚠️ Sin Cache-Control headers explícitos
- ⚠️ Framer Motion agrega ~45KB al bundle
- ⚠️ lastModified en sitemap = fecha de generación (no ayuda a crawl budget)

---

## 6. AI Search Readiness (80/100)

### llms.txt ✅
- Presente y completo
- Servicios, marcas, precios, cobertura, contacto

### Citability

| Señal | Estado |
|-------|--------|
| Datos estructurados citables | ✅ Precios, servicios, ubicación |
| Contenido factual verificable | ✅ Precios específicos, marcas, direcciones |
| Autoridad temática | ⚠️ Falta blog con contenido experto |
| Passage-level clarity | ✅ Secciones bien delimitadas |
| AI crawler access | ✅ Sin bloqueo en robots.txt |

---

## 7. Images (70/100)

### Fortalezas
- ✅ Todas WebP con compresión ~97%
- ✅ next/image component
- ✅ Alt text descriptivo en productos

### Problemas
1. **⚠️ Alt text repetido** — "Living de hogar en Santiago con climatización integral instalada" en ~20 páginas
2. **⚠️ Pocas imágenes únicas** — Páginas soluciones/cobertura solo tienen background repetido
3. **⚠️ Logo en schema** → favicon.ico en vez de logo real
4. **⚠️ Blog sin imágenes** — Artículos placeholder sin thumbnails

---

## Scoring Methodology

| Score | Nivel |
|-------|-------|
| 90-100 | Excelente — Líder en su industria |
| 75-89 | Bueno — Competitivo, mejoras incrementales |
| 60-74 | Aceptable — Fundamentos sólidos, gaps significativos |
| 40-59 | Deficiente — Issues críticos bloqueando rendimiento |
| 0-39 | Crítico — Requiere intervención urgente |

**meser.cl está en 78/100 (Bueno)** — Los fundamentos técnicos son sólidos. El principal bloqueante para llegar a 85+ es el blog sin contenido real.
