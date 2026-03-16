# Plan de Acción SEO — meser.cl

**Score actual:** 52/100
**Score objetivo:** 85/100
**Priorizado por impacto y esfuerzo**

---

## 🔴 CRÍTICOS — Implementar de inmediato

### 1. Crear robots.txt
**Impacto:** Alto | **Esfuerzo:** 5 min
```
Crear src/app/robots.ts que genere:
- Allow: / (para todos los bots)
- Disallow: /carrito, /cotizar, /pago/*, /api/*
- Sitemap: https://www.meser.cl/sitemap.xml
```

### 2. Crear sitemap.xml
**Impacto:** Alto | **Esfuerzo:** 15 min
```
Crear src/app/sitemap.ts que incluya las 22 páginas públicas
con lastModified, changeFrequency y priority.
Excluir: /carrito, /cotizar, /pago/confirmacion
```

### 3. Corregir metadataBase + canonical tags
**Impacto:** Alto | **Esfuerzo:** 5 min
```
BUG: metadataBase actualmente usa 'https://meser.cl' (sin www)
pero el sitio vive en 'https://www.meser.cl'.

FIX: En layout.tsx, cambiar:
  metadataBase: new URL('https://www.meser.cl')

Esto genera automáticamente canonical tags correctos en Next.js.
```

### 4. Implementar schema JSON-LD global (Organization + LocalBusiness)
**Impacto:** Alto | **Esfuerzo:** 30 min
```
Crear componente SchemaOrg.tsx con:
- Organization (nombre, logo, contacto, redes sociales)
- LocalBusiness/HVACBusiness (dirección, teléfono, horarios, área de servicio)
Insertarlo en layout.tsx
```

### 5. Schema Product en /aires-acondicionados
**Impacto:** Alto | **Esfuerzo:** 20 min
```
Agregar JSON-LD Product + Offer para cada producto:
- name, description, image, brand
- price, priceCurrency: CLP, availability
```

### 6. Corregir alt text de imágenes
**Impacto:** Alto | **Esfuerzo:** 45 min
```
Revisar TODAS las imágenes del sitio y agregar alt text descriptivo en español.
Ejemplos:
- "Aire acondicionado Midea EcoMaster instalado en living"
- "Equipo Samsung Wind-Free montado en dormitorio"
```

---

## 🟠 ALTA PRIORIDAD — Esta semana

### 7. Corregir títulos duplicados "| Meser"
**Impacto:** Medio | **Esfuerzo:** 15 min
```
Opción A: Remover "Meser" de los títulos individuales de cada página
Opción B: Remover el template "| Meser" del layout.tsx
Elegir una sola fuente para el nombre de marca en títulos.
```

### 8. Agregar og:image
**Impacto:** Medio | **Esfuerzo:** 20 min
```
Crear imagen OG por defecto (1200x630px) con logo + claim de Meser.
Configurar en layout.tsx como openGraph.images default.
Idealmente crear OG images específicas para páginas clave.
```

### 9. Agregar security headers en next.config.ts
**Impacto:** Medio | **Esfuerzo:** 10 min
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### 10. Implementar breadcrumbs con schema
**Impacto:** Medio | **Esfuerzo:** 30 min
```
Crear componente Breadcrumbs.tsx con BreadcrumbList schema.
Incluir en todas las páginas internas (no home).
```

### 11. Agregar meta description a /aires-acondicionados
**Impacto:** Medio | **Esfuerzo:** 5 min
```
Sugerencia: "Catálogo de aires acondicionados Samsung, Midea y Anwo.
Desde $319.990 solo equipo o $449.990 con instalación incluida. Envío Santiago."
```

### 12. Noindex en páginas transaccionales
**Impacto:** Medio | **Esfuerzo:** 10 min
```
Agregar robots: { index: false, follow: false } en metadata de:
- /carrito
- /cotizar
- /pago/confirmacion
```

---

## 🟡 MEDIA PRIORIDAD — Este mes

### 13. Decidir sobre /blog
**Impacto:** Alto a largo plazo | **Esfuerzo:** Variable
```
Opción A: Publicar al menos 3-5 artículos y quitar "Próximamente"
Opción B: Quitar /blog del menú hasta tener contenido real
El blog vacío daña credibilidad y desperdicia crawl budget.
```

### 14. Schema FAQPage en más páginas
**Impacto:** Medio | **Esfuerzo:** 20 min
```
Agregar FAQPage schema a:
- /instalacion-aire-acondicionado (ya tiene FAQs)
- /climatizacion-inteligente (ya tiene FAQs)
- /garantia (tiene estructura de preguntas implícita)
```

### 15. Interlink entre páginas de soluciones y cobertura
**Impacto:** Medio | **Esfuerzo:** 20 min
```
En cada /soluciones/X agregar links a otras soluciones ("También te puede interesar")
En cada /cobertura/X agregar links a otras comunas
```

### 16. Schema Service en páginas de servicios
**Impacto:** Medio | **Esfuerzo:** 20 min
```
Agregar JSON-LD Service a:
- /mantencion (serviceType, provider, areaServed, price)
- /instalacion-aire-acondicionado
- /todo-incluido
```

### 17. Crear llms.txt
**Impacto:** Bajo-Medio | **Esfuerzo:** 15 min
```
Crear public/llms.txt con:
- Resumen de la empresa
- Servicios principales con precios
- Área de cobertura
- Datos de contacto
```

### 18. Optimizar imágenes
**Impacto:** Medio | **Esfuerzo:** 30 min
```
- Asegurar uso de next/image en todos los componentes
- Agregar width/height explícitos
- Agregar sizes prop para responsive
- Usar priority en hero images
```

### 19. Twitter card → summary_large_image
**Impacto:** Bajo | **Esfuerzo:** 5 min
```
Cambiar twitter.card de "summary" a "summary_large_image" en layout.tsx
```

### 20. Resolver /termos como página huérfana
**Impacto:** Bajo | **Esfuerzo:** 5 min
```
Si /termos tiene contenido → agregarlo a la navegación
Si no tiene contenido → redirigir o eliminar
```

---

## Impacto proyectado

| Acción | Score estimado post-fix |
|--------|----------------------|
| Críticos (#1-6) | 52 → 68 (+16) |
| Alta prioridad (#7-12) | 68 → 78 (+10) |
| Media prioridad (#13-20) | 78 → 85+ (+7) |

---

## Herramientas recomendadas para monitoreo

1. **Google Search Console** — Verificar indexación, errores, rendimiento
2. **Google PageSpeed Insights** — Core Web Vitals reales
3. **Schema Markup Validator** — Validar JSON-LD
4. **Ahrefs/Screaming Frog** — Crawl técnico periódico
5. **Google Business Profile** — Presencia local (si no está configurado)
