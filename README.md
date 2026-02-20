# Digital TechSac — Landing Canva Pro EDU (Next.js + Vercel)

## 🚀 Deploy en Vercel

```bash
# Opción 1: CLI
npm i -g vercel
cd digital-techsac
npm install
vercel

# Opción 2: GitHub → Vercel
# 1. Sube a GitHub
# 2. vercel.com → Add New Project → Import repo → Deploy
```

## 📁 Estructura

```
├── app/
│   ├── globals.css            # Tailwind + utilidades
│   ├── layout.tsx             # Layout raíz + 7 JSON-LD schemas
│   ├── page.tsx               # Composición de secciones
│   ├── not-found.tsx          # 404 personalizado
│   ├── sitemap.ts             # /sitemap.xml dinámico
│   └── robots.ts              # /robots.txt dinámico
├── components/
│   ├── CountdownBar.tsx       # Timer urgencia (client)
│   ├── Header.tsx             # Logo + nav con tu imagen
│   ├── HeroSection.tsx        # H1 + pricing + CTA
│   ├── TrustBar.tsx           # 4 garantías
│   ├── FeaturesSection.tsx    # 6 funciones Canva Pro
│   ├── ComparisonSection.tsx  # ★ NUEVO: tabla Gratis vs Pro
│   ├── HowItWorksSection.tsx  # ★ NUEVO: 4 pasos del proceso
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx         # 7 preguntas (acordeón)
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx     # CTA reutilizable
│   ├── WhatsAppFloating.tsx
│   ├── Analytics.tsx          # Metricool
│   └── icons/WhatsAppIcon.tsx
├── lib/
│   ├── constants.ts           # ★ Config central (cambiar TODO aquí)
│   └── structured-data.ts     # 7 schemas JSON-LD
└── public/images/logo.png     # Tu logo DT
```

## ✅ SEO Ultra-Optimizado

### Metadata
- Next.js Metadata API completa (title, description, OG, Twitter Cards)
- Canonical URL + hreflang es-CO
- Keywords ampliadas (15 long-tail: nequi, daviplata, bancolombia, etc.)
- Geo meta tags (CO, Colombia)
- revisit-after, rating, distribution

### 7 Schemas JSON-LD
1. **Product** — Rich result de producto con precio, reviews, shipping
2. **Organization** — Knowledge panel con contacto 24/7
3. **FAQPage** — Rich snippets de preguntas en Google
4. **BreadcrumbList** — Navegación
5. **WebSite** — Sitelinks
6. **WebPage** — Info de página
7. **LocalBusiness** — Búsquedas locales Colombia

### Contenido SEO
- H1 con keyword principal natural
- Tabla comparativa Gratis vs Pro (contenido indexable rico)
- 7 FAQs detalladas (más contenido = más keywords)
- Sección "Cómo comprar" (responde búsquedas informacionales)
- Microdata en reviews y pricing card
- Alt texts descriptivos en todas las imágenes

### Técnico
- `next/image` con AVIF/WebP automático
- Preconnect + dns-prefetch a Unsplash
- Security headers (HSTS, CSP, X-Frame)
- `poweredByHeader: false`
- Font swap + preload
- Sitemap y robots.txt dinámicos
- 404 personalizado con contenido relevante

## 🖼️ Imágenes

Las imágenes se cargan de **Unsplash** (gratuitas, sin copyright).
Para cambiar la imagen hero, edita `IMAGES.hero` en `lib/constants.ts`.

Tu logo (`public/images/logo.png`) es el único archivo local necesario.

## ⚙️ Configurar

Todo se cambia en **un solo archivo**: `lib/constants.ts`
- WhatsApp número y mensaje
- Precios
- Imágenes URLs
- Testimonios
- FAQs
- Redes sociales
- Metadata del sitio
