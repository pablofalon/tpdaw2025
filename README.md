# Buscaminas

Buscaminas construido con HTML5, CSS3 y JavaScript vanilla ES5 para la
materia Desarrollo y Arquitecturas Web (UAI). No se usan librerías ni
frameworks externos.

## Funcionalidades

- Tablero de 8x8 con colocación aleatoria de minas y conteo de minas
  adyacentes.
- Click izquierdo para revelar una celda, con flood fill recursivo en
  celdas vacías.
- Click derecho para colocar/quitar banderas, con contador de minas
  restantes en vivo.
- Chording: al hacer click en un número ya revelado se revelan sus vecinos
  sin bandera una vez que la cantidad de banderas alrededor coincide con
  el número.
- Cronómetro que arranca en el primer click.
- Detección de victoria/derrota con un modal de resultado (se revelan
  todas las minas al perder).
- Reinicio sin recargar la página, mediante el botón de carita feliz o la
  barra espaciadora.
- Modal de nombre de jugador con validación (mínimo 3 letras, sin usar
  `alert()`).
- Validación de configuración de tablero/minas con un modal de error
  dedicado.
- Página de contacto con un formulario validado (nombre, email, mensaje)
  enviado a través del cliente de mail predeterminado (`mailto:`).
- Link al repositorio de GitHub del proyecto.
- Diseño responsivo (solo Flexbox, sin Grid ni floats).
- Selector de dificultad: Fácil (8x8, 10 minas), Media (12x12, 25 minas),
  Difícil (16x16, 40 minas).

## Estructura del proyecto

- `index.html` - página del juego
- `contact.html` - página del formulario de contacto
- `css/` - hojas de estilo (`reset.css`, `styles.css`)
- `js/` - scripts del juego y las páginas, divididos por responsabilidad:
  - `core-game.js` - estado y lógica principal del juego (datos del
    tablero, minas, revelado, banderas, victoria/derrota, cronómetro,
    reinicio)
  - `board-render.js` - renderiza los datos del tablero como elementos DOM
  - `panel-render.js` - renderiza el contador de minas y el cronómetro
  - `dom-init.js` - obtiene referencias del DOM e inicializa la página al
    cargar
  - `event-handlers.js` - conecta los listeners de eventos de click y
    teclado
  - `contact-init.js` - inicializador DOM para la página de contacto
  - `contact-form.js` - validación y envío del formulario de contacto
- `img/` - imágenes
- `audio/` - efectos de sonido

## Controles

- Click izquierdo: revelar una celda.
- Click derecho: colocar/quitar una bandera.
- Click izquierdo sobre un número ya revelado: chording.
- Botón de carita feliz o barra espaciadora: reiniciar el juego.

## Cómo ejecutar el proyecto

Abrir `index.html` directamente en el navegador. No requiere build ni
servidor.

## Autor

Pablo Falon
