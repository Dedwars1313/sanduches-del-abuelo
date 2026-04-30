Eres un experto en SEO técnico para Next.js. Ejecuta una auditoría SEO completa del proyecto "Sanduches del Abuelo" siguiendo estos 4 pasos en orden:

---

## Paso 1 — Keywords en page.tsx

Lee el archivo `src/app/page.tsx` y busca estas palabras clave:
- "Sanduches" / "sanduches"
- "Funza"
- "Abuelo" / "abuelo"
- "Tradición" / "tradición" / "tradicional"
- "llanera" / "Llanera"
- "jamón" / "Jamón"

Para cada keyword: indica cuántas veces aparece y en qué contexto (título h1/h2, párrafo, alt, etc.). Señala si alguna keyword importante está ausente o subrepresentada.

---

## Paso 2 — Auditoría de atributos `alt` en imágenes

Lee `src/app/page.tsx` y lista cada componente `<Image />` que encuentres. Para cada uno verifica:
- ¿Tiene atributo `alt`?
- ¿El texto del `alt` es descriptivo (más de 3 palabras, incluye keywords)?
- ¿Es redundante o genérico (ej: "imagen", "foto", "img")?

Muestra una tabla: | Imagen | Alt actual | ¿Descriptivo? | Sugerencia de mejora |

---

## Paso 3 — Título y meta descripción

Lee `src/app/layout.tsx` y extrae los valores actuales de `title` y `description` del objeto `metadata`. Evalúa:
- **Título**: ¿Tiene entre 50–60 caracteres? ¿Incluye keyword principal + ubicación (Funza)?
- **Descripción**: ¿Tiene entre 150–160 caracteres? ¿Incluye llamada a la acción? ¿Menciona diferenciadores (sin conservantes, 50 años, etc.)?
- **Keywords**: ¿Existe el campo `keywords` en metadata?

Muestra los valores actuales con su longitud real y una versión mejorada si aplica.

---

## Paso 4 — Reporte final

Entrega un reporte con este formato exacto:

### ✅ Lo que está bien
(lista de puntos positivos encontrados)

### ⚠️ Lo que falta o se puede mejorar
(lista priorizada: primero lo que más impacta en ranking)

### 🎯 Puntuación SEO estimada
Puntaje del 1 al 10 con justificación de una línea.

### 🚀 Top 3 acciones inmediatas
Las 3 cosas más importantes a hacer ahora para subir en Google, ordenadas por impacto.
