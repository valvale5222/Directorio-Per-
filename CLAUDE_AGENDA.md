# CLAUDE.md — Módulo Agenda · Directorio Ejecutivo Frioteam 2026

> **Módulo:** Agenda de Revisión (Landing Page)
> **Función:** Índice visual e interactivo de la sesión de directorio
> **Contexto:** Primera pantalla que ve el usuario tras el lock screen

---

## 1. Propósito

La Agenda es la **página de aterrizaje** del Directorio Ejecutivo. Funciona como un índice navegable que presenta los puntos de revisión de la sesión. No es una lista; es una experiencia visual que establece el tono de la sesión: profesional, estructurada y ejecutiva.

---

## 2. Estructura de Layout

```
┌──────────────────────────────────────────────────────────────┐
│  HERO HEADER (flex, space-between, align-items: flex-end)    │
│  ┌─────────────────────────────┐  ┌──────────────────────┐  │
│  │ LEFT                        │  │ RIGHT                │  │
│  │ · Eyebrow (dot + texto)     │  │ · Date Card (día+mes)│  │
│  │ · Título grande "Agenda     │  │ · Progress bar       │  │
│  │   de Revisión"              │  │                      │  │
│  │ · Subtítulo                 │  └──────────────────────┘  │
│  │ · Chips (meta-info)         │                            │
│  └─────────────────────────────┘                            │
├──────────────────────────────────────────────────────────────┤
│  DIVIDER (gradiente horizontal celeste → borde → transparente) │
├──────────────────────────────────────────────────────────────┤
│  SECTION LABEL ("Puntos de revisión" con líneas laterales)   │
├──────────────────────────────────────────────────────────────┤
│  GRID 3×2 (6 Agenda Cards)                                  │
│  ┌────────┐  ┌────────┐  ┌────────┐                        │
│  │ Card 01│  │ Card 02│  │ Card 03│                        │
│  └────────┘  └────────┘  └────────┘                        │
│  ┌────────┐  ┌────────┐  ┌────────┐                        │
│  │ Card 04│  │ Card 05│  │ Card 06│                        │
│  └────────┘  └────────┘  └────────┘                        │
├──────────────────────────────────────────────────────────────┤
│  FOOTER (texto corporativo + botón CTA "Iniciar Revisión")  │
└──────────────────────────────────────────────────────────────┘
```

**Wrap general:** `padding: 32px 44px 56px`, `min-height: 500px`, `flex-direction: column`

---

## 3. Componentes

### 3.1 Hero Header

**Layout:** `display: flex; align-items: flex-end; justify-content: space-between; gap: 28px; margin-bottom: 32px`

**Lado izquierdo:**
- **Eyebrow:** texto institucional ("Directorio Ejecutivo · Frioteam SAC"), 10px, weight 800, letter-spacing 3.5px, uppercase, color celeste. Incluye un dot pulsante de 6px con animación `ag-pulse` (2s infinite, scale 1→0.75→1, opacity 1→0.4→1).
- **Título:** "Agenda de _Revisión_", 54px, weight 900, color blanco, letter-spacing -2.5px. La palabra en itálica (etiqueta `<em>`) va en color celeste con un underline sutil (3px, celeste, opacidad 0.35).
- **Subtítulo:** 13px, weight 500, color `#64748b`, letter-spacing 0.2px.
- **Chips:** flex con gap 8px. Cada chip: 10px, weight 700, uppercase, letter-spacing 0.8px, padding 4px 12px, border-radius 20px. Colores: celeste sobre fondo celeste/10%, verde sobre verde/10%, gris sobre `#f1f5f9`.

**Lado derecho:**
- **Date Card:** fondo blanco, border `1px solid var(--border)`, border-radius 14px, padding 14px 20px, text-align center, min-width 90px, sombra `0 2px 12px rgba(10,10,30,.07)`. Día: 38px, weight 900, navy, letter-spacing -2px. Mes: 9px, weight 800, letter-spacing 2px, uppercase, celeste.
- **Progress row:** flex, gap 8px, font 10px, weight 700, color `#94a3b8`. Barra de 120px×4px, fondo borde, fill celeste con `transition: width 1.2s cubic-bezier(.22,1,.36,1)`.

### 3.2 Divider

```css
.ag-divider {
  height: 1px;
  background: linear-gradient(90deg, var(--celeste) 0%, var(--border) 40%, transparent 100%);
  margin-bottom: 28px;
  opacity: 0.6;
}
```

### 3.3 Section Label

```css
.ag-section-label {
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.ag-section-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}
```

### 3.4 Agenda Card

**Grid:** `grid-template-columns: repeat(3, 1fr); gap: 16px`

**Estructura del card:**

```
┌─────────────────────────────────────┐
│  ACCENT BAR (4px, color acento)     │  ← crece a 6px en hover
├─────────────────────────────────────┤
│                                     │
│  TAG (emoji + categoría)    [01]    │  ← número watermark
│  TÍTULO (25px, w900)                │
│  Descripción (11.5px, #64748b)      │
│                                     │
│  ┌─────────────────────────────┐    │
│  │ pill  │ pill  │ pill        │    │  ← Pills informativos
│  └─────────────────────────────┘    │
│                                     │
│  ─────────────────────────────────  │
│  PASO 01/06        [Ver →]         │  ← Footer (botón aparece en hover)
└─────────────────────────────────────┘
```

**Estilos del card:**
- Background: `#fff`, border `1px solid var(--border)`, border-radius 16px
- Box-shadow: `0 2px 8px rgba(10,10,30,.05)`
- Cursor: pointer, transition 0.22s
- Hover: `box-shadow: 0 10px 32px rgba(10,10,30,.12)`, `transform: translateY(-3px)`, `border-color: var(--ag-acc)`

**Accent bar (top):** 4px de alto, 100% de ancho, color `var(--ag-acc)`. En hover crece a 6px.

**Número watermark:** posición absolute, `bottom: 10px; right: 14px`, font 68px, weight 900, color `rgba(10,10,30,.04)`, pointer-events none. En hover: color sube a `.07`, translateY de 4px→0.

**Tag:** inline-flex, 9px, weight 800, letter-spacing 1.5px, uppercase, color acento, fondo `color-mix(in srgb, var(--ag-acc) 10%, transparent)`, padding 3px 8px, border-radius 6px.

**Título:** 25px, weight 900, navy, letter-spacing -0.8px, line-height 1.1. En hover: cambia a color acento.

**Descripción:** 11.5px, color `#64748b`, line-height 1.55, `flex: 1` (empuja el footer abajo).

**Pills:** flex-wrap, gap 5px, margin-top 12px. Cada pill: 11px, weight 800, navy, fondo gradiente `135deg, #e8f4fd→#d0eaf8`, border `1px solid #3aabef55`, padding 4px 11px, border-radius 20px.

**Footer:** flex, space-between, margin-top 14px, padding-top 12px, border-top 1px. Step counter: 9px, weight 800, color `#cbd5e1`, uppercase. Botón: `opacity: 0; transform: translateX(8px)` → en hover del card: `opacity: 1; transform: translateX(0)`. Background color acento, blanco, border-radius 8px, font 11px, weight 800.

### 3.5 Colores por Card

| Card | Nombre | Color acento (`--ag-acc`) |
|------|--------|---------------------------|
| 01 | Portada | `#60a5fa` |
| 02 | Venta Comercial | `#3aabef` |
| 03 | Objetivos 2026 | `#22c55e` |
| 04 | KPI de Mayo | `#f59e0b` |
| 05 | Balanced Scorecard | `#a78bfa` |
| 06 | Financiero | `#34d399` |

### 3.6 Footer

- Layout: flex, space-between, align-items center
- Margin-top 24px, padding-top 20px, border-top 1px
- Texto: 11px, `#94a3b8`, weight 500
- Botón CTA: inline-flex, gap 10px, background navy, color blanco, border-radius 10px, font 13px, weight 800, padding 12px 28px. Box-shadow `0 4px 16px rgba(10,10,30,.18)`. Hover: background `#1a3060`, sombra más fuerte, `translateY(-1px)`. Flecha: 22×22px, background celeste, border-radius 6px.

---

## 4. Animaciones

Todos los elementos entran con animación escalonada:

```css
@keyframes agFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.ag-anim {
  opacity: 0;
  animation: agFadeUp 0.5s cubic-bezier(.22,1,.36,1) forwards;
}
```

**Delays escalonados:**
- Hero: `0.04s`
- Divider: `0.08s`
- Section label: `0.10s`
- Cards: `0.14s`, `0.20s`, `0.26s`, `0.32s`, `0.38s`, `0.44s`
- Footer: `0.52s`

---

## 5. Fondo Personalizable

El panel de Agenda soporta una **foto de fondo** personalizable:
- La foto se aplica como `background-image` del panel
- Se superpone un overlay oscuro: `rgba(5,13,31,0.72)`
- Botón flotante "📷 Cambiar foto" en esquina inferior derecha (fixed, bottom 24px, right 24px)
- El botón usa `backdrop-filter: blur(8px)`, fondo `rgba(255,255,255,.15)`, borde blanco con opacidad

---

## 6. Reglas para Nuevos Items de Agenda

- Máximo recomendado: **6-8 cards** (grid 3×2 o 3×3)
- Cada card debe tener un color acento único
- El número watermark debe ser secuencial
- El tag debe incluir un emoji descriptivo + categoría corta
- Los pills deben ser datos clave resumidos (máximo 3-4 pills)
- El botón footer debe navegar al tab correspondiente con `showTab('nombre')`

---

*Documento de referencia del módulo Agenda para el Directorio Ejecutivo Frioteam.*
