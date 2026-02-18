# Estructura del proyecto

## Carpeta `src/app/`
Contiene rutas, layout global, estilos y endpoints API de Next.js App Router.

## Carpeta `src/components/`
Contiene componentes reutilizables de interfaz.

## Carpeta `tests/`
Contiene pruebas unitarias de componentes y setup de testing.

## Carpeta `docs/`
Documentación técnica y de trabajo del equipo.

### Reglas

- Todo componente nuevo debe tener responsabilidad clara y nombre explícito.
- Toda funcionalidad crítica debe incluir pruebas.
- Endpoints de estado (`health`) deben mantenerse simples y estables.
## Carpeta `src/`
Contiene el código fuente principal de la aplicación.

## Carpeta `tests/`
Contiene pruebas unitarias, de integración o end-to-end.

## Carpeta `docs/`
Contiene documentación funcional y técnica.

### Reglas sugeridas

- Evitar mezclar scripts temporales en `src/`.
- Documentar decisiones importantes en `docs/`.
- Agregar una prueba por cada funcionalidad relevante nueva.
