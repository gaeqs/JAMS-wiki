---
sidebar_position: 3
---

# Estructura del editor

La interfaz del editor de JAMS es muy similar a las interfaces de los IDEs más modernos.

## Nodos

Todas las herramientas están encapsuladas en **nodos**. Cada nodo se puede desplegar en los laterales del editor. Más
concretamente, se pueden desplegar dos nodos a cada lado del editor.

![Editor](/img/docs/getting-started/emptyProject-es.png)

:::tip Desplegar en una ventana

Los nodos también se pueden configurar para que se desplieguen en una ventana aparte. Esto permite poder desplegar un
número indefinido de nodos al mismo tiempo.

Usa el botón secundario del ratón en un nodo para elegir su modo de despliegue.

:::

![Editor](/img/docs/getting-started/detachedNodes-es.png)

## Menú superior

El menú superior del editor de JAMS funciona de manera idéntica a cualquier otro programa. Actualmente, encontramos
cinco secciones en el menú:

- **Archivo**: nos permite crear o abrir nuevos proyectos, además de acceder a la configuración.
- **Editar**: nos permite acceder a los comandos del editor de texto.
- **Simulación**: nos permite acceder a los comandos de simulación.
- **Herramientas**: nos permite habilitar o deshabilitar los nodos del editor o simulador.
- **Ayuda**: nos permite acceder a información sobre JAMS.

## Proyectos abiertos

Justo debajo del menú superior nos encontramos la lista de proyectos abiertos. Cada proyecto está representado por una
pestaña, lo que facilita cambiar fácilmente entre proyectos abiertos. Si cerramos la pestaña, cerramos el proyecto.

Si cerramos todos los proyectos, JAMS cerrará el editor y nos trasladará a la ventana de inicio.

## Secciones del proyecto

Cada proyecto presenta una lista de pestañas con todas las secciones que tiene abiertas.

Normalmente, la primera pestaña representa el editor del proyecto, mientras que las siguientes representaran las
simulaciones que se vayan creando.

![Editor and its simulations](/img/docs/getting-started/assembledProject-es.png)

Cada sección tiene su propia `barra de herramientas`. Esta barra está situada a la izquierda de la lista de secciones.
Esta barra permite ejecutar acciones relacionadas con la sección actual.

## Barra inferior

La sección inferior del editor es común a todas las secciones. En esta, se informa del último mensaje escrito en el
informe. A la izquierda también se muestra la memoria que está usando actualmente JAMS.

:::tip Recolector de basura

JAMS está creado en Java, por lo que usa un recolector de basura. Podemos forzar el paso del recolector de basura
pulsando el panel que informa sobre el uso de memoria.

:::