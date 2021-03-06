---
sidebar_position: 6
---

# Estructura del simulador

La interfaz del simulador es muy similar a la interfaz del editor.

Para crear una simulaci贸n, pulsa el bot贸n `ensamblar` 馃敤 en la **barra de herramientas** del editor.

:::caution Configuraciones

Necesitas seleccionar una configuraci贸n antes de crear una simulaci贸n.

:::

![Simulator](/img/docs/getting-started/simulator-es.png)

## Nodos

Igual que en el editor, la interfaz del simulador est谩 basada en nodos. Estos nodos se pueden desplegar, mover y
configurar como desees.

## Barra de herramientas

La **barra de herramientas** del simulador contiene los botones que permite controlar la ejecuci贸n del c贸digo.

Actualmente, existen cuatro botones en la barra de herramientas:

- `Ejecutar todas las instrucciones`: ejecuta todo el c贸digo posible. Este bot贸n se convierte en el bot贸n 'parar' cuando
  el c贸digo se est谩 ejecutando.
- `Ejecutar un paso`: ejecuta 煤nicamente un ciclo del simulador.
- `Deshacer un paso`: deshace un ciclo del simulador. Este bot贸n estar谩 deshabilitado si los eventos est谩n desactivados
  en la configuraci贸n. Tambi茅n requiere que la opci贸n *permitir deshacer pasos* est茅 habilitada en la configuraci贸n.
- `Reiniciar`: reinicia el simulador.

En la barra de herramientas tambi茅n encontramos una barra deslizadora. Esta barra deslizadora permite regular el
**retraso por ciclo** del simulador.