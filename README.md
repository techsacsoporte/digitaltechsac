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

