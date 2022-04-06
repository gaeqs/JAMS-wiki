---
sidebar_position: 7
---

# Consola

La consola permite ver los mensajes de la aplicación e introducir valores que el simulador puede interpretar.

![Console](/img/docs/nodes/console-es.png)

## Funcionalidades

La consola actúa de intermediador principal entre el usuario y la aplicación. 

### Visualizador

El visualizador muestra los mensajes que la aplicación imprime mediante llamadas del sistema. 
También muestra el resultado de la ejecución al terminar la simulación.

### Introducción de datos

La consola permite enviar mensajes a la aplicación mediante la barra de texto de la parte inferior de la herramienta.
Los mensajes quedarán guardados en una **cola de mensajes** hasta que la simulación los lea.

El usuario puede eliminar mensajes de la cola pulsando el mensaje que quiere eliminar.

### Barra de herramientas

La consola presenta tres botones en su lateral izquierdo.

- `C`: limpia la consola.
- `Ci`: limpia la cola de mensajes.
- `▼`: si está activado, la consola se desplazará al final del visualizador siempre que un nuevo mensaje sea escrito.