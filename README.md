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
# digitaltechsac

Estructura base organizada para iniciar el proyecto con buenas prácticas desde el día 1.

## Objetivo

Este repositorio ahora incluye una base mínima para:

- Documentar decisiones y estándares.
- Separar código fuente, pruebas y documentación.
- Mantener consistencia de formato entre editores.

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
├── README.md
├── .gitignore
├── .editorconfig
├── docs/
│   ├── PROJECT_STRUCTURE.md
│   └── WORKFLOW.md
├── src/
│   └── .gitkeep
└── tests/
    └── .gitkeep
```

## Siguientes pasos recomendados

1. Elegir stack principal (por ejemplo: Node, Python, Go, etc.).
2. Agregar configuración del stack (`package.json`, `pyproject.toml`, `go.mod`, etc.).
3. Implementar una primera funcionalidad en `src/`.
4. Crear pruebas en `tests/` y automatizarlas en CI.

