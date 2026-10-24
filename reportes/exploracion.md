# Sesión de pruebas exploratorias — Grupo 4

| Campo | Valor |
|---|---|
| ID de sesión | EXP-01 |
| Estado | **No realizada** — la aplicación bajo prueba no está disponible |
| Fecha planificada | 22 y 23 de octubre de 2026 |
| Duración planificada | 30 minutos (15 min cuentas y validaciones · 15 min navegación y reseñas) |
| Participantes | Wayner Alberto López y López · José Daniel Bran Benito |
| Navegador / SO | Google Chrome · macOS / Windows 11 |
| Aplicación | https://ecommerce-playground.lambdatest.io/ |

## Qué ocurrió
- La sesión se planificó para buscar comportamientos no cubiertos por los 20 casos formales y completar el mínimo de defectos.
- Desde el **22 de octubre de 2026 a las 22:49 horas**, la tienda dejó de estar disponible para todos los usuarios, según la verificación realizada en el servicio *Down for Everyone or Just Me*.
- El **23 de octubre de 2026** se volvió a intentar: el sitio se queda cargando sin mostrar contenido.
- La interrupción es ajena al equipo; la infraestructura del servidor está fuera del alcance del proyecto.

Evidencia: `evidencias/incidentes/`.

## Hallazgos registrados antes de la caída
Durante la ejecución manual del 16/10/2026 se observaron dos comportamientos incorrectos, documentados como defectos:

| # | Origen | Qué pasó | DR / Issue |
|---|---|---|---|
| 1 | TC-N01 | "Desktops and Monitors" abre la página "Monitors" y "Phone, Tablets & Ipod" abre "Tablets" | DR-001 / [#7](https://github.com/waynergt/proyecto-final-qa/issues/7) |
| 2 | TC-N02 | La imagen principal del producto iMac muestra una cámara Samsung | DR-002 / [#8](https://github.com/waynergt/proyecto-final-qa/issues/8) |

Si la tienda vuelve a estar disponible antes de la revisión, la sesión se realizará y sus hallazgos se agregarán en este archivo.
