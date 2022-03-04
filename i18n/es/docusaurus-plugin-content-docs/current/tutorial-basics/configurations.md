---
sidebar_position: 4
---

# Configuraciones

Una configuración define cómo un proyecto debe ser simulado. Un proyecto puede tener varias configuraciones. Un usuario
debe especificar una configuración antes de poder crear una simulación.

La configuración actual se puede cambiar en la `barra de herramientas` de la estructura del proyecto. Las
configuraciones se pueden modificar pulsando el `botón de configuraciones` ⚙.

![Configurations' menu](/img/docs/getting-started/configurations-es.png)

Desde esta ventana podemos crear, eliminar, copiar y modificar configuraciones. Las configuraciones se guardarán
automáticamente al cerrar la ventana.

:::tip Información sobre los parámetros

Los parámetros de las configuraciones contienen descripciones que informan sobre su efecto en la simulación. Mantén el
ratón encima de un parámetro para poder verla.

:::

## Llamadas al sistema

Las configuraciones guardan las llamadas del sistema que el simulador puede usar.

![Configuration's syscalls](/img/docs/getting-started/syscalls-es.png)

En este menú se pueden añadir, eliminar y modificar llamadas al sistema.

### Conjuntos

Si necesitas un conjunto de llamadas de sistema en concreto, puedes cargar un conjunto usando el botón `cargar conjunto`
y su desplegable. Por defecto, el conjunto de configuraciones cargado es el del simulador **MARS**.

## Cachés

Igual que las llamadas al sistema, las configuraciones definen las cachés que el simulador va a usar.

![Configuration's caches](/img/docs/getting-started/caches-es.png)

A diferencia que en otros simuladores, las cachés están totalmente integradas en la simulación, actuando de envoltorio
de otra memoria. Esto permite definir **varios niveles de cachés**, actuando una sobre otra.

En el caso de la imagen, la caché 0 actúa de envoltorio de la caché 1, mientras que la caché 1 actúa de envoltorio de la
memoria.

:::note Tipos de caché

JAMS permite definir cachés tres tipos diferentes: correspondencia directa, asociativa y asociativa por conjuntos.

Todos los tipos de caché soportan tanto el modo *write-back* como el modo *write-through*.

:::