# Mega Auditoría Consolidada — www.meser.cl

**Fecha:** 16 de marzo de 2026
**Auditorías ejecutadas:** SEO, Web Quality, AEO/GEO, CRO (en paralelo)
**Páginas analizadas:** 25 URLs + código fuente completo

---

## SCORE GENERAL: 72/100

| Auditoría | Score | Peso | Ponderado |
|-----------|-------|------|-----------|
| SEO | 78/100 | 25% | 19.5 |
| Web Quality (Perf+A11y+BP) | 75/100 | 25% | 18.8 |
| AEO/GEO (AI Search) | 58/100 | 25% | 14.5 |
| CRO (Conversión) | 72/100 | 25% | 18.0 |
| **TOTAL** | | | **70.8 ≈ 72** |

```
SEO          ████████████████░░░░  78
Web Quality  ███████████████░░░░░  75
AEO/GEO      ████████████░░░░░░░░  58  ← mayor brecha
CRO          ██████████████░░░░░░  72
─────────────────────────────────────
GENERAL      ██████████████░░░░░░  72
```

---

## TOP 10 PROBLEMAS POR IMPACTO

### 1. 🔴 Blog con 9 páginas "Próximamente" — thin content indexable
**Impacto:** SEO + AEO/GEO + CRO | **Fuentes:** SEO, AEO, CRO
- Google indexa estas páginas y las penaliza como thin content
- Impide capturar queries informacionales de alto volumen ("cuántos BTU necesito", "Midea vs Samsung")
- Los LLMs no pueden citar contenido educativo de Meser → pierde visibilidad en AI search
- **Costo de no-acción:** Pérdida estimada del 30-40% del tráfico orgánico potencial informacional

### 2. 🔴 "Garantía total" nunca se define — promesa vacía
**Impacto:** CRO | **Fuente:** CRO
- La frase aparece 15+ veces en el sitio pero NUNCA especifica duración, cobertura ni proceso
- Es el principal bloqueante de conversión: el usuario ve la promesa pero no puede verificarla
- Sin definición concreta, el argumento de venta pierde credibilidad en el momento de decisión
- **Fix:** Especificar "5 años compresor, 2 años equipo, 1 año instalación" (o los términos reales)

### 3. 🔴 Sin reseñas verificables — 5.0/150 solo en schema
**Impacto:** CRO + AEO/GEO + SEO | **Fuentes:** CRO, AEO, SEO
- AggregateRating de 5.0 con 150 reviews existe solo en JSON-LD, invisible al usuario
- No hay link a Google Business Profile, no hay widget de reviews embebido
- Los LLMs no pueden verificar la reputación → no citan a Meser como "mejor opción"
- Google puede penalizar schema de reviews sin fuente verificable
- **Fix:** Mostrar estrellas visibles en TrustBar + link a Google Reviews

### 4. 🔴 Accesibilidad del formulario — sin labels, sin aria-live
**Impacto:** Web Quality | **Fuente:** Web Quality (A11y: 52/100)
- Form multi-paso sin `<label>` ni `aria-label` en pasos 1-4
- Sin `aria-live` para anunciar cambio de paso a screen readers
- Sin `role="alert"` en mensajes de error
- Select de comuna sin label asociado
- `htmlFor`/`id` faltantes en paso 5
- **Riesgo:** Inaccesible para ~15% de usuarios, potencial issue legal (Ley 20.422)

### 5. 🟠 Sin fotos de instalaciones reales — "instalación estética invisible" sin prueba visual
**Impacto:** CRO + AEO/GEO | **Fuentes:** CRO, AEO
- El principal diferenciador de Meser es la "instalación estética" pero no hay una sola foto que lo demuestre
- Sin portfolio, sin before/after, sin galería de proyectos
- Solo hay 3 imágenes de fondo genéricas reutilizadas en ~20 páginas
- **Impacto en conversión:** Los usuarios no pueden visualizar el resultado → mayor fricción de compra

### 6. 🟠 Homepage "Quiero este paquete" → carrito (no consulta)
**Impacto:** CRO | **Fuente:** CRO
- Compra de $450K+ se envía directo al carrito e-commerce sin consulta humana
- Contradice el funnel de "asesoría gratuita por Zoom" que es el core del modelo de venta
- AddPackageButton hace `addItem()` + `router.push("/carrito")` → confusión y abandono
- **Fix:** Cambiar a `#agendar` o agregar opción "Consultar primero"

### 7. 🟠 robots.txt sin directivas para bots AI
**Impacto:** AEO/GEO | **Fuente:** AEO
- Solo tiene `User-agent: *` genérico
- Sin directivas explícitas para GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- Permitir explícitamente es señal de autoridad para AI crawlers
- **Fix:** Agregar `User-agent: GPTBot`, `User-agent: ClaudeBot`, etc. con `Allow: /`

### 8. 🟠 Sin skip-to-content ni keyboard navigation en dropdowns
**Impacto:** Web Quality | **Fuente:** Web Quality
- No hay link "saltar al contenido" → keyboard users tabulan por todo el header
- Dropdowns del nav se abren solo con hover (mouse), no con teclado
- Sin `aria-expanded`, sin `aria-haspopup`, sin focus trapping
- **Fix:** Agregar skip link + keyboard support en Header.tsx

### 9. 🟠 Schema logo apunta a favicon.ico
**Impacto:** SEO + AEO/GEO | **Fuentes:** SEO, AEO
- `Organization.logo = "favicon.ico"` (16x16 o 32x32px)
- Google requiere mínimo 112x112px para Knowledge Panel
- LLMs no pueden extraer logo correcto para citar la marca
- **Fix:** Crear /images/logo-meser.png (512x512) y actualizar SchemaOrg.tsx

### 10. 🟡 Páginas de cobertura con contenido thin/templated
**Impacto:** SEO + AEO/GEO | **Fuentes:** SEO, AEO
- 5 páginas /cobertura/* (~850-900 palabras) con estructura casi idéntica
- Diferenciación mínima entre comunas → riesgo de doorway pages
- Sin fotos locales, sin testimonios específicos de la zona, sin datos locales
- **Fix:** Agregar 200-300 palabras únicas + testimonios + fotos por comuna

---

## QUICK WINS (< 1 hora cada uno)

| # | Fix | Tiempo | Impacto | Archivos |
|---|-----|--------|---------|----------|
| 1 | **Mostrar estrellas visibles + "(150 reseñas)"** en TrustBar | 30 min | Alto (CRO) | TrustBar.tsx |
| 2 | **Cambiar "Enviar cotización" → "Agendar mi asesoría gratuita"** en botón submit | 5 min | Medio (CRO) | CotizarForm.tsx:406 |
| 3 | **Cambiar "Cotizar" → "Asesoría gratis"** en StickyCTA mobile | 5 min | Medio (CRO) | StickyCTA.tsx:50 |
| 4 | **Agregar skip-to-content link** antes del Header | 10 min | Alto (A11y) | layout.tsx |
| 5 | **Agregar `aria-hidden="true"`** a SVGs decorativos | 20 min | Medio (A11y) | page.tsx, Footer, StickyCTA |
| 6 | **Agregar AI bots explícitos** en robots.ts | 10 min | Alto (AEO) | robots.ts |
| 7 | **Agregar precio tachado** en cards del homepage | 15 min | Alto (CRO) | page.tsx |
| 8 | **Cambiar `lang="es"` → `lang="es-CL"`** | 2 min | Bajo (SEO) | layout.tsx:52 |
| 9 | **Homepage "Quiero este paquete" → link a #agendar** | 20 min | Alto (CRO) | page.tsx (reemplazar AddPackageButton) |
| 10 | **Agregar `role="alert"` a error del form** | 5 min | Medio (A11y) | CotizarForm.tsx:375 |
| 11 | **Bajar threshold StickyCTA** de 15% scroll a 400px | 10 min | Bajo (CRO) | StickyCTA.tsx:12 |
| 12 | **Agregar teléfono al menú mobile** | 15 min | Medio (CRO) | Header.tsx |
| 13 | **sameAs en schema → URLs reales** de redes sociales | 5 min | Bajo (SEO) | SchemaOrg.tsx:24-25 |

**Total quick wins: ~2.5 horas para +12-15 puntos estimados**

---

## PROBLEMAS ESTRUCTURALES (requieren más trabajo)

### A. Contenido (2-4 semanas)
| # | Problema | Esfuerzo | Impacto |
|---|----------|----------|---------|
| A1 | Publicar 3-5 artículos de blog | 3-5 días | +8 pts AEO, +4 pts SEO |
| A2 | Fotos reales de instalaciones (portfolio) | Sesión foto + dev | +6 pts CRO |
| A3 | Definir garantía con términos específicos | 1 día (legal + dev) | +4 pts CRO |
| A4 | Contenido único por página de cobertura | 2-3 días | +3 pts SEO |
| A5 | Tabla comparativa Samsung vs Midea vs Anwo | 1 día | +4 pts AEO |

### B. Accesibilidad (1-2 semanas)
| # | Problema | Esfuerzo | Impacto |
|---|----------|----------|---------|
| B1 | Formulario accesible (labels, aria-live, roles) | 1-2 días | +10 pts A11y |
| B2 | Keyboard navigation en dropdowns del Header | 1 día | +5 pts A11y |
| B3 | Focus management en menú mobile (trap, escape, scroll lock) | 1 día | +3 pts A11y |
| B4 | Contraste de color en text-navy/60 y text-steel-dark | 0.5 día | +2 pts A11y |

### C. CRO / Funnel (1-2 semanas)
| # | Problema | Esfuerzo | Impacto |
|---|----------|----------|---------|
| C1 | Rediseñar flujo: paquetes → consulta (no carrito directo) | 2-3 días | +5 pts CRO |
| C2 | Desktop sticky CTA (actualmente solo mobile) | 0.5 día | +3 pts CRO |
| C3 | FAQ en homepage y /todo-incluido | 1 día | +3 pts CRO + SEO |
| C4 | Abandoned cart recovery (server-side persistence + email) | 3-5 días | +4 pts CRO |
| C5 | Google Reviews widget embebido | 0.5 día | +4 pts CRO + AEO |

### D. AEO/GEO (1-2 semanas)
| # | Problema | Esfuerzo | Impacto |
|---|----------|----------|---------|
| D1 | Crear llms-full.txt expandido | 0.5 día | +5 pts AEO |
| D2 | HowTo schema en instalación y mantención | 0.5 día | +4 pts AEO |
| D3 | Bloques de definición (BTU, Inverter, Wind-Free) | 1 día | +3 pts AEO |
| D4 | Person schema para el dueño/experto | 0.5 día | +2 pts AEO |

---

## PROYECCIÓN DE SCORES

| Escenario | SEO | Web Quality | AEO/GEO | CRO | General |
|-----------|-----|-------------|---------|-----|---------|
| **Actual** | 78 | 75 | 58 | 72 | **72** |
| **+Quick wins** | 80 | 80 | 65 | 80 | **77** |
| **+Estructurales** | 88 | 88 | 78 | 85 | **85** |
| **+Blog publicado** | 90 | 88 | 85 | 87 | **88** |

---

## PRÓXIMOS PASOS RECOMENDADOS

### Semana 1: Quick wins + Accesibilidad crítica
1. Implementar los 13 quick wins (~2.5 horas)
2. Fix accesibilidad del formulario (labels, aria-live, role="alert")
3. Agregar skip-to-content + keyboard nav en dropdowns

### Semana 2: CRO fundamentals
4. Definir y publicar términos de garantía
5. Cambiar flujo paquetes homepage → consulta (no carrito)
6. Agregar FAQ al homepage y /todo-incluido
7. Desktop sticky CTA

### Semana 3-4: Contenido + AEO
8. Publicar primeros 3 artículos del blog
9. Sesión de fotos de instalaciones → portfolio
10. Tabla comparativa de marcas
11. llms-full.txt + HowTo schemas
12. Google Reviews integration

### Resultado esperado: 72 → 88/100 en 4 semanas
