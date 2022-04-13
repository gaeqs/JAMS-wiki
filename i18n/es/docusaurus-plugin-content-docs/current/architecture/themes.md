---
sidebar_position: 9
---

# Temas

Los temas de JAMS funcionan de la misma manera que el estilo de una página web: mediante archivos CSS.

El funcionamiento de los temas es muy similar al funcionamiento de los [idiomas](languages): los temas son empaquetados
en una carpeta o archivo comprimido, con un archivo JSON que actúa como punto de entrada (`theme.json`) y un conjunto de
archivos CSS.

A diferencia de los idiomas, un desarrollador que implemente nuevos nodos a la escena de JAMS no require gestionar
ningún aspecto de los temas: el tema que el usuario tenga seleccionado será implementado de manera transparente gracias
al sistema de temas de *JavaFX*.

## Estructura

El archivo `theme.json` define el nombre y los archivos CSS incluidos en el tema. Un ejemplo de archivo `theme.json`
sería el siguiente:

```json title="theme.json"
{
  "name": "Light Theme",
  "dependencies": ["Other Theme"],
  "files": [
    "extra.css"
  ]
}
```

Un archivo `theme.json` presenta los siguientes parámetros:

- **name**: el nombre del tema. Es el nombre mostrado al usuario, y sirve como identificador para el tema.
- **files**: los archivos CSS incluidos en el tema.
- **dependencies**: los temas de los que este tema depende. El estilo de estos temas será añadido al estilo del tema
  definido. Este parámetro es opcional.

Esté definido o no las dependencias, todo tema depende del tema `Common`. Este tema actúa de base, y define el estilo
básico de JAMS. Este tema define muchas variables globales, pero no le asigna ningún valor a ninguna de ellas.

### Variables globales

Las variables globales permiten definir el color de los diferentes componentes de manera muy sencilla. Un tema debe
asignar un color a todas las variables del tema `Common`. Esta tarea se debe hacer en el archivo especial `global.css`.

Este archivo es un archivo especial que siempre está incluido en el tema y, al compilar, será envuelto en una sección
global CSS `*{ }`. Esto permite que todos los componentes puedan usar las variables asignadas en este archivo.

Un ejemplo de archivo `global.css` sería el siguiente:

```css title="global.css"
-theme-foreground: #222222;
-theme-foreground-darker: derive(-theme-foreground, 20%);
-theme-foreground-darker-2: derive(-theme-foreground, 40%);
-theme-foreground-lighter: #000000;
-theme-background: #f2f2f2;
-theme-background-darker: #e5e5e5;
-theme-background-darker-2: #eaeaea;
-theme-background-lighter: #f7f7f7;
-theme-background-pressed: derive(-theme-background, -10%);
-theme-background-darkest: #FFFFFF;
-theme-shadow: #555555;
-theme-header: #8faccc;
-theme-menu-item-hover: #4D6EAF;

-theme-element-out: #e3cd91;
-theme-element-selected: #5a80cc;
-theme-element-invalid: #e86161;

-theme-explorer-file-to-assemble: #90b682;
-theme-explorer-selected-file-to-assemble: #7094a8;

-theme-text-match: #214182;
-theme-text-selected: #93aee7;
-theme-text-comment: #3b3b3b;
-theme-text-label: -theme-foreground;
-theme-text-global-label: #7c271b;
-theme-text-directive: #7a3f13;
-theme-text-directive-parameter: #931883;
-theme-text-string: #376912;
-theme-text-instruction: #6e5a13;
-theme-text-pseudo-instruction: #247a11;
-theme-text-register: #1f318c;
-theme-text-immediate: #2c7c1a;
-theme-text-macro: #14735d;
-theme-text-global-macro: #7c271b;
-theme-text-macro-parameter: #391a8d;

-theme-error: #5e1515;
-theme-warining: #5b4805;
-theme-info: #193e6c;
-theme-done: #216b19;

-theme-search-result: #6ead42;
-theme-search-result-stroke: #3c6321;
-theme-selected-search-result: #4f6dc5;
-theme-selected-search-result-stroke: #000000;

-theme-simulation-fetch: #fafa97;
-theme-simulation-decode: #d0faa8;
-theme-simulation-execute: #afe0fa;
-theme-simulation-memory: #d5b9fc;
-theme-simulation-write-back: #fcbbb4;
-theme-simulation-breakpoint: #ff2e29;

-theme-cache-hit: #41592a;
-theme-cache-miss: #5b3e3e;
-theme-lab-selected-segment: #cb1010;
```

## Extensiones

Igual que los idiomas, los temas funcionan mediante extensiones. Todo paquete de temas es convertido en una extensión
del tema que define. Si existen varios paquetes apuntando al mismo tema, los dos coexistirán como dos extensiones del
mismo tema.

Una gran diferencia a los idiomas es que las extensiones de los temas **no tienen prioridad**. *JavaFX* sigue el
[estándar CSS para la prioridad de las definiciones](
https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#how_is_specificity_calculated), por lo que una capa de
prioridades más es innecesaria.