# CLAUDE.md — Directorio Ejecutivo Frioteam · Guía Maestra de Diseño

> **Proyecto:** Directorio Ejecutivo 2026 · Frioteam SAC
> **Tipo:** Dashboard ejecutivo de alta dirección
> **Versión de referencia:** Mayo 2026 — VF
> **Última actualización:** Junio 2026

---

## 1. Filosofía de Producto

### 1.1 Identidad

El Directorio Ejecutivo es una plataforma de inteligencia corporativa diseñada para sesiones de directorio presenciales o en pantallas grandes (TV 85"), con capacidad de adaptarse hasta dispositivos móviles. No es un software operativo de uso diario — es un instrumento de gobierno corporativo que se despliega periódicamente para revisar el estado de la empresa.

### 1.2 Posicionamiento

La plataforma ocupa un espacio entre el dashboard operativo y la presentación ejecutiva. Se comporta como una **presentación interactiva** con profundidad de datos bajo demanda. El usuario no opera; explora, evalúa y decide.

### 1.3 Sensación

La plataforma transmite:

- **Control total:** toda la información de la empresa en una sola interfaz.
- **Sofisticación silenciosa:** estética dark premium en puntos de impacto (portada, heros, topbar), contrastando con fondos claros para la lectura de datos.
- **Densidad informativa sin agobio:** máxima información por pantalla, organizada en capas progresivas.
- **Movimiento sutil:** animaciones de entrada (fadeUp, slideInRight), transiciones en barras de progreso y donuts que dan vida a los datos sin distraer.

### 1.4 Qué la hace premium

- Pantalla de bloqueo con autenticación y animación de acceso.
- Portada inmersiva tipo keynote con KPIs flotantes sobre fondo oscuro.
- Tipografía Inter con pesos extremos (300 a 900) que crean jerarquía visual dramática.
- Barra superior (topbar) navy oscuro con indicador "live" pulsante.
- Panel header con gradientes radiales y grid sutil que simula un control room.
- Micro-interacciones en hover: elevación, cambio de color, aparición de CTAs.

---

## 2. Sistema Visual

### 2.1 Paleta de Colores

#### Colores base

| Token | Valor | Uso |
|-------|-------|-----|
| `--navy` | `#0a0a1e` | Topbar, fondos hero, fondos de tabla header, texto principal |
| `--bg` | `#f0f4f9` | Fondo general de la aplicación |
| `--card` | `#ffffff` | Fondo de cards, tablas, componentes |
| `--border` | `#e2e8f4` | Bordes de cards y separadores |

#### Color primario (acento)

| Token | Valor | Uso |
|-------|-------|-----|
| `--celeste` | `#3aabef` | Acento principal, enlaces, barras activas, indicadores, tab activa |
| `--celeste2` | `#1a8fd1` | Hover del acento primario |
| `--celeste-light` | `rgba(58,171,239,.12)` | Fondos de badges informativos, hover suaves |

#### Texto

| Token | Valor | Uso |
|-------|-------|-----|
| `--t` | `#0a0a1e` | Texto principal / títulos |
| `--tm` | `#3d4a6a` | Texto cuerpo medio |
| `--ts` | `#7b8db0` | Texto secundario / labels / placeholders |
| Gris auxiliar | `#94a3b8` | Labels uppercase, metadata, section labels |
| Gris sutil | `#64748b` | Descripciones, subtextos |

#### Estados semánticos

| Estado | Color | Fondo | Uso |
|--------|-------|-------|-----|
| Éxito | `#16a34a` | `#dcfce7` | Meta cumplida, en ritmo, positivo |
| Advertencia | `#d97706` | `#fef3c7` | Seguimiento, riesgo medio, en curso |
| Error/Crítico | `#dc2626` | `#fee2e2` | Meta incumplida, peligro, alerta |
| Informativo | `#3aabef` / `#1a8fd1` | `rgba(58,171,239,.12)` | Análisis, info neutral |

#### Colores por objetivo/módulo

| Módulo | Color | Uso |
|--------|-------|-----|
| Objetivo 1 — Ventas | `#3aabef` | Cards, barras, donuts del OBJ1 |
| Objetivo 2 — Digitalización | `#10b981` / `#22c55e` | Cards, barras, donuts del OBJ2 |
| Objetivo 3 — Garantías | `#ef4444` / `#dc2626` | Cards, barras, donuts del OBJ3 |
| Objetivo 4 — Satisfacción | `#f59e0b` / `#a78bfa` | Cards, barras, donuts del OBJ4 |

#### Gradientes institucionales

- **Hero sections:** `linear-gradient(135deg, #061430 0%, #0c2454 55%, #061430 100%)`
- **Panel header:** `linear-gradient(90deg, #061430 0%, #0c2454 55%, #061430 100%)`
- **Portada glow:** `radial-gradient(circle, rgba(58,171,239,.15) 0%, transparent 70%)`
- **Grid atmosférico:** líneas de `rgba(58,171,239,.06)` cada 50-60px sobre fondos oscuros.

### 2.2 Tipografía

**Familia:** Inter (Google Fonts)

| Nivel | Tamaño | Peso | Uso |
|-------|--------|------|-----|
| Display | clamp(28px, 3.8vw, 56px) | 900 | Título de portada |
| Hero Title | clamp(22px, 2.8vw, 38px) | 900 | Títulos de secciones hero |
| Hero KPI Value | clamp(22.5px, 2.75vw, 35px) | 800 | Valores numéricos en hero |
| Card Big Number | 35-42px | 900 | KPI card valor principal |
| Section Title | 16-17.5px | 700-800 | Títulos de cards y secciones |
| Card Title (uppercase) | 11-12.5px | 600-700 | Labels de cards, headers de tabla |
| Body | 13-15px | 400-600 | Texto de contenido, celdas de tabla |
| Caption/Meta | 10-11px | 500-700 | Subtextos, badges, fechas, status |
| Micro | 9-10px | 700-800 | Section labels, pill numbers, metadata extremo |

**Reglas tipográficas:**

- Letter-spacing en uppercase labels: 0.8px a 3px según jerarquía.
- Todo texto de categoría/label va en `text-transform: uppercase`.
- Los números grandes usan `font-weight: 900` sin excepción.
- Los subtextos bajo números grandes siempre en peso 400-500 y color `--ts` o menor opacidad.

### 2.3 Escala de Tamaños Fluida

El sistema usa `clamp()` para escalar entre mobile y TV 85".

| Token | Rango | Uso |
|-------|-------|-----|
| `--fs-xs` | clamp(9px, 0.65vw, 13px) | Micro-labels, badges |
| `--fs-sm` | clamp(10px, 0.75vw, 14px) | Captions, metadata |
| `--fs-base` | clamp(11px, 0.85vw, 16px) | Texto base |
| `--fs-md` | clamp(13px, 1.0vw, 18px) | Texto medio |
| `--fs-lg` | clamp(15px, 1.2vw, 22px) | Títulos de card |
| `--fs-xl` | clamp(18px, 1.6vw, 28px) | Subtítulos hero |
| `--fs-2xl` | clamp(22px, 2.2vw, 40px) | Valores KPI |
| `--fs-3xl` | clamp(28px, 3.5vw, 64px) | Display title |

### 2.4 Espaciado

| Token | Rango | Uso |
|-------|-------|-----|
| `--space-xs` | clamp(6px, 0.5vw, 12px) | Gaps internos mínimos |
| `--space-sm` | clamp(10px, 0.8vw, 18px) | Padding interno de badges |
| `--space-md` | clamp(14px, 1.1vw, 24px) | Gaps entre componentes, padding de cards |
| `--space-lg` | clamp(18px, 1.5vw, 32px) | Padding de secciones |
| `--space-xl` | clamp(24px, 2.0vw, 48px) | Separación entre bloques mayores |

**Regla general:** el contenido scrolleable usa `padding: 22px 26px` en desktop. Los cards usan `padding: 20px`. Los hero sections usan `padding: 30px 37.5px`.

### 2.5 Bordes y Radios

| Elemento | Radio | Borde |
|----------|-------|-------|
| Cards estándar | 12px (`--r`) | 1px solid `--border` |
| Cards especiales (obj, agenda) | 16-18px | 1px solid `--border` o borde de color |
| Badges/Pills | 20px (full round) | Ninguno o 1px con color semántico |
| Botones | 8-10px | 2px solid `--border` (inactivos) |
| Barras de progreso | 3-6px | — |
| Inputs | 10px | 1.5px solid con color acento |

### 2.6 Sombras y Elevaciones

| Nivel | Valor | Uso |
|-------|-------|-----|
| Base | `0 2px 12px rgba(10,10,30,.08)` | Cards, componentes en reposo |
| Elevada | `0 8px 32px rgba(10,10,30,.14)` | Hero sections, portada KPIs |
| Hover | `0 10px 36px rgba(10,10,30,.13)` | Cards al hacer hover |
| Focus/Modal | `0 8px 40px rgba(0,0,0,.5)` | Modales, lock screen |

**Regla:** los componentes se elevan en hover con `transform: translateY(-3px)` + sombra elevada. Transición: `0.2s ease`.

---

## 3. KPI Cards

### 3.1 Estructura Estándar

Una KPI Card sigue esta jerarquía vertical:

1. **Acento superior:** línea de color de 3-4px en el borde top (identifica categoría).
2. **Label:** texto uppercase, peso 600-700, color `--ts` o `#94a3b8`, letter-spacing 1px, tamaño 11-12.5px.
3. **Valor principal:** número grande (35-42px), peso 900, color del acento o `--navy`.
4. **Contexto:** texto secundario (13-14px, color `#94a3b8`) — describe la referencia o meta.
5. **Barra de progreso (opcional):** altura 6px, fondo `#e2e8f0`, fill con color acento.
6. **Indicador/Delta (opcional):** porcentaje o variación con color semántico.

### 3.2 Variaciones

| Variación | Cuándo se usa |
|-----------|---------------|
| Con barra de progreso | Cuando hay un avance vs meta cuantificable |
| Con delta verde/rojo | Cuando se compara vs período anterior |
| Solo número grande | Para proyecciones o totales sin meta explícita |
| Con texto status | Para KPIs que necesitan interpretación cualitativa |

### 3.3 Layouts de KPI Cards

- **Grid 4 columnas:** para resumen ejecutivo (4 KPIs principales en fila).
- **Grid 3 columnas:** para alertas tricolor (ok/warn/err).
- **Grid 2 columnas:** para comparación lado a lado.
- **Inline dentro de hero:** para KPIs acumulativos del período.

### 3.4 Reglas

- El valor principal siempre es el elemento con mayor peso visual del card.
- El color del valor debe corresponder al color de la línea superior de acento.
- Si hay barra de progreso, el porcentaje debe estar debajo, alineado al fill.
- Las KPI Cards de portada (sobre fondo oscuro) usan fondo `rgba(255,255,255,.06)` con `backdrop-filter: blur(6px)` y borde `rgba(255,255,255,.1)`.
- Formato monetario: `$X.XXM` para millones, `$XXXK` para miles. Sin centavos.
- Máximo 4 KPI Cards por fila en desktop. 2 en tablet. 1-2 en mobile.

---

## 4. Gráficos

### 4.1 Tipos Utilizados y Cuándo Usarlos

| Tipo | Cuándo | Problema que resuelve |
|------|--------|----------------------|
| Barras agrupadas (vertical) | Comparar períodos (2024 vs 2025 vs 2026) mes a mes | Tendencia y comparación temporal |
| Barras horizontales con donut central | Mix/distribución de canal o categoría | Composición porcentual con contexto |
| Donut / Ring gauge | Avance vs meta por objetivo | Progreso individual con número central |
| Barras de progreso lineales | Avance de etapas, zonas, procesos | Progreso lineal simple |
| Heatmap grid | Días pendientes por zona | Detección rápida de zonas problemáticas |
| Tabla con sparkline implícita (barras inline) | Rankings de canal por ventas | Comparación ordenada con proporción visual |

### 4.2 Reglas para Nuevos Gráficos

- **Contenedor:** siempre dentro de `.chart-wrap` — fondo blanco, border-radius 12px, padding 25px, sombra base, borde sutil.
- **Header del gráfico:** título (16-17px, peso 700-800), subtítulo (13-14px, color `--ts`), alineados a la izquierda. Badge o filtro a la derecha.
- **Altura del canvas:** `var(--chart-h)` = clamp(240px, 20vw, 420px). Nunca menor a 220px.
- **Leyenda:** debajo del gráfico, centrada, usando puntos de color (10x10px, border-radius 2px) + label de 11-12px en `--ts`.
- **Colores de serie:** usar la paleta institucional. Serie principal: `#0a0a1e`. Serie comparativa: `#3aabef` opacidad 0.7. Serie antigua: `#94a3b8` opacidad 0.6.
- **Click to expand:** los gráficos pueden tener un badge "⛶ Ampliar" arriba a la derecha que abre un modal con el gráfico en pantalla completa.
- **No usar:** gráficos 3D, pie charts con más de 6 segmentos, gráficos de radar, gráficos sin contexto de referencia (siempre incluir meta o período anterior).

---

## 5. Tablas

### 5.1 Estándar Corporativo — Scorecard Table

- **Container:** `.scorecard` — fondo blanco, border-radius 12px, overflow hidden, sombra base, borde sutil.
- **Header (th):** fondo `--navy`, texto blanco con opacidad .75, uppercase, letter-spacing .8px, peso 600, tamaño 11px, padding 11px 16px.
- **Celdas (td):** padding 11px 16px, tamaño 13px, border-bottom 1px solid `--border`.
- **Hover:** fondo `#f7faff` en toda la fila.
- **Última fila:** sin border-bottom.
- **Fila totalizadora:** fondo `#f7faff`, peso 700, separada con border-top 2px solid `#3aabef`.

### 5.2 Status Badges en Tablas

| Clase | Fondo | Texto | Cuándo |
|-------|-------|-------|--------|
| `.s-badge.s-ok` | `#dcfce7` | `#16a34a` | Meta cumplida, en ritmo |
| `.s-badge.s-warn` | `#fef9c3` | `#ca8a04` | Seguimiento, riesgo medio |
| `.s-badge.s-crit` | `#fee2e2` | `#dc2626` | Fuera de meta, crítico |
| `.s-pill.info` | `rgba(58,171,239,.12)` | `#1a8fd1` | Informativo, neutro |

**Forma:** border-radius 6px para badges rectangulares, 20px para pills redondeados. Padding 3px 10px. Peso 600-800. Tamaño 11-12px.

### 5.3 Tablas Embedded (dentro de cards)

- Sin container propio; heredan el card como fondo.
- Headers más ligeros: fondo `#f7f9fc` en vez de navy, texto `#94a3b8`.
- Bordes más sutiles: `#f1f5f9`.
- Usadas para desgloses históricos (ej: tabla mes a mes de BD vs VD).

### 5.4 Reglas

- Las tablas siempre tienen header con fondo diferenciado.
- Alineación numérica: siempre a la derecha.
- Alineación de texto: a la izquierda.
- Alineación de badges: centrada.
- En mobile: scroll horizontal con `-webkit-overflow-scrolling: touch`, min-width 480px.
- En tablet: se puede ocultar la columna menos relevante (ej: "VS 2025").
- Nunca más de 6-7 columnas visibles en desktop.

---

## 6. Navegación

### 6.1 Arquitectura de Navegación

```
Lock Screen
  └─ Topbar (fijo, navy)
      └─ Tabbar (fijo, blanco, tabs principales)
          ├─ Agenda (landing page / índice)
          ├─ Portada (keynote inmersivo)
          ├─ Comercial
          │   └─ Sub-tabs: Resumen / BD Detalle / VD Detalle
          │       └─ Sub-vistas con botones toggle
          ├─ KPI
          │   └─ Sub-tabs: Dash Comercial / Venta Directa / Servicios & BD
          ├─ Objetivos
          │   ├─ Overview (grid 2x2 de objective cards)
          │   └─ Detail View (slide-in desde derecha)
          │       └─ Sub-tabs por perspectiva
          ├─ BSC (Balanced Scorecard)
          │   └─ Sub-tabs por perspectiva
          ├─ Plan de Acción
          │   └─ Cards de plan → Modal con detalle
          ├─ Organigrama
          │   └─ Sub-bar con vistas (equipo, directivos, etc.)
          └─ Contable
              └─ Sub-tabs financieros
```

### 6.2 Componentes de Navegación

#### Topbar
- Fijo en `top: 0`. Altura: 60px (desktop), escala hasta 44px en mobile XS.
- Fondo: `--navy`. Borde inferior: `1px solid rgba(58,171,239,.2)`.
- Contenido: logo a la izquierda, metadata a la derecha (badge, fecha, indicador live).
- El indicador "live" es un punto verde de 7px con animación `pulse-dot`.

#### Tabbar
- Fijo debajo del topbar. Altura: 46px. Fondo blanco.
- Tabs: distribución flex con peso igual (`flex: 1`).
- Tab activa: texto `--navy`, border-bottom 3px solid `--celeste`.
- Tab inactiva: texto `--ts`, border-bottom 3px transparente.
- Hover: texto `--celeste`, fondo `rgba(58,171,239,.04)`.
- Cada tab tiene icono emoji + texto. En tablet se ocultan los iconos. En mobile: scroll horizontal.

#### Panel Header
- Aparece dentro de ciertos paneles (Comercial, KPI). Altura: 52px.
- Fondo: gradiente oscuro con grid atmosférico y glow radial.
- Contenido: título del panel en uppercase celeste + fecha a la derecha.

#### Sub-tabs (sv-btn / od-stab)
- Botones rectangulares, border-radius 8px, borde 2px.
- Activo: fondo `--navy`, borde `--navy`, texto blanco.
- Inactivo: fondo blanco, borde `--border`, texto `--ts`.
- Hover inactivo: borde `--celeste`, texto `--celeste`.
- Padding: 9px 22px. Tamaño: 13px. Peso: 600.

#### Sub-bar organizacional (org-subbar)
- Barra scrolleable horizontal con botones pill (border-radius 20px).
- Activo: fondo `--navy`, texto blanco.
- Usada en Organigrama para filtrar por equipo/área.

#### Drill-down — Detail View
- Overlay que cubre todo el panel, con animación `slideInRight`.
- Topbar interna con: botón "← Volver" (celeste, borde celeste), título, badge de status.
- El contenido del detail se organiza: hero → sub-tabs → contenido.

#### Modales
- Overlay oscuro semitransparente, click outside para cerrar.
- Box: layout split (left con gradiente de color, right con contenido).
- Botón cerrar: "✕" arriba a la derecha.
- Usados para: planes de acción expandidos, gráficos ampliados.

### 6.3 Profundidad Máxima de Navegación

**Máximo 3 niveles:** Tab principal → Sub-tab → Detail view.

No se permite un cuarto nivel. Si se necesita más detalle, se usa un modal sobre el tercer nivel.

---

## 7. Catálogo de Componentes

### 7.1 KPI Card

- **Propósito:** Mostrar un indicador clave con contexto inmediato.
- **Cuándo usarlo:** Para cualquier métrica individual que necesite destacarse (ventas, porcentajes, conteos, deltas).
- **Cuándo no usarlo:** Para listados, descripciones o información cualitativa.

### 7.2 Hero Section

- **Propósito:** Anclar visualmente el inicio de cada sección con contexto de alto nivel.
- **Cuándo usarlo:** Al inicio de cada panel/tab principal para establecer el contexto del período, módulo o dimensión.
- **Cuándo no usarlo:** Dentro de sub-vistas o niveles profundos de navegación (usar hero simplificado sin grid atmosférico).
- **Estructura:** Fondo navy con gradiente, grid sutil, glow radial. Lado izquierdo: label + título + subtítulo. Lado derecho: 2-4 KPIs alineados a la derecha con deltas.

### 7.3 Section Hero (dentro de Detail View)

- **Propósito:** Presentar los KPIs principales del objetivo o subsección en formato compacto.
- **Estructura:** Grid responsive de 3-4 columnas sobre fondo oscuro temático. Cada celda: label (11px, opacidad .45, uppercase) + valor grande + subtexto.
- **Cuándo usarlo:** Al inicio de cada detail view o sub-tab con datos cuantitativos propios.

### 7.4 Objective Card (objv3)

- **Propósito:** Representar un objetivo estratégico como unidad navegable.
- **Cuándo usarlo:** En la vista overview de objetivos (grid 2x2).
- **Cuándo no usarlo:** Para KPIs simples, procesos o items de lista.
- **Estructura:** Borde grueso (3px) en color del objetivo. Header: label uppercase + porcentaje grande. Body: título bold + valor big number. Barra de progreso. Botones de acción (pills uppercase, fondo color del objetivo).

### 7.5 Agenda Card

- **Propósito:** Representar un punto de la agenda como card navegable.
- **Cuándo usarlo:** En la landing page / vista de agenda.
- **Estructura:** Acento top (barra de color 4px), número watermark grande en esquina inferior derecha (68px, opacidad .04), tag categoría, título (25px, peso 900), descripción, pills informativos, footer con step counter y botón CTA que aparece en hover.

### 7.6 Channel Board

- **Propósito:** Comparar canales o categorías con barras proporcionales.
- **Cuándo usarlo:** Para mostrar distribución de ventas por canal, zona o categoría con ranking visual.
- **Cuándo no usarlo:** Para datos temporales (usar gráfico de barras) o datos sin referencia proporcional.
- **Estructura:** Grid de 5 columnas: nombre (con dot de color) → barra horizontal → valor → meta/contexto → badge porcentaje.

### 7.7 Ring Gauge

- **Propósito:** Mostrar progreso circular de un solo indicador.
- **Cuándo usarlo:** Cuando hay 3-4 métricas de avance vs meta que deben compararse lado a lado.
- **Cuándo no usarlo:** Para más de 4 gauges en fila o para datos sin referencia de meta.
- **Estructura:** SVG circular con track gris y fill de color, número central grande, título debajo, badge de estado.

### 7.8 Alert Card

- **Propósito:** Comunicar estado de forma visual inmediata con codificación tricolor.
- **Cuándo usarlo:** Para 3 estados simultáneos que comparten dimensión (ej: zonas por riesgo).
- **Estructura:** Grid 3 columnas, border-left de 4px con color semántico, icono + título + valor grande + subtexto.

### 7.9 Heatmap Cell

- **Propósito:** Codificar gravedad por zona geográfica o categoría.
- **Cuándo usarlo:** Para comparar zonas con un solo indicador donde el color indica urgencia.
- **Estructura:** Grid 4 columnas, celdas con gradiente de fondo (verde/amarillo/rojo), zona title uppercase, número central gigante (38px), label descriptivo.

### 7.10 Scorecard Table

- **Propósito:** Presentar datos tabulares con jerarquía y estado.
- **Cuándo usarlo:** Para cualquier comparativo estructurado con 4+ filas y 3+ columnas.
- **Cuándo no usarlo:** Para 2-3 datos simples (usar KPI Cards).
- **Estructura:** Ver sección 5.

### 7.11 Status Badge / Pill

- **Propósito:** Comunicar estado cualitativo de forma compacta.
- **Cuándo usarlo:** Dentro de tablas, cards, o junto a cualquier indicador que necesite interpretación.
- **Variantes:** `.tag-ok`, `.tag-warn`, `.tag-err`, `.tag-blue` (pills redondeados) y `.s-badge.s-ok/warn/crit` (badges rectangulares).

### 7.12 Progress Bar

- **Propósito:** Mostrar avance lineal.
- **Cuándo usarlo:** Dentro de KPI Cards, Objective Cards, o como indicador de avance de etapas.
- **Estructura:** Track de 6-10px, fondo `#e2e8f0`, border-radius 3-5px. Fill con gradiente del color acento. Animación de ancho con `transition: width 1.2s cubic-bezier(.4,0,.2,1)`.

### 7.13 Plan Card (Portada)

- **Propósito:** Representar un plan estratégico como card premium inmersivo.
- **Cuándo usarlo:** En la sección de Plan de Acción.
- **Estructura:** Fondo con gradiente temático intenso, badge de categoría, numeración, título bold, mini-KPIs en grid, status, CTA "Ver plan →". Click abre modal split.

### 7.14 Modal Split

- **Propósito:** Mostrar detalle expandido de un plan o elemento complejo.
- **Estructura:** Layout 50/50. Lado izquierdo: fondo gradiente con badge, título, KPIs, status. Lado derecho: fondo blanco con contenido estructurado (preguntas, detalle, etc.).

### 7.15 Lock Screen

- **Propósito:** Restringir el acceso con autenticación visual.
- **Estructura:** Fondo oscuro radial, grid atmosférico, formulario con input centrado, botón gradient, contador de intentos, animaciones de shake (error) y scale-out (éxito).

---

## 8. Principios de Directorio

### 8.1 Densidad Informativa

- Cada pantalla debe comunicar el estado general de su dimensión en **menos de 10 segundos de lectura**.
- El primer nivel (overview) responde "¿cómo estamos?". El segundo nivel responde "¿por qué?". El tercero responde "¿qué hacemos?".
- Los hero sections condensan todo el contexto necesario del período en un solo vistazo.

### 8.2 Reglas de Cantidad

| Elemento | Cantidad máxima por pantalla |
|----------|------------------------------|
| KPI Cards en fila | 4 |
| KPI Cards totales por vista | 8 |
| Gráficos | 2-3 |
| Tablas | 1-2 |
| Objetivos en overview | 4 (grid 2x2) |
| Tabs principales | 9 |
| Sub-tabs por panel | 3-4 |
| Items en agenda | 6-8 |

### 8.3 Profundidad Máxima

- **3 clics máximo** para llegar al dato más detallado.
- Ruta: Tab → Sub-tab → Detail. Si se necesita más, usar modal.

### 8.4 Tiempo de Carga Percibido

- Las animaciones de entrada (`fadeUp`, `slideInRight`) duran 0.25-0.5s.
- Las barras de progreso y donuts animan su fill en 1.0-1.4s con easing `cubic-bezier(.4,0,.2,1)`.
- Los datos aparecen ya visibles; las animaciones solo dan vida, no bloquean lectura.

### 8.5 Jerarquía de Lectura

1. Hero section (contexto + KPIs macro) — 3 segundos.
2. Cards de primer nivel (KPIs o Channel Board) — 5 segundos.
3. Gráficos (tendencia, distribución) — lectura prolongada.
4. Tablas (detalle, desglose) — consulta a demanda.

### 8.6 Convenciones de Datos

- Moneda: USD con símbolo `$`. Millones: `$X.XXM`. Miles: `$XXXK`.
- Porcentajes: sin decimales si >10%, un decimal si <10%.
- Deltas: flecha `↑`/`↓` + signo `+`/`-` + porcentaje + color semántico.
- Períodos: "Enero–Mayo 2026", "YTD", "Ene–May".
- Comparativo: "vs 2025", "mismo período".

---

## 9. Diseño Escalable — Reglas para Nuevos Módulos

### 9.1 Estructura de un Nuevo Panel/Tab

Todo nuevo módulo sigue esta plantilla:

1. **Hero Section** con gradiente oscuro, grid sutil, label uppercase del módulo, título grande, 2-4 KPIs macro.
2. **Sub-tabs** (si aplica) para desglosar perspectivas del módulo.
3. **Zona de contenido** con cards, tablas o gráficos en grid responsive.
4. **Detail views** (si aplica) como overlay slide-in con botón volver.

### 9.2 Reglas de Identidad Visual

| Regla | Especificación |
|-------|----------------|
| Fondo general | Siempre `--bg` (#f0f4f9) |
| Cards | Siempre fondo blanco, border-radius 12px, sombra base, borde sutil |
| Hero sections | Siempre gradiente navy con grid atmosférico |
| Texto principal | Siempre `--navy` (#0a0a1e), peso 700-900 |
| Labels | Siempre uppercase, peso 600-700, color `--ts` o `#94a3b8` |
| Números importantes | Siempre peso 800-900, tamaño 22-42px |
| Estados | Siempre verde/amarillo/rojo con los colores definidos |
| Hover en cards | Siempre translateY(-3px) + sombra elevada |
| Animaciones de entrada | Siempre fadeUp con delay escalonado (0.04s incrementos) |

### 9.3 Grids Responsivos

| Breakpoint | Nombre | Comportamiento |
|------------|--------|----------------|
| ≥2400px | TV/4K | 2 columnas para obj, gaps grandes, tipografía expandida |
| 901-2399px | Desktop | Grid estándar (2-4 columnas según componente) |
| 601-900px | Tablet | 2 columnas máximo, hero stack vertical, ocultar columnas secundarias |
| 401-600px | Mobile | 1 columna, scroll horizontal en tablas, tabs scrolleables |
| ≤400px | Mobile XS | 1 columna, tipografía mínima, hero de 1 columna |

### 9.4 Touch Targets

- En mobile: todos los elementos interactivos tienen `min-height: 44px`.
- Touch action: `manipulation` en todos los clickables.
- Safe area insets para iOS (notch/Dynamic Island).

### 9.5 Checklist para Nuevo Módulo

Antes de dar por terminado un nuevo módulo, verificar:

- [ ] ¿El hero section usa el gradiente institucional con grid sutil?
- [ ] ¿Las KPI Cards siguen la jerarquía: acento top + label + valor + contexto?
- [ ] ¿Los colores de estado son consistentes (verde/amarillo/rojo)?
- [ ] ¿Las tablas tienen header navy y hover en fila?
- [ ] ¿Los badges usan los estilos `.s-badge` o `.tag` definidos?
- [ ] ¿Las animaciones de entrada son fadeUp con delay escalonado?
- [ ] ¿Los gráficos tienen header, leyenda y usan la paleta de series?
- [ ] ¿La navegación no excede 3 niveles de profundidad?
- [ ] ¿Los cards tienen hover con elevación y transición?
- [ ] ¿Los breakpoints responsive están cubiertos (TV, desktop, tablet, mobile, XS)?
- [ ] ¿Los números usan formato monetario estándar ($X.XXM / $XXXK)?
- [ ] ¿Los textos uppercase tienen letter-spacing apropiado?
- [ ] ¿La tipografía respeta la escala fluida con clamp()?
- [ ] ¿Se usa Inter como única familia tipográfica?

---

## Apéndice A — Tokens CSS de Referencia Rápida

```
/* Colores */
--navy: #0a0a1e
--celeste: #3aabef
--celeste2: #1a8fd1
--celeste-light: rgba(58,171,239,.12)
--bg: #f0f4f9
--card: #fff
--border: #e2e8f4
--border-hl: rgba(58,171,239,.35)
--t: #0a0a1e
--tm: #3d4a6a
--ts: #7b8db0
--ok: #16a34a
--ok-bg: #dcfce7
--warn: #d97706
--warn-bg: #fef3c7
--err: #dc2626
--err-bg: #fee2e2

/* Estructura */
--r: 12px
--sh: 0 2px 12px rgba(10,10,30,.08)
--sh-lg: 0 8px 32px rgba(10,10,30,.14)
--topbar: 60px
--tabbar: 46px
--panelhdr: 52px

/* Tipografía fluida */
--fs-xs: clamp(9px, 0.65vw, 13px)
--fs-sm: clamp(10px, 0.75vw, 14px)
--fs-base: clamp(11px, 0.85vw, 16px)
--fs-md: clamp(13px, 1.0vw, 18px)
--fs-lg: clamp(15px, 1.2vw, 22px)
--fs-xl: clamp(18px, 1.6vw, 28px)
--fs-2xl: clamp(22px, 2.2vw, 40px)
--fs-3xl: clamp(28px, 3.5vw, 64px)

/* Espaciado fluido */
--space-xs: clamp(6px, 0.5vw, 12px)
--space-sm: clamp(10px, 0.8vw, 18px)
--space-md: clamp(14px, 1.1vw, 24px)
--space-lg: clamp(18px, 1.5vw, 32px)
--space-xl: clamp(24px, 2.0vw, 48px)
--chart-h: clamp(240px, 20vw, 420px)
--card-r: clamp(12px, 1vw, 20px)
```

## Apéndice B — Animaciones de Referencia

```
/* Entrada de componentes */
fadeUp: from {opacity:0; transform:translateY(16px)} to {opacity:1; transform:none}
  Duración: 0.3-0.5s ease
  Delay escalonado: incrementos de 0.04-0.06s por elemento

/* Navegación lateral */
slideInRight: from {opacity:0; transform:translateX(28px)} to {opacity:1; transform:none}
  Duración: 0.3s ease
  Uso: detail views

/* Indicador live */
pulse-dot: 0%,100% {opacity:1; scale:1} 50% {opacity:.4; scale:1.5}
  Duración: 2s infinite
  Uso: punto verde de status en topbar

/* Barras y donuts */
Transición de width/stroke: 1.0-1.4s cubic-bezier(.4,0,.2,1)

/* Hover en cards */
transform: translateY(-3px) + box-shadow elevada
Transición: 0.2s ease
```

---

*Este documento es la fuente única de verdad para la identidad visual, UX y patrones de producto del Directorio Ejecutivo Frioteam. Todo nuevo desarrollo debe adherirse a estas especificaciones para mantener coherencia y calidad.*
