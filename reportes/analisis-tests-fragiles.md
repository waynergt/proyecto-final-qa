# Análisis de tests frágiles (inestables) — Grupo 4

**Responsable:** Wayner Alberto López y López · **Fecha:** 16 de octubre de 2026
**Ambiente:** https://ecommerce-playground.lambdatest.io · Playwright con Chromium y Firefox · macOS
**Evidencia:** `evidencias/automatizacion/` (traces, videos, `error-context.md` y salidas de terminal en `logs/`)

---

## 1. Test afectado

| Campo | Detalle |
|---|---|
| Test | `reseña sin calificación es rechazada @regression` |
| Archivo | `tests/regression-reviews.spec.ts` (navegación en `pages/ProductPage.ts` → `gotoById`) |
| Navegador | Chromium (en la misma corrida pasó en Firefox) |
| Configuración | `timeout: 30000`, `retries: 1` |

## 2. Cómo se manifestaba la falla intermitente

En la corrida del 16/10/2026, el test **falló en el primer intento y pasó en el reintento**, sin ningún cambio en el código ni en la aplicación. Playwright lo reportó como **`1 flaky`**.

```
Error: page.goto: net::ERR_TIMED_OUT at .../index.php?route=product/product&product_id=40
  - navigating to "...product_id=40", waiting until "load"
Test timeout of 30000ms exceeded.
```

Evidencia: `evidencias/automatizacion/test-inestable-2026-10-16/` (trace.zip, video.webm, error-context.md) y `logs/00-fallo-original-flaky.txt`.

## 3. Diagnóstico de la causa raíz

**Espera inadecuada en la navegación.** `page.goto()` espera por defecto el evento **`load`**, que solo ocurre cuando la página descargó **todos** sus recursos: imágenes, scripts, banners y widgets de terceros. La página de producto de la tienda es pesada. Si uno de esos recursos tarda o queda colgado, la navegación completa supera el límite de 30 s, aunque el formulario de reseñas ya esté listo para usarse. El test dependía de algo que no necesitaba: la carga total de la página.

Por qué no se trataba de un defecto de la aplicación: la página sí carga, el mismo test pasó en el reintento y en Firefox, y el formulario funciona.

## 4. Correcciones aplicadas y verificación (proceso iterativo)

Cada corrección se verificó con `--repeat-each=10 --retries=0`. Sin reintentos, un test solo cuenta como aprobado si pasa **al primer intento**.

### Corrección 1 — Navegación a producto
`ProductPage.gotoById` navega con `waitUntil: 'domcontentloaded'` y luego espera explícitamente el elemento que el test usa (el título `h1`).

**Verificación 1** (`regression-reviews.spec.ts`, 100 ejecuciones, 5 workers): **97/100**.
- Los 3 tests de página de producto pasaron **60/60**: la corrección resolvió el caso original.
- Fallaron 3 de 40 en *perfil* y *contraseña*, también por tiempo agotado. Uno de ellos fue `page.goto ... route=account/edit, waiting until "load"`: **la misma causa raíz en otras páginas** (`AccountPage`). Además, esos tests duraban de 15 a 27 s, muy cerca del límite de 30 s.
- Evidencia: `evidencias/automatizacion/verificacion-1-2026-10-16/`, `logs/01-verificacion-1-reviews-97de100.txt`.

### Corrección 2 — Mismo patrón en toda la navegación
- `LoginPage`, `RegisterPage` y `AccountPage`: `domcontentloaded` más espera explícita del campo que el test va a usar.
- `waitForURL` en `helpers/auth.ts` y en el fixture `freshUser`, que por defecto también espera `load`, pasó a `domcontentloaded`.
- Bloque *Perfil y contraseña*: timeout de 60 s, justificado por su duración medida (registran una cuenta y recorren de 4 a 6 páginas). **No se aumentaron los reintentos.**

**Verificación 2a** (suite completa, 320 ejecuciones): **descartada por causa externa.** Las primeras 166 ejecuciones pasaron. Desde la 167, 143 fallos fueron `NS_ERROR_UNKNOWN_HOST` en Firefox: el equipo perdió la resolución DNS o la conexión a internet. No se usa como medida de estabilidad (`logs/02a-suite-completa-caida-de-red.txt`).

**Verificación 2b** (`regression-reviews.spec.ts`, 100 ejecuciones): **99/100**. El único fallo tuvo **otra causa**: en el cambio de contraseña, después de pulsar *Continue* el sitio **redirige** a *My Account* y muestra ahí el aviso de éxito. El test buscaba el aviso con la espera por defecto de 5 s, y esa vez la redirección tardó más (`evidencias/automatizacion/verificacion-2-2026-10-16/`, `logs/02b-verificacion-2-reviews-99de100.txt`).

### Corrección 3 — Esperar la redirección y no saturar el sitio
- `AccountPage.changePassword` y `updateTelephone` esperan la redirección (`waitForURL(/route=account\/account/)`) antes de verificar el aviso.
- `playwright.config.ts`: `workers: 2`. La tienda es un entorno compartido por todos los grupos, y el enunciado pide no saturarla. Con 5 workers en paralelo se aumentaba la latencia.

## 5. Confirmación final

| Corrida (`--retries=0`) | Ejecuciones | Resultado |
|---|---|---|
| `regression-reviews.spec.ts --repeat-each=10` | 100 | **100 passed** (4.4 min) |
| `smoke.spec.ts` + `regression-auth.spec.ts --repeat-each=3` | 66 | **66 passed** (1.7 min) |
| **Total** | **166 consecutivas** | **166/166 sin fallos ni reintentos** |

Evidencia: `logs/03-verificacion-final-*.txt` y capturas `logs/03-captura-final-*.png`.

## 6. Lecciones aprendidas

1. **Esperar lo que el test usa, no toda la página.** `domcontentloaded` más una espera explícita del elemento es más rápido y más estable que `load`.
2. **Corregir la causa, no el síntoma.** Subir timeouts o reintentos solo habría ocultado el problema; los reintentos se desactivaron para verificar.
3. **Una verificación puede revelar el mismo patrón en otro lugar.** La verificación 1 mostró que la causa raíz estaba también en `AccountPage`.
4. **Distinguir fallas del test de fallas del entorno.** La caída de red (`NS_ERROR_UNKNOWN_HOST`) se identificó y se descartó con evidencia, sin mezclarla con el análisis.
5. **Respetar el entorno compartido.** Reducir la concurrencia mejora la estabilidad y cumple las consideraciones éticas del proyecto.
