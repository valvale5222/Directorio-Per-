# CLAUDE.md — Módulo Objetivos · Directorio Ejecutivo Frioteam 2026

> **Módulo:** Objetivos 2026
> **Función:** Vista de los 4 objetivos estratégicos con overview + drill-down a detalle
> **Patrón:** Grid 2×2 → Click → Detail View slide-in con sub-tabs

---

## 1. Propósito

El módulo Objetivos presenta los **4 objetivos estratégicos corporativos** del año en formato de cards interactivos con donut rings de avance. Cada card es clickable y abre un Detail View (slide-in desde la derecha) con análisis profundo del objetivo, incluyendo hero KPIs, sub-tabs, scorecards y gráficos.

Es el módulo que conecta la visión estratégica con los datos operativos.

---

## 2. Arquitectura de Navegación

```
Objetivos (tab principal)
├─ Overview (grid 2×2 de Objective Cards)
│   ├─ OBJ 01: Venta Comercial (celeste)
│   ├─ OBJ 02: Digitalización (verde)
│   ├─ OBJ 03: Garantías (rojo)
│   └─ OBJ 04: Satisfacción Cliente (ámbar/púrpura)
│
└─ Detail View (slide-in, 1 por objetivo)
    ├─ Topbar (← Volver + Título + Badge status)
    ├─ OD Hero (3-4 KPIs sobre fondo temático)
    ├─ Sub-tabs (perspectivas del objetivo)
    │   ├─ Sub-tab A (scorecard + gráficos)
    │   ├─ Sub-tab B
    │   └─ Sub-tab C
    └─ Contenido de sub-tab activa
```

---

## 3. Overview — Grid de Objective Cards

### Layout
```css
.obj-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* siempre 2 columnas */
  gap: clamp(12px, 1.2vw, 24px);
  padding: clamp(12px, 1.2vw, 28px);
  height: 100%;
  overflow-y: auto;
}
```

### Objective Card (diseño OVC — última versión)

Cada card tiene tres zonas: **header coloreado**, **body con stats**, y **footer con barra + chip**.

```
┌──────────────────────────────────────────────────┐
│  HEADER (fondo pastel del color del objetivo)     │
│                                                   │
│  Objetivo 01 (eyebrow)                           │
│  [📈] Venta Comercial (icono + título)            │
│                                                   │
│      ┌──────────┐                                │
│      │ DONUT    │  ← SVG ring 140×140px          │
│      │  61.7%   │  ← valor central, w900, 33.6px │
│      │    %     │  ← unidad, w700, 15.6px        │
│      └──────────┘                                │
│  de $4.00M · meta anual (sublabel, 12px)          │
│                                                   │
│  VER DETALLE → (link, 12px)                       │
├──────────────────────────────────────────────────┤
│  BODY (fondo blanco)                              │
│  Acumulado 2026 .............. $2.47M             │
│  Meta anual .................. $4.00M             │
│  Pendiente ................... $1.82M             │
│  vs mismo período 2025 ....... +78.65% ↑         │
├──────────────────────────────────────────────────┤
│  MINI CARDS (2 columnas, fondo pastel)            │
│  ┌──────────────┐  ┌──────────────┐              │
│  │ 🎯 Proyección│  │ 📉 Brecha    │              │
│  │ $4.00M       │  │ $1.44M       │              │
│  └──────────────┘  └──────────────┘              │
├──────────────────────────────────────────────────┤
│  PROGRESS BAR (5px, color del objetivo)           │
│  ⚠ En seguimiento · 7 meses restantes (chip)    │
└──────────────────────────────────────────────────┘
```

### Estilos del Card

**Container:**
- Background: blanco, border-radius 16px, overflow hidden
- Box-shadow: `0 2px 16px rgba(10,10,30,.06)`
- Border: `1px solid #e2e8f0`
- Cursor: pointer, transition 0.22s
- Hover: `translateY(-3px)`, box-shadow `0 8px 28px rgba(0,0,0,.1)`

**Header:**
- Background: pastel del objetivo (ej: `#e8f5fd` para celeste)
- Padding: `14px 12px 10px`
- Eyebrow: 13.2px, weight 700, color oscuro del objetivo
- Título row: flex con icono (32px, circular, fondo saturado, emoji blanco) + nombre (19.2px, weight 800)

**Donut Ring SVG:**
- Tamaño: 140×140px, viewBox "0 0 86 86"
- Track: radio 34, stroke width 8, color objetivo/.2
- Fill: radio 34, stroke width 8, color objetivo sólido, stroke-linecap round
- Animación: `stroke-dasharray` transition 1.3s `cubic-bezier(.4,0,.2,1)`
- Circunferencia total: ~214 (2π×34)
- Valor central: absolute, centered, 33.6px weight 900 + 15.6px weight 700 (unidad)

**Body:**
- Padding: `5px 12px`
- Cada row: flex, justify-content space-between, padding 5px 0
- Label: 13.2px, weight 500, `#475569`
- Value: 13.2px, weight 800, navy (o color semántico para deltas)

**Mini cards:**
- Grid 2 columnas, gap 6px, padding `0 12px`
- Cada mini: background pastel, border-radius 8px, padding 8px 10px
- Icono: emoji, label: 11px weight 600 `#475569`, valor: 14px weight 800 color oscuro

**Progress bar:**
- Track: 5px, `#f1f5f9`, border-radius 3px
- Fill: color del objetivo, width animado, transition 1.4s cubic-bezier

**Status chip:**
- Inline-flex, gap 4px, padding 3px 9px, border-radius 20px
- Font: 13.2px, weight 700
- Fondo/color: pastel/oscuro del objetivo

### Paleta por Objetivo

| Objetivo | Color acento | Fondo header | Fondo pastel | Color oscuro |
|----------|-------------|--------------|--------------|--------------|
| 01 Ventas | `#3aabef` | `#e8f5fd` | `#dbeffe` | `#185fa5` |
| 02 Digitalización | `#10b981` | `#e0f5ec` | `#d1fae5` | `#065f46` |
| 03 Garantías | `#ef4444` | `#fee2e2` | `#fecaca` | `#991b1b` |
| 04 Satisfacción | `#f59e0b` | `#fef3c7` | `#fef9c3` | `#78350f` |

---

## 4. Detail View (Slide-in)

### Animación de entrada
```css
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(28px); }
  to   { opacity: 1; transform: none; }
}

.obj-detail.active {
  display: flex;
  animation: slideInRight 0.3s ease;
}
```

### Posición
- Fixed, cubre todo el panel (top calc(topbar + tabbar), left 0, right 0, bottom 0)
- Background: `var(--bg)`, z-index 50
- Flex-direction: column

### Topbar del Detail
- Sticky, top 0, z-index 5
- Background blanco, border-bottom 1px
- Contenido: botón "← Volver" (celeste, borde celeste-hl, fondo celeste-light) + título (15px, w800) + badge de status (tag semántico)

### OD Hero (KPIs del objetivo)
- Grid responsive: `repeat(auto-fit, minmax(min(160px, 100%), 1fr))`
- Border-radius 12px, padding 24px 28px, margin-bottom 18px
- Fondo: gradiente temático por objetivo
  - OBJ1: `linear-gradient(135deg, #0a0a1e, #0e2245)`
  - OBJ2: `linear-gradient(135deg, #0d3548, #0b5c7a)`
  - OBJ3: `linear-gradient(135deg, #4a0d0d, #7c1c1c)`
  - OBJ4: `linear-gradient(135deg, #1a0a3d, #2c1068)`
- Cada celda:
  - Label: 11px, opacidad .45, uppercase, letter-spacing 1.5px
  - Valor: clamp(24px, 3.5vw, 44px), weight 900
  - Sub: 13px, opacidad .5

### Sub-tabs del Detail
- Mismo patrón que las sub-tabs estándar del sistema
- Activa: background celeste, border celeste, blanco
- Inactiva: background blanco, border 2px borde, color `--ts`

---

## 5. Contenido por Objetivo

### OBJ 01 — Venta Comercial
**Hero KPIs:** Acumulado Mayo 2026, Meta Anual, Acumulado 2025, Crecimiento vs 2025
**Sub-tabs:**
- 📊 Resumen: Scorecard (Canal | Dolarizado | Cant. | Meta | % Avance) + 2 gráficos (barras mensuales + donut por canal)
- 🛒 Venta Directa: OD Hero con KPIs VD + gráfico comparativo 2024/2025/2026
- 🏗 Servicios/Proyectos: OD Hero con 4 KPIs + gráfico comparativo BD

### OBJ 02 — Digitalización
**Hero KPIs:** Avance Global, Días promedio Mayo, Zona Crítica, Avance Tareo
**Sub-tabs:**
- 📋 Informes: Grid 2 columnas — card de días por zona (barras horizontales con meta) + card de flujo APK→Claude→Informe
- ⏱ Tareos: Grid 2 columnas — card de etapas del proceso (4 etapas con barras individuales) + card de próximos pasos

### OBJ 03 — Garantías
**Hero KPIs:** % Garantía actual, Meta, Monto total, Casos
**Sub-tabs:**
- Resumen: scorecard de garantías por zona + gráfico de evolución
- Detalle por caso

### OBJ 04 — Satisfacción Cliente
**Hero KPIs:** Score NPS, Dimensiones evaluadas, Recomendación
**Sub-tabs:**
- Dashboard: barras horizontales por dimensión + panel de recomendaciones
- Detalle: scorecard con desglose

---

## 6. Scorecard Tables (dentro de Detail Views)

### Estándar corporativo
```css
.scorecard {
  background: var(--card);
  border-radius: var(--r);
  overflow: hidden;
  box-shadow: var(--sh);
  border: 1px solid var(--border);
}
.scorecard th {
  background: var(--navy);
  color: rgba(255,255,255,.75);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .8px;
  padding: 11px 16px;
}
.scorecard td {
  padding: 11px 16px;
  font-size: 13px;
  border-bottom: 1px solid var(--border);
}
.scorecard tr:hover td {
  background: #f7faff;
}
```

### Status Badges en Scorecard
- `.s-badge.s-ok`: `#dcfce7` / `#16a34a`
- `.s-badge.s-warn`: `#fef9c3` / `#ca8a04`
- `.s-badge.s-crit`: `#fee2e2` / `#dc2626`
- `.s-pill.info`: celeste-light / celeste2

---

## 7. Barras de Progreso por Zona/Etapa

Patrón usado en Informes y Tareos:

```
┌──────────────────────────────────────────────┐
│  📍 Centro                        8 días     │
│  ─────────────────────────── (+5d vs meta)   │
│  [█████████████████████       ] 80%          │
│  0        Meta: 3d           10d             │
└──────────────────────────────────────────────┘
```

- Nombre: 13px, weight 700, navy
- Valor: 20px, weight 900, color semántico
- Tag de variación: `.tag-err` / `.tag-warn` / `.tag-ok`, 10px
- Barra: 9px alto, fondo `#e2e8f0`, border-radius 5px
- Fill: gradiente del color semántico (ej: `90deg, #dc2626→#ef4444`)
- Labels bajo barra: 9.5px, `#94a3b8`, flex space-between

---

## 8. Etapas del Proceso (Digitalización)

Cards de etapa con estado visual:

| Estado | Borde | Fondo | Color label | Color % |
|--------|-------|-------|-------------|---------|
| Completada ✓ | `#bbf7d0` | `#f0fdf4` | `#16a34a` | `#16a34a` |
| En Curso ⏳ | `#fde68a` | `#fefce8` | `#ca8a04` | `#ca8a04` |
| Pendiente | `#e2e8f0` | `#f8fafc` | `#94a3b8` | `#94a3b8` |

Cada etapa card: padding 12px 14px, border-radius 10px, flex space-between (info left + % right). Barra interna de 7px.

---

## 9. Animaciones del Módulo

### Donut rings
```javascript
// Animar stroke-dasharray del SVG circle
var C = 2 * Math.PI * 34;  // ~214
var fill = (porcentaje / 100) * C;
circle.style.strokeDasharray = fill + ' ' + (C - fill);
```
Transition: `stroke-dasharray 1.3s cubic-bezier(.4,0,.2,1)`
Se ejecuta cuando el tab Objetivos se activa y cuando se vuelve al overview.

### Progress bars
```javascript
bar.style.width = Math.min(Math.max(pct, 0), 100) + '%';
```
Transition: `width 1.4s cubic-bezier(.4,0,.2,1)`

### Detail view
Entrada: `slideInRight 0.3s ease` (opacity 0→1, translateX 28px→0)

---

## 10. Responsive

| Breakpoint | Overview grid | OD Hero grid | Scorecard |
|-----------|--------------|-------------|-----------|
| TV ≥2400px | 2 columnas, gap 32px | auto-fit | font 16px |
| Desktop | 2 columnas | auto-fit | font estándar |
| Tablet ≤900px | 2 columnas | 2 columnas forzado | ocultar col 4 |
| Mobile ≤600px | 1 columna | 2 columnas | scroll-x, min-width 480px |
| Mobile XS ≤400px | 1 columna | 1 columna | font 10px |

---

## 11. Reglas para Nuevos Objetivos

- Siempre mantener 4 objetivos (grid 2×2 se quiebra con 3 o 5).
- Cada objetivo debe tener: color acento, color oscuro, fondo pastel, gradiente de OD Hero.
- El donut ring siempre muestra el % de avance principal del objetivo.
- El body del card muestra 4 stat rows máximo.
- Los mini cards son siempre 2 (lado a lado).
- El Detail View siempre tiene: topbar + OD Hero + sub-tabs + contenido.
- Máximo 3-4 sub-tabs por objetivo.

---

*Documento de referencia del módulo Objetivos para el Directorio Ejecutivo Frioteam.*
