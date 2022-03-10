---
sidebar_position: 5
---

# Estructura del simulador

La interfaz del simulador es muy similar a la interfaz del editor.

Para crear una simulación, pulsa el botón `ensamblar` 🔨 en la **barra de herramientas** del editor.

:::caution Configuraciones

Necesitas seleccionar una configuración antes de crear una simulación.

:::

![Simulator](/img/docs/getting-started/simulator-es.png)

## Nodos

Igual que en el editor, la interfaz del simulador está basada en nodos. Estos nodos se pueden desplegar, mover y
configurar como desees.

## Barra de herramientas

La **barra de herramientas** del simulador contiene los botones que permite controlar la ejecución del código.

Actualmente, existen cuatro botones en la barra de herramientas:

- `Ejecutar todas las instrucciones`: ejecuta todo el código posible. Este botón se convierte en el botón 'parar' cuando
  el código se está ejecutando.
- `Ejecutar un paso`: ejecuta únicamente un ciclo del simulador.
- `Deshacer un paso`: deshace un ciclo del simulador. Este botón estará deshabilitado si los eventos están desactivados
  en la configuración. También requiere que la opción *permitir deshacer pasos* esté habilitada en la configuración.
- `Reiniciar`: reinicia el simulador.

En la barra de herramientas también encontramos una barra deslizadora. Esta barra deslizadora permite regular el
**retraso por ciclo** del simulador.