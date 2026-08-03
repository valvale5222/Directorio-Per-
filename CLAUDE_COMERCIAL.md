# CLAUDE.md — Módulo Comercial · Directorio Ejecutivo Frioteam 2026

> **Módulo:** Venta Comercial
> **Función:** Dashboard de ventas con análisis por canal, tendencias y KPIs
> **Nivel de detalle:** El módulo más denso del directorio, con sub-tabs y drill-down

---

## 1. Propósito

El módulo Comercial es el **corazón analítico** del Directorio. Presenta el estado de ventas acumulado vs meta, desglosado por canal (Proyectos, Servicios, Contrato Anual, Mamut, Venta Directa), con comparativos históricos y proyecciones. Es el módulo más rico en datos y el que más sub-niveles tiene.

---

## 2. Estructura de Layout

```
┌──────────────────────────────────────────────────────────────┐
│  SECTION HERO (gradiente navy con grid atmosférico)          │
│  ├─ LEFT: Label + Valor principal ($2.47M) + Subtítulo      │
│  │        + Progress bar                                     │
│  └─ RIGHT: 4 Hero KPIs (avance, acumulado 2025, 2024,       │
│            brecha) con deltas verdes/rojos                   │
├──────────────────────────────────────────────────────────────┤
│  CHANNEL BOARD (cuadro comparativo por canal)                │
│  ├─ Header (título + badges de año)                          │
│  ├─ Column headers (Canal, 2024, 2025, 2026, Progreso, %)   │
│  ├─ Row: Proyectos (con barra de progreso)                   │
│  ├─ Row: Servicios                                           │
│  ├─ Row: Contrato Anual                                      │
│  ├─ Row: Mamut                                               │
│  ├─ Row: Partes & Repuestos                                  │
│  └─ Row: TOTAL (fila destacada)                              │
├──────────────────────────────────────────────────────────────┤
│  SUB-TABS (botones toggle)                                   │
│  ├─ Análisis Mensual (gráficos de tendencia)                 │
│  ├─ Distribución por Canal (donuts / barras)                 │
│  └─ Detalle por Canal (tablas expandidas)                    │
└──────────────────────────────────────────────────────────────┘
```

---

## 3. Section Hero

El hero section del módulo Comercial sigue el estándar del sistema de diseño:

### Fondo
- `linear-gradient(135deg, #061430 0%, #0c2454 55%, #061430 100%)`
- Grid atmosférico: líneas celeste/0.06 cada 50px
- Glow radial: `radial-gradient(ellipse at 20% 50%, rgba(58,171,239,.14), transparent 55%)`
- Border-radius: `var(--r)` (12px), padding: `30px 37.5px`, margin-bottom: 22.5px

### Contenido izquierdo
- **Label:** 13.75px, weight 600, blanco/.45, uppercase, letter-spacing 1.875px
- **Valor principal:** clamp(28.6px, 3.64vw, 49.4px), weight 900, blanco con "M" en celeste. Text-shadow profundo para legibilidad: `0 1px 0 rgba(255,255,255,.55), 0 2px 4px rgba(0,0,0,.45), 0 4px 16px rgba(0,0,0,.3)`
- **Meta comparativa:** 18px, opacidad .35, weight 400 (inline con el valor principal)
- **Subtítulo:** 16.25px, blanco/.4
- **Progress bar:** 6.25px alto, fondo blanco/.1, fill gradiente `90deg, #3aabef→#7dd3fc`, min-width 200px

### KPIs del hero (lado derecho)
- Layout: `display: flex; gap: 40px; flex-wrap: wrap`
- Cada KPI: text-align right
  - **Valor:** clamp(22.5px, 2.75vw, 35px), weight 800, blanco (o celeste con `.hl`)
  - **Label:** 13.75px, blanco/.38, uppercase, letter-spacing 1px
  - **Delta:** 15px. Verde `#4ade80` para positivo (↑), rojo `#f87171` para negativo (↓)

---

## 4. Channel Board (Cuadro Comparativo)

### Container
- Background: blanco, border-radius 12px, padding 28px 32px
- Box-shadow base, border 1px

### Grid de columnas
6 columnas: `190px 90px 90px 110px 1fr 105px` (gap 14px)

### Header de columnas
- Font: 11px, weight 700, `#94a3b8`, uppercase, letter-spacing 1-1.2px
- Border-bottom: 2px solid `#e2e8f0`
- La columna "2026 Acum." usa color `#185fa5` (azul oscuro) para destacar

### Fila de canal
- Padding: 13px 0, border-bottom 1px `#f1f5f9`
- **Indicador de color:** barra vertical 5×36px, border-radius 3px, color del canal
- **Nombre:** 17px, weight 800, navy, con emoji
- **Badge de meta:** 10.7px, weight 700, verde sobre `#dcfce7`, border-radius 6px
- **Valores 2024/2025:** 14px, weight 700, `#475569`. Variación en rojo/verde (9.5px)
- **Valor 2026:** 16px, weight 800, navy. Variación vs 2025 en 9.5px
- **Barra de progreso:** 10px alto, fondo `#e2e8f0`, border-radius 5px. Fill con color del canal, animada con transition 1.2s. Labels encima: 10px, `#94a3b8` (min, actual, meta)
- **% Avance:** badge, 13px, weight 800, padding 4px 10px, border-radius 14px. Colores semánticos:
  - Verde (`#d1fae5` / `#065f46`): ≥70%
  - Amarillo (`#fef9c3` / `#ca8a04`): 40-70%
  - Rojo (`#fee2e2` / `#991b1b`): <40%

### Colores por canal

| Canal | Color | Emoji |
|-------|-------|-------|
| Proyectos | `#3aabef` | 🏗 |
| Servicios | `#34d399` | 🔧 |
| Contrato Anual | `#a78bfa` | 📋 |
| Mamut | `#fb923c` | 🖥 |
| Partes & Repuestos | `#f87171` | 🛒 |

### Fila TOTAL
- Background: `#f0f4ff`
- Border-top: 2px solid `#3aabef`
- Nombre: weight 800, color `#185fa5`
- Valores: weight 900

---

## 5. Sub-tabs

### Botones de sub-tab
- Layout: `display: flex; gap: 8px; margin-bottom: 16px`
- Cada botón: padding 9px 22px, border-radius 8px, font 13px, weight 600
- Activo: background navy, border navy, color blanco
- Inactivo: background blanco, border 2px `var(--border)`, color `var(--ts)`
- Hover inactivo: border celeste, color celeste

### Sub-vistas
- `display: none` por defecto, `.active { display: block; animation: fadeUp .3s ease }`

---

## 6. KPI Cards (Power BI style)

Usados dentro de los sub-tabs para resúmenes rápidos.

### Grid: `repeat(4, 1fr); gap: 17.5px`

### Estructura del KPI Card:

```
┌─────────────────────────────────────┐
│  ACCENT LINE (3.75px top, color)    │
│                                     │
│  LABEL (12.5px, w700, #94a3b8)     │
│  VALUE (35-42px, w900, color)       │
│  CONTEXT (13.75px, #94a3b8)        │
│                                     │
│  [═══════════]  (progress bar opt.) │
│  61.68% (porcentaje opt.)           │
│                                     │
└─────────────────────────────────────┘
```

### Estilos
- Background: blanco, border-radius 15px, padding 22.5px 20px
- Border: 1px `#e8edf5`, box-shadow `0 2px 8px rgba(10,10,30,.06)`
- Accent line: absolute, top 0, left 0, right 0, 3.75px
- Label: 12.5px, weight 700, `#94a3b8`, uppercase, letter-spacing 1px, margin-bottom 10px
- Value: 35-42px, weight 900, color del acento, line-height 1
- Context: 13.75px, `#94a3b8`, margin-top 5px
- Progress bar (opcional): margin-top 12.5px, 6.25px alto, `#e2e8f0`, fill color acento

---

## 7. Gráficos (Chart Wraps)

### Container
- Background: blanco, border-radius 15px, padding 22.5px
- Border 1px `#e8edf5`, box-shadow base
- Badge "⛶ Ampliar": position absolute, top 16px, right 16px, 11px, weight 700, celeste, pill con border celeste/.30

### Header del gráfico
- Título: 16.25px, weight 800, navy
- Subtítulo: 13.75px, `#94a3b8`

### Canvas
- Altura: `var(--chart-h)` = clamp(240px, 20vw, 420px)
- Los gráficos usan Chart.js

### Leyenda
- Debajo del canvas, centrada, flex con gap 20px
- Cada item: dot de 12×3.75px + label 12.5px `#94a3b8`
- Colores de serie: 2024 = `rgba(148,163,184,.6)`, 2025 = `rgba(58,171,239,.7)`, 2026 = `#0a0a1e`

---

## 8. Tablas dentro del módulo

### Tabla resumen KPI
- Container con border-radius 15px, border 1px `#e8edf5`
- Header del container: padding 17.5px 22.5px, border-bottom, título 16.25px + subtítulo 13.75px + badge "5 Canales"
- Columnas: Indicador | Actual | Meta | Var. vs 2025 | Estado
- Headers: background `#f7f9fc`, 12.5px, weight 700, `#94a3b8`, uppercase
- Celdas: 15px, weight 700 (nombres) o 800 (valores), navy
- Status pills: padding 3.75px 12.5px, border-radius 12.5px, 13.75px, weight 700
  - ✓ Verde: `#dcfce7` / `#16a34a`
  - ⚠ Amarillo: `#fef9c3` / `#ca8a04`
  - 📊 Azul: `#eff6ff` / `#3b82f6`

### Tabla histórica (BD vs VD)
- Incrustada dentro de card
- Header navy: `#94a3b8` para labels, blanco para BD, rojo para VD, celeste para Total
- Filas alternadas con `#fafafa`
- Fila acumulado: border-top 2px celeste, background `#eff6ff`, weight 900

---

## 9. Mini-tabs (Resumen / Histórico)

Dentro de cards, para alternar entre vistas compactas:

```css
/* Botón activo */
background: #0a0a1e;
color: #fff;

/* Botón inactivo */
background: #f1f5f9;
color: #475569;
```

Font: 12px, weight 700, padding 7px 10px, border-radius 8px, border: none, flex: 1

---

## 10. Distribución por Clasificación (Soft UI Cards)

Grid de 6 columnas (`repeat(6, 1fr); gap: 14px`) con cards circulares estilo soft:

- Background: gradiente pastel (ej: `145deg, #eff6ff→#dbeafe`)
- Border-radius: 20px, border 1px pastel
- Box-shadow: `0 4px 18px rgba(color,.10)`
- Padding: 20px 16px 18px, text-align center
- Contiene: donut ring SVG + label + valor + comparativos por año

---

## 11. Reglas para Nuevos Elementos Comerciales

- Todo nuevo canal de venta sigue el patrón del Channel Board (fila con barra de progreso).
- Todo nuevo KPI sigue el formato Power BI (accent line + label + value + context).
- Los gráficos siempre dentro de chart-wrap con header y leyenda.
- Las tablas siempre con header diferenciado y hover en fila.
- Los colores de nuevos canales no deben repetir los existentes.
- Máximo 4 KPI Cards por fila, 2 gráficos por fila, 1-2 tablas por sub-vista.

---

*Documento de referencia del módulo Comercial para el Directorio Ejecutivo Frioteam.*
