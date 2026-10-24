# Proyecto Final QA — Grupo 4

**Curso:** 048 Aseguramiento de la Calidad del Software — Universidad Mariano Gálvez de Guatemala
**Variante asignada:** 1 — [LambdaTest E-commerce Playground](https://ecommerce-playground.lambdatest.io/)

## Integrantes
| Nombre | Carné |
|---|---|
| Wayner Alberto López y López | 1790-14-11226 |
| José Daniel Bran Benito | 1790-22-15044 |

## Descripción
Plan de aseguramiento de la calidad para una tienda en línea (OpenCart): casos de prueba manuales, suite automatizada con **Playwright + TypeScript** usando **Page Object Model** y **fixtures**, ejecución en **Chromium y Firefox** con etiquetas `@smoke` / `@regression`, y gestión de defectos con GitHub Issues.

## Instalación
```bash
git clone https://github.com/waynergt/proyecto-final-qa.git
cd proyecto-final-qa
npm install            # respeta .npmrc (ignore-scripts=true)
npx playwright install # instalación explícita de navegadores
```
> El archivo `.npmrc` con `ignore-scripts=true` bloquea scripts de post-instalación de dependencias (mitiga ataques de cadena de suministro); por eso los navegadores se instalan explícitamente.

## Preparación de la cuenta de prueba
1. Registrar una cuenta con datos ficticios en https://ecommerce-playground.lambdatest.io/index.php?route=account/register
2. Colocar su correo y contraseña en `test-data/users.ts` (`validUser`), o definir las variables de entorno `QA_EMAIL` y `QA_PASSWORD`.
3. Los tests que modifican la cuenta (registro, perfil, contraseña) crean su propia cuenta nueva con el fixture `freshUser`.

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
proyecto-final-qa/
├── tests/          # smoke.spec.ts, regression-auth.spec.ts, regression-reviews.spec.ts
├── pages/          # Page Objects: Home, Login, Register, Account, Product
├── fixtures/       # fixtures reutilizables (sesión iniciada y cuenta nueva)
├── helpers/        # auth.ts
├── test-data/      # usuarios de prueba (datos ficticios) y tabla de login negativo
├── reportes/       # reporte HTML, analisis-tests-fragiles.md, exploracion.md
├── evidencias/     # manuales/ (por integrante), automatizacion/, defectos/, videos/, incidentes/
├── .npmrc
├── playwright.config.ts
└── tsconfig.json
```

## Defectos encontrados
| ID | Título | Severidad | Issue |
|---|---|---|---|
| DR-001 | Dos opciones del menú "Shop by Category" abren una página con un título distinto al de la opción elegida | Baja (P3) | [#7](https://github.com/waynergt/proyecto-final-qa/issues/7) |
| DR-002 | La imagen principal del producto "iMac" muestra una cámara Samsung | Media (P2) | [#8](https://github.com/waynergt/proyecto-final-qa/issues/8) |

> Los dos defectos se encontraron durante la ejecución manual (TC-N01 y TC-N02); sus evidencias están en `evidencias/defectos/`. La sesión exploratoria prevista para encontrar defectos adicionales no pudo realizarse porque la tienda no está disponible desde el 22/10/2026, 22:49 horas (ver `evidencias/incidentes/` y `reportes/exploracion.md`).
