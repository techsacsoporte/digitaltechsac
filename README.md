# DigitalTechsac

Proyecto implementado con **Next.js + TypeScript**, optimizado para despliegue en **Vercel**.

## ¿Por qué este stack?

- Integración nativa con Vercel (deploy, preview y escalado).
- Excelente rendimiento y SEO gracias a rendering híbrido.
- TypeScript para mayor mantenibilidad.
- App Router moderno y sencillo de escalar.

## Scripts

- `npm run dev`: entorno local.
- `npm run build`: build de producción.
- `npm run start`: servir build de producción.
- `npm run lint`: validación estática.
- `npm run test`: pruebas unitarias con Vitest.

## Estructura

```text
.
├── src/
│   ├── app/
│   │   ├── api/health/route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── Hero.tsx
├── tests/
│   ├── hero.test.tsx
│   └── setup.ts
├── docs/
└── package.json
```

## Checklist Vercel

1. Configurar variables de entorno en Vercel.
2. Confirmar que el comando de build sea `npm run build`.
3. Validar endpoint `/api/health` tras cada deploy.
