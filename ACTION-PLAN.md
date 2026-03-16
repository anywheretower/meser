# Plan de Acción SEO — meser.cl

**Score actual:** 78/100 (era 52 el 15 de marzo)
**Score objetivo:** 88/100
**Fecha:** 16 de marzo de 2026

---

## 🔴 CRÍTICO — Implementar de inmediato

### 1. Resolver blog con contenido "Próximamente"
**Impacto:** Alto | **Esfuerzo:** Variable
**Problema:** 9 artículos indexables sin contenido real = thin content.
```
Opción A (recomendada): Publicar al menos 3 artículos completos y marcar
         el resto con noindex hasta que estén listos.
Opción B: Agregar noindex a todas las páginas de blog sin contenido.
Opción C: Quitar /blog de la navegación y sitemap hasta tener contenido.

Artículos sugeridos para publicar primero (mayor volumen de búsqueda):
1. "¿Cuánto cuesta instalar un aire acondicionado en Chile? (2026)"
2. "Midea vs Samsung: ¿Qué aire acondicionado elegir?"
3. "¿Qué son los BTU y cuántos necesito?"
```

---

## 🟠 ALTA PRIORIDAD — Esta semana

### 2. Meta description única para /aires-acondicionados
**Impacto:** Alto | **Esfuerzo:** 5 min
**Problema:** Reutiliza la description del homepage.
```
Sugerencia: "Catálogo de aires acondicionados Samsung, Midea y Anwo.
Desde $299.990 solo equipo o $449.990 con instalación incluida en Santiago."
```

### 3. Acortar títulos > 60 chars (4 páginas)
**Impacto:** Medio | **Esfuerzo:** 10 min
```
/climatizacion-integral (89 chars):
  Antes: "Climatización Integral Santiago · Diagnóstico Gratis · Precio Cerrado | Meser"
  Mejor: "Climatización Integral Santiago · Todo Incluido | Meser" (55 chars)

/todo-incluido (82 chars):
  Antes: "Aire Acondicionado Todo Incluido desde $449.980 · Santiago | Meser"
  Mejor: "Aire Acondicionado Todo Incluido · Santiago | Meser" (51 chars)

/instalacion-aire-acondicionado (83 chars):
  Antes: "Instalación Aire Acondicionado Santiago · Estética · Garantía Total | Meser"
  Mejor: "Instalación Aire Acondicionado Santiago | Meser" (48 chars)

/cobertura/las-condes (73 chars):
  Antes: "Aire Acondicionado Las Condes · Instalación Estética | Meser"
  Mejor: "Aire Acondicionado en Las Condes | Meser" (40 chars)
```

### 4. Corregir logo en Organization schema
**Impacto:** Medio | **Esfuerzo:** 10 min
**Problema:** Organization.logo apunta a favicon.ico. Google espera una imagen real.
```
Crear /images/logo-meser.png (mínimo 112x112px, recomendado 512x512)
Actualizar SchemaOrg.tsx: logo → "https://www.meser.cl/images/logo-meser.png"
```

### 5. Diversificar alt text de background
**Impacto:** Medio | **Esfuerzo:** 20 min
**Problema:** ~20 páginas comparten "Living de hogar en Santiago con climatización integral instalada"
```
Cada página debería tener alt text contextual al tema:
- /mantencion: "Técnico realizando mantención de aire acondicionado en Santiago"
- /soluciones/departamento: "Departamento en Santiago con aire acondicionado discreto"
- /cobertura/las-condes: "Instalación de aire acondicionado en Las Condes"
```

---

## 🟡 MEDIA PRIORIDAD — Este mes

### 6. Agregar HSTS header
**Impacto:** Medio | **Esfuerzo:** 5 min
```typescript
// next.config.ts → headers
{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }
```

### 7. FAQPage schema en más páginas
**Impacto:** Medio | **Esfuerzo:** 20 min
```
Agregar FAQPage JSON-LD a:
- /mantencion (crear sección FAQ con 3-5 preguntas)
- /termos (crear sección FAQ sobre capacidades y consumo)
- /soluciones/* (FAQ específica por tipo de espacio)
```

### 8. AggregateRating schema
**Impacto:** Medio | **Esfuerzo:** 15 min
**Oportunidad:** Testimonios existen en el homepage pero sin schema.
```json
{
  "@type": "AggregateRating",
  "ratingValue": "5.0",
  "reviewCount": "150",
  "bestRating": "5"
}
```
Agregar dentro del HVACBusiness schema en SchemaOrg.tsx.

### 9. Expandir contenido /termos
**Impacto:** Medio | **Esfuerzo:** 30 min
```
Agregar:
- Guía de capacidad (50L vs 80L vs 100L vs 120L por personas/uso)
- FAQ (consumo eléctrico, instalación, mantención)
- Comparativa con calefón a gas
- Schema FAQPage
```

### 10. Canonical tags explícitos
**Impacto:** Bajo-Medio | **Esfuerzo:** 15 min
```typescript
// En cada page.tsx, agregar alternates.canonical:
export const metadata: Metadata = {
  alternates: {
    canonical: '/ruta-de-la-pagina',
  },
}
```

### 11. lastModified real en sitemap
**Impacto:** Bajo | **Esfuerzo:** 15 min
```
Cambiar new Date() por fechas reales de última edición.
Opción: crear un objeto con fechas manuales o leer de git.
```

### 12. Cache-Control headers para assets
**Impacto:** Bajo | **Esfuerzo:** 10 min
```typescript
// next.config.ts
{
  source: '/images/:path*',
  headers: [
    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
  ]
}
```

---

## 🟢 BAJO — Backlog

### 13. Content-Security-Policy header
### 14. Imágenes únicas por página solución/cobertura
### 15. Prefetch selectivo para páginas de alta conversión
### 16. Evaluar CSS animations vs Framer Motion (reducir bundle)
### 17. llms-full.txt con contenido más detallado

---

## Impacto Proyectado

| Acciones | Score Estimado |
|----------|---------------|
| Actual | 78/100 |
| Crítico (#1) | 78 → 82 |
| Alta prioridad (#2-5) | 82 → 86 |
| Media prioridad (#6-12) | 86 → 90+ |

---

## Resumen Visual del Progreso

```
Auditoría 15 marzo:  ████████████░░░░░░░░  52/100
Auditoría 16 marzo:  ████████████████░░░░  78/100
Objetivo:            ██████████████████░░  90/100
```

### Lo que se logró en 24 horas (+26 pts):
- robots.txt + sitemap.xml (de 0 a completos)
- 6 schemas nuevos (Organization, HVACBusiness, Product, FAQ, Service, Breadcrumb)
- Imágenes WebP (-97% peso)
- OG image, breadcrumbs, llms.txt, interlinks
- Security headers, noindex transaccionales, alt text

### Lo que falta para 90+:
- Contenido real en blog (el mayor bloqueante)
- Meta descriptions únicas
- Títulos optimizados en largo
- AggregateRating schema
- HSTS + más FAQs
