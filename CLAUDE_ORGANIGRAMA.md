# CLAUDE.md — Módulo Organigrama · Directorio Ejecutivo Frioteam 2026

> **Módulo:** Organigrama — Estructura Organizacional
> **Contexto:** Sub-aplicación embebida dentro del Directorio Ejecutivo Frioteam
> **Estilo de referencia:** App nativa / Dashboard ejecutivo premium
> **Última actualización:** Junio 2026

---

## 1. Filosofía del Módulo

El organigrama NO es una imagen estática ni una presentación. Es una **mini-aplicación interactiva** embebida dentro del Directorio Ejecutivo que permite explorar la estructura organizacional de Frioteam de forma dinámica. Debe sentirse como una app dedicada, no como una diapositiva de PowerPoint.

El objetivo es transmitir:

- **Jerarquía clara:** quién reporta a quién, sin ambigüedad.
- **Identidad de equipo:** cada departamento tiene personalidad visual propia.
- **Profundidad bajo demanda:** la información aparece cuando se necesita, no toda de golpe.
- **Profesionalismo ejecutivo:** estética limpia, tipografía Inter, paleta institucional.

---

## 2. Arquitectura de Navegación

```
Header (barra superior oscura con logo + metadata)
  └─ Gradient bar (línea decorativa de 3px)
      └─ Tab bar (pestañas por departamento/vista)
          ├─ Vista General (jerarquía completa)
          │   ├─ Gerente General (hero card con animación)
          │   ├─ Conector vertical
          │   ├─ Planner/Coordinador (card secundario)
          │   ├─ Conector vertical
          │   ├─ Section label con líneas laterales
          │   └─ Grid de Jefes de Área (3 columnas)
          │       └─ Cada card → click → Modal de detalle
          ├─ Departamento A (cards de equipo)
          ├─ Departamento B
          ├─ Departamento C
          └─ ...
```

---

## 3. Sistema Visual del Organigrama

### 3.1 Paleta de Colores

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#f8f9fc` | Fondo general del módulo |
| `--card` | `#ffffff` | Fondo de cards |
| `--card2` | `#f2f5fb` | Fondo alternativo de cards |
| `--border` | `rgba(15,35,80,.09)` | Bordes sutiles |
| `--cyan` | `#1a86cc` | Color primario / acento institucional |
| `--cyan2` | `#1268a8` | Variante oscura del primario |
| `--white` (texto) | `#111827` | Color principal de texto (navy oscuro) |
| `--muted` | `#52606e` | Texto secundario / metadata |

**Colores departamentales** (para bordes laterales y acentos de zona):

| Departamento | Color | Uso |
|-------------|-------|-----|
| Comercial | `#1a86cc` (cyan) | Borde top de card |
| Operaciones | `#2e7d32` (verde) | Borde top de card |
| Administración | `#e65100` (naranja) | Borde top de card |
| Ingeniería | `#6a1b9a` (púrpura) | Borde top de card |
| SSOMA | `#c62828` (rojo) | Zona especial con borde dashed |
| Dirección | `#00838f` (teal) | Card del gerente general |

### 3.2 Tipografía

**Familia:** Inter (Google Fonts)

| Elemento | Tamaño | Peso | Detalles |
|----------|--------|------|----------|
| Título de sección (h2) | `1.85rem` (~30px) | 900 | Texto principal con span en cyan |
| Nombre en hero card | `1.45rem` (~23px) | 900 | Nombre del Gerente General |
| Nombre en card estándar | `1.08rem` (~17px) | 800 | Nombres de jefes/coordinadores |
| Rol/cargo | `0.8rem` (~13px) | 400 | Color `--muted` |
| Departamento label | `0.66rem` (~11px) | 700 | Uppercase, letter-spacing 0.14em |
| Badge | `0.58rem` (~9px) | 700 | Uppercase, letter-spacing 0.14em |
| Metadata (conteo, fecha) | `0.52-0.72rem` | 500-700 | Color `--muted` |
| Tab label | `0.8rem` (~13px) | 700 | Uppercase, letter-spacing 0.1em |

### 3.3 Espaciado y Dimensiones Fijas

| Elemento | Valor |
|----------|-------|
| Padding general del panel | `16px 20px 36px` |
| Gap entre cards en grid | `14px` |
| Max-width del contenido | `1280px` (centrado) |
| Padding interno de card | `14px 16px 16px` |
| Ancho máximo del hero card (GG) | `520px` (centrado) |

---

## 4. Cards de Persona — Especificación Detallada

### 4.1 Card Estándar (Jefe de Área / Colaborador)

**Dimensiones y uniformidad:**

- **Altura:** TODAS las cards en un mismo grid deben tener la **misma altura**. Usar `display: flex; flex-direction: column;` en el card y `flex: 1` en el body para que se estire uniformemente. Además, aplicar `min-height` fija al grid row para garantizar alineación perfecta.
- **Ancho:** Determinado por el grid (`grid-template-columns: repeat(3, 1fr)` para jefes; `repeat(4, 1fr)` o `repeat(3, 1fr)` para colaboradores según cantidad).
- **Border-radius:** `14px`
- **Overflow:** `hidden`
- **Transición hover:** `translateY(-4px)` + sombra `0 10px 32px rgba(26,134,204,.22)` en 0.22s

**Estructura interna del card:**

```
┌─────────────────────────────────────┐
│  BORDE TOP (3px solid --cyan)       │  ← identifica departamento
├─────────────────────────────────────┤
│                                     │
│         ┌───────────┐               │
│         │           │               │  ZONA FOTO
│         │   FOTO    │               │  Height: 140px
│         │  130×130  │               │  Foto: 130×130px, border-radius: 50%
│         │           │               │  Border: 4px solid #fff
│         └───────────┘               │  Box-shadow: 0 0 0 3px rgba(26,134,204,0.55)
│                                     │
├─────────────────────────────────────┤
│  DEPTO LABEL (uppercase, color)     │  Font: 0.66rem, weight 700
│  NOMBRE COMPLETO                    │  Font: 1.08rem, weight 800
│  Cargo / Rol                        │  Font: 0.8rem, color --muted
│                                     │
│  ┌─────────────────────────────┐    │
│  │  👥 X personas  │    →     │    │  Footer: conteo + flecha
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

**Reglas de uniformidad:**

- La zona de foto tiene **altura fija de 140px** en cards de jefe, y **100px** en cards de colaborador.
- El nombre, cargo y departamento siempre ocupan su propia línea, sin truncamiento.
- Si el nombre es largo, el font-size puede reducirse ligeramente pero NUNCA se trunca con ellipsis.
- El footer (conteo + flecha) siempre está al fondo del card gracias a `flex: 1` en el body + `margin-top: auto` en el footer.

### 4.2 Hero Card — Gerente General

El Gerente General tiene un card diferenciado con **animación pulsante**.

**Estructura:**

```
┌─────────────────────────────────────────┐
│  BORDE TOP (3px solid --cyan)           │
│                                         │
│  ┌────────┐                             │
│  │        │  TAG: "GERENTE GENERAL"     │
│  │  FOTO  │  NOMBRE (1.45rem, w900)     │
│  │ 130×130│  Cargo (0.84rem, muted)     │
│  │        │                    ┌──────┐ │
│  └────────┘                    │ 43   │ │  Badge con total
│                                │colabs│ │  de colaboradores
│                                └──────┘ │
└─────────────────────────────────────────┘
```

**Animación pulsante:**

```css
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(58,171,239,.5); }
  50%      { box-shadow: 0 0 0 12px rgba(58,171,239,0); }
}

.pulse {
  animation: pulse 2.5s infinite;
}
```

La clase `.pulse` se aplica al **card completo** del Gerente General (no a la foto). Esto crea un efecto de "latido" que atrae la atención al nivel más alto de la jerarquía.

**Dimensiones del hero card:**

- Max-width: `520px`
- Centrado con `margin: 0 auto`
- Layout: `display: flex; align-items: center; gap: 20px`
- Fondo: `linear-gradient(135deg, #f0f6ff 0%, #e5edff 100%)`
- Borde: `1px solid rgba(26,134,204,.3)` + `border-top: 3px solid --cyan`
- Glow interno: pseudo-elemento `::before` con `radial-gradient(ellipse at top left, rgba(58,171,239,.12) 0%, transparent 60%)`

### 4.3 Fotos

- **Tamaño en hero card:** 130×130px
- **Tamaño en card de jefe:** 130×130px
- **Tamaño en card de colaborador:** 100×100px (o 80×80px en grids de 4+)
- **Tamaño en card compacto (zona):** 36px
- **Forma:** Siempre circular (`border-radius: 50%`)
- **Borde:** `4px solid #ffffff`
- **Sombra:** `0 0 0 3px rgba(26,134,204,0.55), 0 6px 22px rgba(26,134,204,0.28)`
- **Object-fit:** `cover`
- **Object-position:** `center top` (para que el rostro quede centrado)
- **Fallback sin foto:** Círculo de color departamental con iniciales en blanco, peso 800, tamaño 20px

---

## 5. Líneas Conectoras (Jerarquía)

### 5.1 Especificación de Conectores

Los conectores entre niveles jerárquicos se construyen con dos elementos:

**Conector vertical:**
```css
.ov-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ov-connector-line {
  width: 2px;
  height: 28px;
  background: linear-gradient(to bottom, var(--cyan), rgba(58,171,239,.3));
}

.ov-connector-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--cyan);
  margin-top: -1px;
}
```

**Reglas de conectores:**

- El conector **siempre** va centrado horizontalmente respecto al card padre y al card/grid hijo.
- La línea es de **2px de ancho** con gradiente de cyan sólido arriba a cyan transparente abajo.
- El dot terminal es de **8px**, sólido cyan, posicionado al final de la línea.
- Para conectar 1 padre con N hijos, se usa un conector vertical del padre hasta un punto, luego una línea horizontal que se ramifica, y luego conectores verticales a cada hijo.

**Patrón de bifurcación (1 a N):**

```
        [Gerente General]
              │
              ● (dot)
              │
    ┌─────────┼─────────┐
    │         │         │
  [Jefe A] [Jefe B] [Jefe C]
```

Implementación de la bifurcación:

```css
.connector-horizontal {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}

.connector-horizontal::before {
  content: '';
  position: absolute;
  top: 0;
  left: 16.67%;   /* ajustar según columnas */
  right: 16.67%;
  height: 2px;
  background: var(--cyan);
}

.connector-branch {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.connector-branch-line {
  width: 2px;
  height: 20px;
  background: var(--cyan);
}
```

---

## 6. Vista Tipo App (No Presentación)

### 6.1 Header del Módulo

El header replica la estética del Panel Header del Directorio principal:

- Fondo: `linear-gradient(90deg, #061430 0%, #0c2454 55%, #061430 100%)`
- Glow: pseudo-elemento con `radial-gradient(ellipse at 30% 50%, rgba(58,171,239,.15), transparent 60%)`
- Altura: ~52px
- Logo a la izquierda (42px de alto)
- Separador vertical (`1px solid rgba(15,35,80,.09)`, height 40px)
- Título: "ORGANIGRAMA" en cyan, 0.8rem, weight 700, letter-spacing 0.18em, uppercase
- Subtítulo: "Estructura organizacional · 43 colaboradores · 2026" en `--muted`, 0.58rem
- Lado derecho: badge con versión/fecha
- Debajo: gradient bar de 3px con `linear-gradient(90deg, transparent, --cyan, #66efb5, --cyan, transparent)`

### 6.2 Tab Bar

El tab bar es el componente que hace que el organigrama se sienta como app:

- Fondo: `#ffffff`
- Scroll horizontal sin scrollbar visible (`::-webkit-scrollbar { display: none }`)
- Cada tab: `padding: 13px 22px`, font 0.8rem, weight 700, uppercase, letter-spacing 0.1em
- Tab inactiva: color `--muted`, border-bottom 2px transparent
- Tab activa: color `--cyan`, border-bottom 2px solid `--cyan`
- Hover: color `--white`, background `rgba(33,150,214,.05)`
- Dot opcional: círculo de 7px junto al label (color heredado del texto, opacidad 0.7)

### 6.3 Comportamiento de Scroll

- El contenido de cada tab tiene scroll vertical independiente.
- El header y el tab bar permanecen fijos (no scrollean).
- Usar `scroll-behavior: smooth` para transiciones suaves.

---

## 7. Descripción Colapsable

### 7.1 Concepto

La información detallada de cada persona (funciones, responsabilidades, descripción del rol) **NO se muestra por defecto**. Se revela al hacer click en el card, desplegándose dentro de un **modal elegante** o un **panel lateral slide-in**.

### 7.2 Modal de Detalle

**Estructura del modal:**

```
┌──────────────────────────────────────────┐
│  ✕ (botón cerrar, esquina superior der.) │
├──────────────────────────────────────────┤
│                                          │
│  ┌──────────┐  TAG DEPARTAMENTO          │
│  │          │  NOMBRE COMPLETO (bold)    │
│  │   FOTO   │  Cargo (muted)            │
│  │  120×120 │                            │
│  └──────────┘  Área: _____               │
│                Sede: _____               │
│                F.Ingreso: _____          │
│                                          │
│  ─────────────────────────────────────   │
│  FUNCIONES PRINCIPALES                   │
│  • Función 1                             │
│  • Función 2                             │
│  • Función 3                             │
│  • ...                                   │
│                                          │
└──────────────────────────────────────────┘
```

**Estilos del modal:**

- Overlay: `position: fixed; inset: 0; background: rgba(0,0,0,.55); backdrop-filter: blur(4px)`
- Box: `background: #fff; border-radius: 16px; max-width: 480px; max-height: 90vh; overflow-y: auto`
- Padding interno: `28px 32px`
- Box-shadow: `0 24px 64px rgba(0,0,0,.25)`
- Transición de entrada: `opacity 0→1, transform scale(0.95→1)` en 0.25s ease
- Cierre: click en overlay, tecla Escape, o botón ✕

**Sección de funciones:**

```css
.modal-section {
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px solid rgba(15,35,80,.09);
}

.modal-section h4 {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--cyan);
  margin-bottom: 10px;
}

.modal-section ul {
  list-style: none;
  padding: 0;
}

.modal-section li {
  font-size: 0.82rem;
  color: #374151;
  padding: 5px 0 5px 18px;
  position: relative;
  line-height: 1.55;
}

.modal-section li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--cyan);
  font-size: 0.75rem;
}
```

### 7.3 Alternativa: Descripción Inline Colapsable

Si se prefiere expandir la descripción dentro del card sin modal:

```
┌──────────────────────────────────┐
│  [Card normal]                   │
│  Nombre · Cargo · Depto          │
│                                  │
│  ▼ Ver funciones                 │  ← Toggle
├──────────────────────────────────┤
│  ┌────────────────────────────┐  │
│  │ • Función 1                │  │  Área colapsable
│  │ • Función 2                │  │  con animación
│  │ • Función 3                │  │  de altura
│  └────────────────────────────┘  │
│  ▲ Ocultar                       │
└──────────────────────────────────┘
```

**Animación de colapso:**

```css
.collapse-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(.4,0,.2,1);
}

.collapse-content.open {
  max-height: 300px; /* ajustar según contenido máximo */
}
```

---

## 8. Zonas / Secciones dentro de cada Tab

### 8.1 Section Label

Cada grupo dentro de un tab (ej: "Jefes de Área", "Equipo Técnico") se identifica con un label centrado con líneas laterales:

```css
.section-label {
  text-align: center;
  margin: 0 auto 18px;
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 12px;
}

.section-label::before,
.section-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}
```

### 8.2 Zona Especial (ej: SSOMA / Staff)

Las zonas especiales (reportes directos especiales, staff) se distinguen con:

- Borde: `1px dashed rgba(239,83,80,.35)` (o color del departamento)
- Background: `rgba(239,83,80,.04)`
- Border-radius: `16px`
- Padding: `18px 18px 20px`
- Label superior con el mismo patrón de líneas laterales pero en color departamental

### 8.3 Zona Colapsable (Toggle)

Para departamentos con muchos colaboradores, las zonas pueden colapsarse:

```css
.zone-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 12px 16px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: all 0.2s;
}

.zone-header:hover {
  border-color: var(--cyan);
  background: rgba(33,150,214,.04);
}

.zone-header .chevron {
  transition: transform 0.25s ease;
}

.zone-header.open .chevron {
  transform: rotate(180deg);
}

.zone-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(.4,0,.2,1);
}

.zone-body.open {
  max-height: 2000px; /* suficiente para cualquier contenido */
}
```

---

## 9. Animaciones

### 9.1 Entrada de Elementos

Todos los elementos del organigrama entran con `fadeIn`:

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: none; }
}

.panel.active {
  animation: fadeIn 0.25s ease;
}
```

### 9.2 Animación del Gerente General

El card del Gerente General tiene animación pulsante continua para indicar que es el nodo raíz de la jerarquía:

```css
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(58,171,239,.5); }
  50%      { box-shadow: 0 0 0 12px rgba(58,171,239,0); }
}

.gg-card {
  animation: pulse 2.5s infinite;
}
```

### 9.3 Hover en Cards

```css
.person-card {
  transition: all 0.22s ease;
}

.person-card:hover {
  transform: translateY(-4px);
  border-color: var(--cyan);
  box-shadow: 0 10px 32px rgba(26,134,204,.22);
}
```

### 9.4 Transición del Modal

```css
.modal-overlay {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.modal-overlay.open {
  opacity: 1;
  pointer-events: all;
}

.modal-box {
  transform: scale(0.95) translateY(10px);
  transition: transform 0.25s cubic-bezier(.22,1,.36,1);
}

.modal-overlay.open .modal-box {
  transform: scale(1) translateY(0);
}
```

---

## 10. Reglas de Escalabilidad

### 10.1 Añadir un Nuevo Departamento

1. Crear un nuevo tab con el patrón de tab existente.
2. Asignar un color departamental único que no colisione con los existentes.
3. Dentro del panel: section label → grid de cards (todas con misma altura).
4. Si hay más de 8 personas: dividir en zonas colapsables.

### 10.2 Añadir una Nueva Persona

1. Crear un card con la misma estructura estándar.
2. Incluir foto (o fallback de iniciales).
3. Añadir entrada en el objeto de datos (DATA) con: nombre, rol, departamento, sede, fecha de ingreso, funciones.
4. Añadir foto al objeto PHOTOS si está disponible.

### 10.3 Checklist de Calidad

Antes de dar por terminado cualquier cambio en el organigrama:

- [ ] Todas las cards en el mismo grid tienen **exactamente la misma altura**
- [ ] Las fotos son circulares, del tamaño correcto, con borde blanco y sombra cyan
- [ ] Los conectores jerárquicos están **perfectamente centrados** y usan gradiente cyan
- [ ] El tab bar funciona correctamente y muestra la pestaña activa
- [ ] El modal de detalle se abre con animación y se cierra con click fuera / Escape
- [ ] La animación pulsante del Gerente General funciona
- [ ] Las descripciones/funciones NO están visibles por defecto (se revelan al click)
- [ ] El scroll funciona correctamente dentro de cada panel
- [ ] El header y tabs permanecen fijos al scrollear
- [ ] Los colores departamentales son consistentes entre tabs y cards
- [ ] La tipografía usa Inter en todos los pesos correctos
- [ ] Los hover en cards funcionan con `translateY(-4px)` + sombra

---

## 11. Datos del Módulo

El organigrama se alimenta de dos objetos JavaScript:

### DATA (información de personas)

```javascript
var DATA = {
  'clave_persona': {
    name: 'Nombre Completo',
    role: 'Cargo',
    dept: 'Departamento',
    sede: 'Ciudad',
    ingreso: 'Mes Año',
    color: '#hexcolor',      // color departamental
    av: 'XX',                // iniciales (fallback)
    roles: [                 // funciones (se muestran en modal)
      'Función principal 1',
      'Función principal 2',
      'Función principal 3'
    ]
  },
  // ... más personas
};
```

### PHOTOS (fotos en base64)

```javascript
var PHOTOS = {
  'clave_persona': 'data:image/png;base64,...',
  // ... más fotos
};
```

Las fotos se inyectan dinámicamente al cargar el módulo, reemplazando los placeholders de iniciales por imágenes reales cuando están disponibles.

---

*Este documento es la referencia definitiva para el módulo de Organigrama del Directorio Ejecutivo Frioteam. Cualquier nuevo desarrollo o modificación debe seguir estas especificaciones para mantener la coherencia visual y la experiencia de usuario tipo app.*
