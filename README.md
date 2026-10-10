# Proyecto Final QA — Grupo 4

**Curso:** 048 Aseguramiento de la Calidad del Software — Universidad Mariano Gálvez de Guatemala
**Variante asignada:** 1 — [LambdaTest E-commerce Playground](https://ecommerce-playground.lambdatest.io/)

## Integrantes
| Nombre | Carné |
|---|---|
| Brayan Josué Corado Robles | 1790-22-11094 |
| _(Nombre compañero/a)_ | _(Carné)_ |

## Descripción
Plan de aseguramiento de la calidad para una tienda en línea (OpenCart): casos de prueba manuales, suite automatizada con **Playwright + TypeScript** usando **Page Object Model** y **fixtures**, ejecución en **Chromium y Firefox** con etiquetas `@smoke` / `@regression`, y gestión de defectos con GitHub Issues.

## Instalación
```bash
git clone <url-del-repo>
cd proyecto-qa-tienda
npm install            # respeta .npmrc (ignore-scripts=true)
npx playwright install # instalación explícita de navegadores
```
> El archivo `.npmrc` con `ignore-scripts=true` bloquea scripts de post-instalación de dependencias (mitiga ataques de cadena de suministro); por eso los navegadores se instalan explícitamente.

## Ejecución
```bash
npx playwright test                       # toda la suite (Chromium + Firefox)
npx playwright test --grep "@smoke"       # solo smoke tests
npx playwright test --grep "@regression"  # solo regression tests
npx playwright test --project=firefox     # solo en Firefox
npx playwright show-report reportes/html-report  # reporte HTML
```

## Estructura del repositorio
```
proyecto-qa-tienda/
├── tests/          # smoke.spec.ts, regression-auth.spec.ts, regression-reviews.spec.ts
├── pages/          # Page Objects: Home, Login, Register, Account, Product
├── fixtures/       # fixtures reutilizables (incluye sesión iniciada)
├── helpers/        # auth.ts
├── test-data/      # usuarios de prueba (datos ficticios)
├── reportes/       # reporte HTML + analisis-tests-fragiles.md
├── evidencias/     # capturas de defectos
├── .npmrc
├── playwright.config.ts
└── tsconfig.json
```

## Defectos encontrados
| ID | Título | Severidad | Issue |
|---|---|---|---|
| DR-001 | _(pendiente)_ | | |
