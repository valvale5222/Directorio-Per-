# CLAUDE.md — Módulo Portada (Resumen) · Directorio Ejecutivo Frioteam 2026

> **Módulo:** Portada / Resumen Ejecutivo
> **Función:** Keynote inmersivo con KPIs de los 4 objetivos estratégicos
> **Estilo:** Dark theme, pantalla completa tipo presentación de alto impacto

---

## 1. Propósito

La Portada es el **momento keynote** del Directorio. Es una pantalla inmersiva de pantalla completa sobre fondo oscuro que presenta los 4 objetivos estratégicos del período en formato de KPI cards flotantes. Debe generar impacto visual inmediato y transmitir control sobre la información.

---

## 2. Estructura de Layout

```
┌──────────────────────────────────────────────────────────────┐
│  BACKGROUND LAYER                                            │
│  ├─ Grid atmosférico (líneas celeste cada 60px, opac .06)   │
│  ├─ Glow principal (700px, radial, celeste .15, centrado)    │
│  ├─ Glow secundario (350px, top-right, celeste .2)          │
│  └─ Photo background (opcional, con transición .6s)          │
├──────────────────────────────────────────────────────────────┤
│  CONTENT (centrado, z-index 2, scale 1.20)                   │
│                                                              │
│     TÍTULO: "Directorio Ejecutivo" (display, w900)           │
│     "Ejecutivo" en celeste                                   │
│                                                              │
│     SUBTÍTULO: período + empresa (13px, blanco .5)           │
│                                                              │
│     ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                 │
│     │OBJ 01│  │OBJ 02│  │OBJ 03│  │OBJ 04│                 │
│     │$2.47M│  │ 70%  │  │0.73% │  │86.7% │                 │
│     │Ventas│  │Digit.│  │Garant│  │Satisf│                 │
│     │status│  │status│  │status│  │status│                 │
│     └──────┘  └──────┘  └──────┘  └──────┘                 │
│                                                              │
│     [Iniciar Revisión →]  [📷 Cargar Foto]                  │
│                                                              │
│     Mayo 2026 · Frioteam S.A.C.                              │
└──────────────────────────────────────────────────────────────┘
```

---

## 3. Fondo y Atmósfera

El fondo de la portada es `--navy` (#0a0a1e) con capas decorativas:

### Grid atmosférico
```css
.portada-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(58,171,239,.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(58,171,239,.06) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

### Glows
- **Principal:** 700×700px, centrado, `radial-gradient(circle, rgba(58,171,239,.15) 0%, transparent 70%)`
- **Secundario:** 350×350px, top 20% / right 10%, `radial-gradient(circle, rgba(58,171,239,.2) 0%, transparent 70%)`

### Foto de fondo (opcional)
- Capa con `position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0; transition: opacity .6s`
- Se activa al cargar una foto via input hidden, con `opacity` animada a 1

---

## 4. Contenido Central

**Posición:** centrado vertical y horizontal, `transform: scale(1.20)` (para TV/pantallas grandes), `text-align: center`

### Título
- Font-size: `clamp(28px, 3.8vw, 56px)`, weight 900, blanco, line-height 1.05, letter-spacing -1.5px
- La palabra clave ("Ejecutivo") va en `color: #3aabef`
- margin-bottom: 8px

### Subtítulo
- Font-size: `clamp(11px, 1.1vw, 15px)`, weight 400, `rgba(255,255,255,.5)`, letter-spacing 0.5px
- margin-bottom: 28px

### Grid de KPI Cards
- `display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px`
- max-width: 760px, margin-bottom: 30px

---

## 5. Portada KPI Card

### Estructura

```
┌─────────────────────────────────────┐
│  OBJ 01 (label numeral)            │  10.5px, w800, letter-spacing 1.2px
│                                     │  color: var(--pk-acc) al 60%
│  $2.47M (valor principal)           │  23px, w900, color: var(--pk-acc)
│                                     │
│  Venta Comercial (descriptor)       │  9.8px, rgba(255,255,255,.45)
│                                     │  uppercase, letter-spacing 0.8px
│  61.68% · $4.00M (status)          │  9.2px, w700, pill con border-radius 8px
└─────────────────────────────────────┘
```

### Estilos

```css
.portada-kpi {
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 11px;
  padding: 14px 18px 12px;
  text-align: center;
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: transform .15s, box-shadow .15s, border-color .15s;
}

.portada-kpi:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,.3);
  border-color: var(--pk-acc, rgba(58,171,239,.5));
}
```

### Variantes por Objetivo

| Objetivo | `--pk-acc` | Status pill color |
|----------|-----------|-------------------|
| OBJ 01 Ventas | `#3aabef` | celeste sobre celeste/.15 |
| OBJ 02 Digitalización | `#10b981` | verde sobre verde/.15 |
| OBJ 03 Garantías | `#f59e0b` | rojo sobre rojo/.15 (alerta) |
| OBJ 04 Satisfacción | `#22c55e` | verde sobre verde/.15 |

### Interacción
Cada KPI Card es clickable y navega al objetivo correspondiente: `showTab('objetivos'); setTimeout(()=>showObjDetail(N), 120)`

---

## 6. Botones de Acción

### Botón Primario ("Iniciar Revisión →")
```css
.btn-primary {
  background: var(--celeste);        /* #3aabef */
  color: #fff;
  border: none;
  padding: 11px 30px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: .3px;
}
.btn-primary:hover {
  background: var(--celeste2);       /* #1a8fd1 */
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(58,171,239,.4);
}
```

### Botón Ghost ("📷 Cargar Foto")
```css
.btn-ghost {
  background: transparent;
  color: rgba(255,255,255,.6);
  border: 1px solid rgba(255,255,255,.2);
  padding: 11px 22px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
}
.btn-ghost:hover {
  border-color: rgba(255,255,255,.45);
  color: #fff;
}
```

**Layout botones:** `display: flex; gap: 12px; align-items: center` (centrado)

---

## 7. Fecha Corporativa

Debajo de los botones: `margin-top: 22px; font-size: 10px; color: rgba(255,255,255,.25); letter-spacing: 1px`

---

## 8. Responsive

| Breakpoint | Título | KPI grid |
|-----------|--------|----------|
| TV ≥1800px | 90px | 4 columnas, gap expandido |
| Desktop | clamp(28px,3.8vw,56px) | 4 columnas |
| Mobile ≤600px | clamp(28px,8vw,52px) | 2 columnas o stack |
| Mobile XS ≤400px | Similar mobile | 1-2 columnas |

---

## 9. Reglas para Mantenimiento

- Los 4 KPI Cards siempre deben reflejar los 4 objetivos estratégicos vigentes.
- Los valores se actualizan manualmente al corte del período.
- El status pill debe usar colores semánticos: verde (cumplida), celeste (en seguimiento), amarillo (riesgo), rojo (fuera de meta).
- La foto de fondo es opcional y no altera la legibilidad del contenido (el overlay oscuro lo garantiza).
- Nunca más de 4 KPI Cards en portada (mantener el formato 4×1).

---

*Documento de referencia del módulo Portada para el Directorio Ejecutivo Frioteam.*
