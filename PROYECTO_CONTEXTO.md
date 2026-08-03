# Dashboard Comercial FrioPacking — Contexto del Proyecto

> Archivo de contexto para retomar el trabajo en cualquier nuevo chat.
> Última actualización: 18 junio 2026

---

## Qué es este proyecto

Dashboard ejecutivo interactivo (HTML de una sola página) que el **Gerente Comercial presenta al Directorio interno de FrioPacking** con los resultados comerciales del año. Empresa = refrigeración industrial B2B en Perú (diseño + suministro + implementación de soluciones de frío).

**Este dashboard es un objetivo SMART 2026 de la empresa** (slide 7 del PPT): "1 Dashboard gerencial con 5+ KPIs aprobado por Dirección", deadline 30-jun-2026.

Proceso de trabajo = iterativo y validado paso a paso. El usuario valida cada sección antes de pasar a la siguiente.

---

## Archivos en la carpeta de trabajo

`C:\Users\vrodriguez\Desktop\Directorio J\`

| Archivo | Uso |
|---|---|
| `Dashboard Comercial FrioPacking.html` | **App principal — el entregable final en construcción** |
| `Directorio Mayo 2026 VF.html` | Versión Frioteam (referencia de estilo, 18 MB) |
| `Directorio 2 - Cierre a Mayo 2026.pptx` | PPT oficial Mayo 2026 — fuente autoritativa de datos |
| `Oportunidades y ventas mayo.xlsx` | Datos pipeline + oportunidades |
| `VENTAS Y MARGENES HISTORICO (2021 A 2026) - CLAUDE.xlsx` | Histórico de ventas |
| `DATOS PRODUCCIÓN TRABAJO.xlsx` | Datos adicionales de producción |
| `.claude/FRIOPACKING WHITE (1).png` | Logo real para el header |
| `.claude/logo_b64.txt` | Logo en base64 (ya procesado, listo para incrustar) |
| `.claude/ref_imgs/` | 4 capturas del dashboard Frioteam (referencia visual) |

**Restricción técnica:** No hay Python en el sistema. Leer xlsx via PowerShell descomprimiendo el ZIP interno (abrir con FileShare ReadWrite porque suele estar abierto en Excel).

---

## Datos clave (fuente oficial = PPT Mayo 2026)

### KPIs principales a Mayo 2026

| KPI | Valor real | Meta | Estado |
|---|---|---|---|
| Ventas acumuladas | US$ 27.25 MM | US$ 30 MM (año) | 90.8% — AÑO RÉCORD (+77% vs 2025) |
| Margen operativo | **15.06%** | 18% | −2.91 pts (usar 15.06%, no 14.9%) |
| Pipeline activo | US$ 88.94 MM | — | 59 oportunidades vivas |
| Win rate | 83.8% | — | 61 ganados / 6 perdidos |

### Ventas por zona
- Norte 69%, Sur 25%, Centro 6%

### Ventas por sector
- Arándanos 59%, Uva 18%, Otros 13%, Palta 6%, Cítricos 3%
- Alta concentración agro/arándanos → pregunta incómoda del Directorio

### Concentración de clientes
- Top 9 clientes = 80.95% del valor (US$ 22.06 MM)
- Agroberries 35%, Bomarea 11%, Agrolatina 8.5%...

### Histórico anual (cierres reales)
- 2021: US$ 20.4 MM | 2022: 34.1 MM | 2023: 15.5 MM | 2024: 22.8 MM | 2025: 36.9 MM
- **OJO:** Meta 2026 (30 MM) < Cierre 2025 (36.9 MM) → el Directorio preguntará por qué

### Margen por sector (ponderado, Vendido)
- Global 14.9% (oficial PPT = 15.06%)
- Arándanos 14.1% (vol 60%, arrastra el margen)
- Norte 14.0% vs Sur 16.3% vs Centro 17.1%
- Narrativa: subir margen = crecer en sectores/zonas de mayor margen

### Objetivos estratégicos 2026 (5 en el PPT)
| # | Objetivo | Meta | Estado |
|---|---|---|---|
| O1 | Ventas + Margen | $30MM + 18% | En progreso 90.8% |
| O2 | Proyectos CO₂ vendidos | 2 | **0/2 — EN RIESGO** (pipeline: Emergent Cold, Axion Log) |
| O3 | Nuevos clientes fuera del agro | 4 | 2/4 = 50% — en progreso (Arca Continental Lindley + Delice) |
| O4 | Valor sin frío | US$ 2.8 MM | **CUMPLIDO 193.8%** (OOCC $2.69M + EEMM $2.74M) |
| O5 | Servicios Frioteam | — | 26.3% — en atención |

### Pipeline CRM (REPORTE - PROYECTOS.xlsx, hoja SEGUIMIENTO CRM)
- 74 leads reales
- Activos (excl. vendido/perdido/postpuesto): 54
- Embudo: Análisis de cliente 24, Arquitectura 11, Presupuesto 9, Comercial 7, Negociación 3, Vendido 6
- Prioridad: Alta 28, Media 13, Baja 6, sin asignar 27
- **Sin importe US$ en este archivo** → pendiente valorizar (cruzar con archivo de importes)

---

## Diseño y stack técnico

### Stack
- **HTML/CSS/JS puro** — archivo único, sin frameworks, sin build tools
- Fuentes: `Noway` (titulares) + `Inter` (texto)
- Logo: PNG real en `.claude/FRIOPACKING WHITE (1).png` (versión white para header oscuro)

### Tokens de diseño
```
Header/nav:   #0a0a1e  (navy oscuro)
Acento marca: #3EC6AC  (turquesa FrioPacking — reemplaza el #3aabef del template)
Background:   #f0f4f9
Card:         #ffffff
Border:       #e2e8f4
Texto dark:   #0a0a1e
Texto mid:    #3d4a6a
Texto light:  #7b8db0

Semánticos:
  En meta:     #16a34a / bg #dcfce7  (verde)
  En proceso:  #d97706 / bg #fef3c7  (amber)
  En atención: coral cálido           (NO rojo — el usuario pidió que no sea agresivo)

Border radius: 12px
Sombras: 0 2px 12px rgba(10,10,30,.08) / 0 8px 32px rgba(10,10,30,.14)
```

### Estructura de navegación (8 pestañas)
1. **Portada** — KPIs ejecutivos + foto fondo + anillo objetivos ✅ APROBADA
2. **Resumen** — Agenda de revisión numerada (6 puntos, 2 filas de 3) ✅ APROBADA
3. **Ventas** — Tendencia anual + comparativo interanual ✅ DISEÑADA
4. **Margen** — Desglose por sector y zona ✅ DISEÑADA
5. **Pipeline** — Embudo CRM clicable ✅ DISEÑADA
6. **Clientes** — Concentración cartera (NUEVA — pendiente diseñar)
7. **Participación** — Mercado agro vs otros (pendiente diseñar)
8. **Objetivos** — 2×2 grid clicable con sustento PPT ✅ DISEÑADA

---

## Estado actual del desarrollo

### Lo que ya está construido / aprobado

- [x] **Arquitectura general** — híbrido cockpit único + drill-downs (narrativa resultado→tendencia→futuro)
- [x] **Sistema de diseño** — tokens, componentes, paleta de marca
- [x] **Portada** — tarjetas KPI con clic-para-navegar + anillo donut de objetivos (4 segmentos)
- [x] **Resumen** — agenda numerada estilo Frioteam (6 secciones con cifra protagonista)
- [x] **Ventas** — 2 gráficos lineales (monto + cantidad proyectos) + comparativo interanual 2024/2025/2026
- [x] **Margen** — sectores clicables con desglose, narrativa "arándanos arrastra el margen"
- [x] **Pipeline** — embudo CRM por etapa, clicable
- [x] **Objetivos** — grid 2×2 clicable con sustento del PPT

### Pendiente

- [ ] **Módulo Clientes** — concentración cartera (top 9, Agroberries 35%, etc.)
- [ ] **Módulo Participación** — mercado agro vs otros sectores
- [ ] **Logo real** — reemplazar stand-in (copo+texto) por PNG real de `.claude/`
- [ ] **Valorización pipeline** — decidir cómo añadir US$ al embudo CRM
- [ ] **Validación final** — recorrido sección por sección con el usuario

---

## Decisiones de diseño importantes (no reabrir)

- **Estilo:** Header navy + tabs + tarjetas + gráficos de líneas (como Frioteam). Las imágenes de referencia del zip son SOLO estilo, no el alcance (FrioPacking ≠ Frioteam).
- **Color acento:** `#3EC6AC` (turquesa de marca), NO el `#3aabef` del template.
- **Alertas:** Coral cálido para "atención" — **NO rojo**, pedido explícito del usuario.
- **Cockpit:** 4 KPIs (Ventas, Margen, Pipeline, Objetivos). Participación de mercado = módulo propio, NO sube al cockpit.
- **Módulo Ventas:** abre con tendencia anual (gráfico de líneas) como vista inicial.
- **Margen oficial:** 15.06% (del PPT) — no usar el 14.9% calculado del Excel.
- **CO₂:** meta = 2 proyectos (no 4) → estado 0/2.
- **Filosofía:** "Menos es más". Componentes sutiles, badges apagados, no bloques de color agresivos.

---

## Preguntas incómodas del Directorio (el dashboard debe anticiparlas)

1. ¿Por qué el margen está 2.9 pts por debajo de la meta?
2. ¿Dónde está la atención? / ¿Qué estamos descuidando?
3. Alta concentración arándanos/agro — ¿cuándo diversificamos?
4. La meta 2026 (US$30 MM) es menor al cierre 2025 (US$36.9 MM) — ¿por qué bajamos la vara?

---

## Cómo retomar el trabajo

1. Abrir `Dashboard Comercial FrioPacking.html` — es el entregable en construcción.
2. Abrir `Directorio Mayo 2026 VF.html` para ver el estilo de referencia.
3. Continuar por donde se dejó: **módulo Clientes** es el siguiente pendiente.
4. Validar con el usuario sección por sección antes de avanzar a la siguiente.
