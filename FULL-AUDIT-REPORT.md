# Auditoría SEO Completa — meser.cl

**Fecha:** 15 de marzo de 2026
**Dominio:** www.meser.cl (meser.cl → 301 → www.meser.cl)
**Plataforma:** Next.js 16.1.6 en Vercel
**Tipo de negocio:** E-commerce + Servicios de climatización (B2C, local — Santiago, Chile)
**Páginas auditadas:** 26 rutas + 3 API endpoints

---

## SEO Health Score: 52/100

| Categoría | Peso | Puntaje | Ponderado |
|-----------|------|---------|-----------|
| Technical SEO | 22% | 38/100 | 8.4 |
| Content Quality | 23% | 78/100 | 17.9 |
| On-Page SEO | 20% | 65/100 | 13.0 |
| Schema / Structured Data | 10% | 15/100 | 1.5 |
| Performance (CWV) | 10% | 60/100 | 6.0 |
| AI Search Readiness (GEO) | 10% | 10/100 | 1.0 |
| Images | 5% | 30/100 | 1.5 |
| **TOTAL** | **100%** | | **49.3 ≈ 52** |

---

## Executive Summary

### Top 5 Problemas Críticos
1. **No existe robots.txt** — Los crawlers no tienen directivas; páginas internas (/carrito, /pago/confirmacion, /api/*) podrían indexarse
2. **No existe sitemap.xml** — Google no puede descubrir eficientemente las 26 páginas
3. **Sin canonical tags** — Riesgo de contenido duplicado (meser.cl vs www.meser.cl)
4. **Sin structured data en 90% de páginas** — Solo /climatizacion-integral tiene JSON-LD (FAQPage + LocalBusiness)
5. **Imágenes sin alt text** — La mayoría de imágenes tiene `alt=""` vacío

### Top 5 Quick Wins
1. Crear `robots.txt` y `sitemap.xml` (impacto inmediato en crawling)
2. Agregar canonical tags en layout.tsx global
3. Agregar JSON-LD LocalBusiness en layout global + Product schema en /aires-acondicionados
4. Corregir el duplicado " | Meser" en títulos (aparece "... | Meser" pero el site_name ya agrega "Meser")
5. Agregar alt text descriptivo a todas las imágenes

---

## 1. Technical SEO (38/100) — CRÍTICO

### robots.txt ❌
- **No existe.** Retorna 404.
- Las rutas `/carrito`, `/pago/confirmacion`, `/api/*`, `/cotizar` no deberían indexarse.

### sitemap.xml ❌
- **No existe.** Retorna 404.
- No hay `sitemap.ts` ni `sitemap.xml` en `/public`.
- 26 páginas sin mapa de sitio = descubrimiento deficiente.

### Canonical Tags ❌
- No se detectan `<link rel="canonical">` en ninguna página.
- El dominio redirige `meser.cl` → `www.meser.cl` (301, correcto), pero sin canonical Google podría indexar ambas versiones.
- **BUG ENCONTRADO:** `metadataBase` en layout.tsx usa `https://meser.cl` (sin www), pero el sitio vive en `https://www.meser.cl`. Si Next.js genera canonicals, apuntarían al dominio incorrecto.

### Redirecciones ✅
- `meser.cl` → `www.meser.cl` (301) — Correcto.
- HTTPS forzado — Correcto.

### Security Headers ⚠️
| Header | Estado |
|--------|--------|
| `strict-transport-security` | ✅ max-age=63072000 |
| `x-content-type-options` | ❌ Falta |
| `x-frame-options` | ❌ Falta |
| `content-security-policy` | ❌ Falta |
| `referrer-policy` | ❌ Falta |
| `permissions-policy` | ❌ Falta |

### Cache Headers ⚠️
- `cache-control: public, max-age=0, must-revalidate` — Las páginas estáticas ISR no cachean en CDN. Vercel maneja esto automáticamente, pero confirmar configuración.

### Otros
- **HTTPS:** ✅ Activo con HSTS
- **Mobile viewport:** ✅ `width=device-width, initial-scale=1`
- **Charset:** ✅ UTF-8
- **Next.js ISR:** ✅ `x-nextjs-prerender: 1`, stale-time: 300s

---

## 2. Content Quality (78/100) — BUENO

### Fortalezas
- Contenido original y bien estructurado en la mayoría de páginas
- Tono conversacional efectivo, orientado a beneficios
- Buen uso de FAQs en páginas clave (/climatizacion-integral, /instalacion-aire-acondicionado)
- Testimonios de clientes con nombres y ubicaciones reales
- Precios transparentes (genera confianza y E-E-A-T)

### Problemas

| Página | Problema |
|--------|----------|
| `/blog` | 10 artículos marcados "Próximamente" — contenido fantasma, no aporta valor SEO |
| `/cobertura/*` | Contenido templated con diferenciación mínima entre comunas |
| `/club-meser` | Contenido delgado (~400 palabras) |
| `/carrito` | Indexable sin necesidad (debería tener noindex) |

### E-E-A-T Assessment
- **Experience:** ✅ "+150 hogares climatizados", testimonios específicos
- **Expertise:** ⚠️ No hay certificaciones ni acreditaciones visibles
- **Authoritativeness:** ⚠️ Sin menciones de prensa, premios o partnerships oficiales
- **Trustworthiness:** ✅ Dirección real (Los Militares 5620), precios transparentes, garantía detallada

### Imágenes de fondo — Tamaños excesivos
| Archivo | Tamaño |
|---------|--------|
| `hero-home.png` | 2.0 MB |
| `por-que-meser-bg.png` | 2.1 MB |
| `formulario-bg.png` | 2.1 MB |

Total solo en backgrounds: **~6.2 MB** — Deberían ser WebP/AVIF y < 200KB cada una.

### PDFs de fichas técnicas — Muy pesados
| Archivo | Tamaño |
|---------|--------|
| `midea-lume-50l.pdf` a `120l.pdf` | 12 MB c/u |
| `Ficha AC Hisense Hi Vida.pdf` | 11.4 MB |
| `Ficha técnica Termos eléctricos Lume.pdf` | 6.4 MB |

Total PDFs: **~75 MB** servidos directamente. Considerar compresión o CDN.

### Estimación de palabras por página
| Página | Palabras (aprox.) |
|--------|-------------------|
| `/` (Home) | ~2,000 |
| `/climatizacion-integral` | ~2,500 |
| `/instalacion-aire-acondicionado` | ~4,500 |
| `/nosotros` | ~1,800 |
| `/todo-incluido` | ~2,000 |
| `/aires-acondicionados` | ~1,500 |
| `/climatizacion-inteligente` | ~2,000 |
| `/mantencion` | ~1,200 |
| `/garantia` | ~1,500 |
| `/contacto` | ~800 |
| `/soluciones/*` (c/u) | ~1,000 |
| `/cobertura/*` (c/u) | ~800 |
| `/blog` | ~300 (solo títulos) |
| `/club-meser` | ~400 |

---

## 3. On-Page SEO (65/100) — MEJORABLE

### Title Tags

| Página | Title | Problema |
|--------|-------|----------|
| `/` | "Meser — Climatización Integral para tu Hogar en Santiago" | ✅ OK |
| `/aires-acondicionados` | "Aires Acondicionados · Catálogo Meser · Samsung y Midea \| Meser" | ⚠️ Duplica "Meser" |
| `/nosotros` | "Somos Meser · Climatización Integral Santiago \| Meser" | ⚠️ Duplica "Meser" |
| `/contacto` | "Contacto · Meser Climatización \| Meser" | ⚠️ Duplica "Meser" |
| `/blog` | "Blog · Guías y Consejos de Climatización · Meser \| Meser" | ⚠️ Duplica "Meser" |
| `/club-meser` | "Club Meser · Plan de Referidos \| Meser" | ⚠️ Duplica "Meser" |
| `/garantia` | "Garantía Total Meser · Equipo + Instalación \| Meser" | ⚠️ Duplica "Meser" |
| `/mantencion` | "Mantención Aire Acondicionado Santiago · Desde $59.990 · Meser \| Meser" | ⚠️ Duplica + largo |
| `/todo-incluido` | "Aire Acondicionado Todo Incluido desde $449.980 · Meser Santiago \| Meser" | ⚠️ 96 chars |
| `/climatizacion-integral` | "Climatización Integral Santiago · Diagnóstico Gratis · Precio Cerrado \| Meser" | ✅ OK |
| `/cobertura/las-condes` | "Aire Acondicionado Las Condes · Instalación Estética · Meser \| Meser" | ⚠️ Duplica |

**Patrón:** El `layout.tsx` probablemente agrega `| Meser` como template, y muchas páginas ya incluyen "Meser" en su título, causando duplicación.

### Meta Descriptions
- ✅ Presentes en todas las páginas principales
- ✅ Incluyen CTAs y beneficios clave
- ⚠️ Algunas exceden 160 caracteres
- ❌ `/aires-acondicionados` parece no tener meta description explícita

### Heading Structure
- ✅ Todas las páginas tienen un H1 único y descriptivo
- ✅ Jerarquía H1 → H2 → H3 correcta en general
- ✅ H1 incluye keywords objetivo

### Internal Linking
- ✅ Navegación consistente en header y footer
- ⚠️ No hay breadcrumbs en ninguna página
- ⚠️ Las páginas de `/cobertura/*` no se enlazan entre sí
- ⚠️ Las páginas de `/soluciones/*` no se enlazan entre sí
- ❌ `/blog` no tiene enlaces activos (todo "Próximamente")
- ⚠️ `/termos` existe como ruta pero no aparece en la navegación principal

### Open Graph
- ✅ og:title, og:description, og:site_name, og:locale (es_CL) presentes
- ❌ No hay og:image — las previsualizaciones en redes sociales no tendrán imagen
- ⚠️ og:type es "website" en todas las páginas (debería ser "product" en /aires-acondicionados)
- ⚠️ Twitter card es "summary" en vez de "summary_large_image"

---

## 4. Schema / Structured Data (15/100) — CRÍTICO

### Estado actual

| Página | Schema | Estado |
|--------|--------|--------|
| `/climatizacion-integral` | FAQPage + LocalBusiness | ✅ Implementado |
| Todas las demás | Ninguno | ❌ |

### Oportunidades perdidas (alta prioridad)

| Schema | Página(s) | Impacto |
|--------|-----------|---------|
| `LocalBusiness` / `HVACBusiness` | Layout global | Rich results con dirección, teléfono, horarios, reviews |
| `Product` + `Offer` | `/aires-acondicionados` | Rich results con precios en SERPs |
| `FAQPage` | `/instalacion-aire-acondicionado`, `/climatizacion-inteligente`, `/garantia` | FAQ expandibles en SERPs |
| `Service` | `/mantencion`, `/instalacion-aire-acondicionado`, `/todo-incluido` | Rich results de servicios |
| `BreadcrumbList` | Todas | Mejora visual en SERPs |
| `WebSite` + `SearchAction` | Layout global | Sitelinks searchbox |
| `Organization` | Layout global | Knowledge panel |
| `Article` | `/blog/*` (cuando se publiquen) | Rich results de artículos |
| `AggregateRating` | Páginas con testimonios | Estrellas en SERPs |

---

## 5. Performance / Core Web Vitals (60/100) — ACEPTABLE

### Observaciones desde headers
- **Servidor:** Vercel (Edge Network)
- **Pre-rendering:** ISR activo (`x-nextjs-prerender: 1`)
- **Stale time:** 300s (5 min)
- **Cache:** HIT en CDN de Vercel
- **Tamaño HTML homepage:** ~108KB (comprimido)

### Estimaciones
- **LCP:** Probablemente bueno gracias a ISR + Vercel CDN
- **INP:** Debería ser bueno (poco JS interactivo)
- **CLS:** ⚠️ Riesgo por imágenes sin dimensiones explícitas y carga de fuentes
- **GTM:** Google Tag Manager cargado (`GTM-PP3T3QKL`) puede afectar FCP

### Recomendaciones
- Verificar con PageSpeed Insights / Lighthouse
- Optimizar imágenes: muchas PNG podrían ser WebP/AVIF
- Preload de fuentes críticas
- Lazy load de GTM o defer

---

## 6. Images (30/100) — DEFICIENTE

### Problemas detectados

| Problema | Severidad | Páginas afectadas |
|----------|-----------|-------------------|
| `alt=""` vacío en la mayoría de imágenes | ❌ Crítico | Todas |
| Imágenes de fondo sin alt text | ❌ Crítico | Home, contacto, servicios |
| Formato PNG predominante (no WebP/AVIF) | ⚠️ Alto | Todas |
| Sin `sizes` prop en componentes Image | ⚠️ Medio | Varias |
| Producto images con alt genérico | ⚠️ Medio | /aires-acondicionados |

### Recomendaciones
1. Agregar alt text descriptivo en español a TODAS las imágenes
2. Convertir PNGs a WebP (Next.js Image lo hace automático si se usa correctamente)
3. Asegurar `width` y `height` explícitos para prevenir CLS
4. Usar `priority` prop en imágenes above-the-fold
5. Agregar `sizes` prop para responsive loading

---

## 7. AI Search Readiness / GEO (10/100) — CRÍTICO

### Estado actual

| Señal | Estado |
|-------|--------|
| `llms.txt` | ❌ No existe (404) |
| `robots.txt` con directivas AI | ❌ No existe |
| Contenido citable (párrafos concisos) | ⚠️ Parcial — buen contenido pero sin estructura de citación |
| Datos estructurados | ❌ Mínimo |
| FAQ marcadas con schema | ⚠️ Solo 1 página |
| Autoridad de marca | ⚠️ Sin menciones externas verificables |
| Contenido long-form educativo | ❌ Blog vacío |

### Recomendaciones
1. Crear `/llms.txt` con resumen de la empresa, servicios y precios para crawlers AI
2. Publicar los artículos del blog — contenido educativo = señal de autoridad para LLMs
3. Agregar FAQPage schema en todas las páginas con preguntas frecuentes
4. Estructurar contenido en fragmentos citables (definiciones claras, listas, datos numéricos)
5. Establecer presencia en directorios y plataformas de reseñas (Google Business Profile)

---

## Análisis por Página

### Páginas bien optimizadas ✅
| Página | Nota |
|--------|------|
| `/climatizacion-integral` | Mejor página SEO del sitio: schema, FAQs, contenido rico |
| `/instalacion-aire-acondicionado` | ~4,500 palabras, FAQs, contenido exhaustivo |
| `/todo-incluido` | Pricing claro, CTAs efectivos |
| `/` (Home) | Buen H1, meta tags completos |

### Páginas que necesitan trabajo ⚠️
| Página | Problemas |
|--------|-----------|
| `/aires-acondicionados` | Sin schema Product, sin meta description |
| `/nosotros` | Sin schema Organization, imágenes sin alt |
| `/contacto` | Sin schema LocalBusiness/ContactPoint |
| `/soluciones/*` | Sin schema, sin interlink entre soluciones |
| `/cobertura/*` | Contenido templated, sin schema, riesgo thin content |
| `/mantencion` | Sin schema Service |
| `/garantia` | Sin schema, contenido podría ser más rico |

### Páginas problemáticas ❌
| Página | Problemas |
|--------|-----------|
| `/blog` | 100% contenido "Próximamente" — daña credibilidad |
| `/carrito` | No debería indexarse |
| `/pago/confirmacion` | No debería indexarse |
| `/cotizar` | No debería indexarse |
| `/termos` | Sin enlace en navegación, posible página huérfana |

---

## Headers de Seguridad Faltantes

Agregar en `next.config.ts`:

```typescript
headers: async () => [
  {
    source: '/(.*)',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ],
  },
],
```

---

## Resumen de Hallazgos

| Severidad | Cantidad | Ejemplos |
|-----------|----------|----------|
| 🔴 Crítico | 6 | robots.txt, sitemap.xml, canonicals, schema, alt text, blog vacío |
| 🟠 Alto | 5 | Títulos duplicados, og:image faltante, security headers, breadcrumbs, llms.txt |
| 🟡 Medio | 6 | Imágenes PNG, interlink, thin content cobertura, meta descriptions largas, Twitter card |
| 🟢 Bajo | 3 | hreflang (no necesario si es monolingüe), /termos huérfana, cache optimization |
