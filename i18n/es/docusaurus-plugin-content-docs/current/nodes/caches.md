---
sidebar_position: 5
---

# Cachés

La herramienta "cachés" muestra información concreta de las cachés del simulador.

![Caches](/img/docs/nodes/caches-es.png)

## Selección de cachés

En la parte superior de la herramienta encontramos un selector con todas las cachés de nuestro simulador. Desde aquí
podemos cambiar la caché que queremos visualizar.

:::tip Visualización de datos

En esta herramienta no se pueden ver ni editar los datos actuales de la caché. Esas operaciones se pueden realizar en la
[herramienta de memoria](memory).

:::

## Estadísticas

En esta pestaña se muestran las operaciones, aciertos y fallos de la caché.

Pulsando el botón `Reiniciar cachés` se borran todos los datos de la caché actual.

## Registro

En el registro se puede ver las acciones que ha realizado la caché y si estas han acertado o fallado.

![Caches log](/img/docs/nodes/cachesLog-es.png)

:::caution El registro no se borra automáticamente

A diferencia de otras herramientas, el registro no se borra cuando se reinicia la simulación o se deshace un paso.
La herramienta está diseñada así para poder visualizar fácilmente los cambios de la caché.

Puedes borrar el registro de una caché pulsando `Borrar registro` o de todas las cachés pulsando `Borrar registros`.

:::