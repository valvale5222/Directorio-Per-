# Handoff — Dashboard Comercial FrioPacking
> Documento generado el 18 junio 2026 para continuar el trabajo en una nueva sesión.

---

## Cómo retomar esta sesión

Abre Claude Code en la carpeta `Directorio J` y usa el skill:

```
/adversarial-reviewer
```

Cuando Claude pregunte qué revisar, indica:
> "Continuar aplicando los fixes pendientes del archivo `Dashboard Comercial FrioPacking.html`. Ver sección PENDIENTE de este documento."

---

## Archivos relevantes

| Archivo | Descripción |
|---|---|
| `Dashboard Comercial FrioPacking.html` | **El entregable principal — ya con fixes parciales aplicados** |
| `PROYECTO_CONTEXTO.md` | Contexto completo del proyecto (datos, diseño, alcance) |
| `HANDOFF_BUGS_Y_PENDIENTES.md` | Este archivo |

---

## Bugs encontrados (revisión adversarial /adversarial-reviewer)

### 🔴 CRÍTICOS

#### BUG-01 — Charts en secciones ocultas → pestañas parecen rotas *(causa principal del reporte)*
- **Dónde:** `<script>` línea ~570, función `go(s)`
- **Qué pasa:** `new Chart(chVentas,...)` se ejecuta cuando `#ventas` tiene `display:none`. Chart.js crea un canvas de 0×0px. Al navegar a la pestaña, los gráficos quedan en blanco o vacíos.
- **Fix aplicado:** ✅ Se añadió `setTimeout(()=>window.dispatchEvent(new Event('resize')),50)` al final de la función `go()`.

#### BUG-02 — Script se rompe si Chart.js no carga (CDN caído / sin internet)
- **Dónde:** `<script>` línea ~570 — `Chart.defaults.font.family = ...`
- **Qué pasa:** Si el CDN de Cloudflare no responde, `Chart` es `undefined`. El `TypeError` detiene toda la ejecución del script. Los bloques IIFE que construyen el funnel del Pipeline, las tablas de Clientes y el grid de Objetivos **nunca se ejecutan** → secciones vacías, botones que no hacen nada.
- **Fix pendiente:** ⬜ Envolver todo el bloque de Chart.js en `if(typeof Chart!=='undefined'){...}`. Ver sección PENDIENTE más abajo.

#### BUG-03 — Signo minus rompe el parseo JavaScript (SyntaxError)
- **Dónde:** Función `openTipo()` — datos de filas `'−1.3'` y `'−0.2'`
- **Qué pasa:** El carácter `−` (U+2212, MINUS SIGN) estaba doblemente codificado como `âˆ'` donde el `'` final era un cierre de string prematuro. Resultado: `SyntaxError` que impedía que **todo el script** funcionara.
- **Fix aplicado:** ✅ Reemplazado con el carácter correcto `−` (U+2212).

#### BUG-04 — CSS roto en `.chm .on` (heatmap de clientes)
- **Dónde:** `<style>` línea ~136
- **Código roto:** `.chm .on{background:var(--brand);color:#063}font-weight:600;...`
- **Qué pasa:** La llave `}` cierra la regla prematuramente. Las propiedades `font-weight`, `border-radius`, `padding`, `text-align` y `color` quedaban fuera de la regla y eran ignoradas por el browser.
- **Fix aplicado:** ✅ Regla corregida a `.chm .on{background:var(--brand);font-weight:600;border-radius:4px;padding:4px 0;text-align:center;color:#04342C}`

---

### 🟡 WARNINGS

#### BUG-05 — Canvas referenciados como variables globales (patrón frágil)
- **Dónde:** `<script>` líneas ~574–611 — `new Chart(chVentas,...)`, `new Chart(coverRing,...)`
- **Qué pasa:** El código confía en que el browser exponga los IDs del DOM como variables globales de `window`. Falla en modo `type="module"`, algunos headless browsers y entornos con strict globals.
- **Fix pendiente:** ⬜ Cambiar a `document.getElementById('chVentas')` explícito en todos los 7 canvas. Ver sección PENDIENTE.

#### BUG-06 — Encoding mojibake en todo el documento (texto en español ilegible)
- **Qué pasa:** Texto con doble codificación UTF-8→Latin1→UTF-8. Ejemplos: `Â·` en lugar de `·`, `Ã³` en lugar de `ó`, `AÃ±o` en lugar de `Año`.
- **Impacto:** Títulos, pestañas, encabezados y datos en JavaScript mostraban caracteres basura.
- **Fix aplicado:** ✅ Corregidos todos los patrones mojibake: `·`, `é`, `ó`, `ñ`, `á`, `í`, `ú`, `—`, `–`, `−`, `×`, `Δ`, `₂`, `●`, `CLÁSICO`.

#### BUG-07 — D3.js y TopoJSON cargados sin usar (+500KB innecesarios)
- **Dónde:** `<head>` líneas ~11–12
- **Fix aplicado:** ✅ Scripts eliminados. No se usa `d3.` ni `topojson.` en ningún lado del código actual.

---

### 🔵 NOTES

#### BUG-08 — Pestaña "Margen" prometida pero ausente
- **Dónde:** Barra de tabs (header) y `PROYECTO_CONTEXTO.md` sección de navegación
- **Qué pasa:** El contexto del proyecto marca Margen como pestaña #4 con estado `✅ DISEÑADA`. Sin embargo no existe `<div class="tab" data-s="margen">` ni `<section id="margen">` en el HTML. La tarjeta de agenda #02 llama `go('ventas')` en lugar de `go('margen')`.
- **Estado:** ⬜ Feature pendiente de implementar.

#### BUG-09 — Doble clic requerido no es intuitivo en móviles/touch
- **Dónde:** Cards de ventas, KPI de clientes, etapas del pipeline, cards de objetivos.
- **Qué pasa:** Todos usan `ondblclick`. En tablets o pantallas touch durante presentaciones, el doble tap es poco confiable. El usuario puede percibir que "el botón no responde".

---

## Estado actual de fixes

| # | Bug | Estado |
|---|---|---|
| BUG-01 | Charts en secciones ocultas | ✅ APLICADO |
| BUG-02 | CDN defensivo para Chart.js | ⬜ PENDIENTE |
| BUG-03 | SyntaxError por minus sign | ✅ APLICADO |
| BUG-04 | CSS `.chm .on` roto | ✅ APLICADO |
| BUG-05 | Canvas como variables globales | ⬜ PENDIENTE |
| BUG-06 | Encoding mojibake | ✅ APLICADO |
| BUG-07 | D3/TopoJSON innecesarios | ✅ APLICADO |
| BUG-08 | Pestaña Margen ausente | ⬜ FEATURE PENDIENTE |
| BUG-09 | Doble clic en touch | ⬜ PENDIENTE (opcional) |

---

## Fixes PENDIENTES — instrucciones exactas para Claude

### PENDIENTE-A: Chart.js defensivo + getElementById

Reemplazar en el `<script>` el bloque que empieza con:
```
/* ---------- CHART DEFAULTS ---------- */
Chart.defaults.font.family=...
```

Por:
```javascript
/* ---------- CHART DEFAULTS ---------- */
if(typeof Chart!=='undefined'){
Chart.defaults.font.family="'Inter',sans-serif";Chart.defaults.font.size=10;Chart.defaults.color='#7b8db0';
const lineOpts={...};  // mantener el contenido existente

new Chart(document.getElementById('chVentas'),{...});   // cambiar todas las refs
new Chart(document.getElementById('chMargen'),{...});
new Chart(document.getElementById('chRefri'),{...});
new Chart(document.getElementById('chTipo'),{...});
new Chart(document.getElementById('chSector'),{...});
new Chart(document.getElementById('chPrio'),{...});
new Chart(document.getElementById('coverRing'),{...});
}
// ← Los IIFEs de heatmap, clientes, pipeline y objetivos quedan FUERA del if
```

IDs de canvas a cambiar (7 en total):
- `chVentas` → `document.getElementById('chVentas')`
- `chMargen` → `document.getElementById('chMargen')`
- `chRefri` → `document.getElementById('chRefri')`
- `chTipo` → `document.getElementById('chTipo')`
- `chSector` → `document.getElementById('chSector')`
- `chPrio` → `document.getElementById('chPrio')`
- `coverRing` → `document.getElementById('coverRing')`

> **Nota:** `document.getElementById('objr'+i)` en el IIFE de objetivos YA está correcto, no tocar.

---

### PENDIENTE-B: Implementar pestaña y sección Margen

1. Añadir tab en el `<div class="tabs" id="tabs">`:
   ```html
   <div class="tab" data-s="margen">Margen</div>
   ```
   Posición: entre el tab de Ventas y el de Pipeline.

2. Añadir sección entre `#ventas` y `#pipeline`:
   ```html
   <section class="section" id="margen">
     <!-- contenido según PROYECTO_CONTEXTO.md sección Margen -->
   </section>
   ```

3. Corregir tarjeta de agenda #02 (línea ~300):
   ```html
   <!-- Cambiar go('ventas') por go('margen') -->
   <div class="ag-card" onclick="go('margen')">
   ```

---

## Notas de contexto importantes (del PROYECTO_CONTEXTO.md)

- **Margen oficial:** 15.06% (fuente PPT) — el dashboard muestra 15.67% (verificar dato correcto)
- **Color alerta:** coral cálido `#D85A30` — **NO rojo**, pedido explícito del usuario
- **Stack:** HTML/CSS/JS puro, sin frameworks. Todo en un solo archivo.
- **Deadline:** 30 junio 2026 (objetivo SMART 2026 de la empresa)
- **Audiencia:** Directorio interno de FrioPacking — presentación en vivo

---

*Documento generado por revisión con `/adversarial-reviewer` en sesión del 18 junio 2026.*
