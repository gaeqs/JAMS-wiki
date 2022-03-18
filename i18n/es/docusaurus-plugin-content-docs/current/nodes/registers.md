---
sidebar_position: 11
---

# Registros

La herramienta de registros muestra información sobre los registros de la simulación.

![Registers](/img/docs/nodes/registers-es.png)

## Funcionalidades

La herramienta consiste en una tabla de registros que muestran 4 valores: el identificador del registro, su nombre
canónico su valor actual en decimal y hexadecimal.

En el caso de los registros del coprocesador 0, también se muestra el sub-identificador `sel`.

En el caso de los registros del coprocesador 1, el valor se muestra en coma flotante y no en decimal.

:::tip Registros bloqueados

En arquitecturas avanzadas, los registros pueden ser bloqueados por una instrucción. Cuando un registro está bloqueado,
un candado 🔒 aparecerá junto con el identificador.

:::

## Editar valores

Se pueden editar los valores haciendo doble clic en la casilla de valor o valor hexadecimal del registro a editar. Al
editar, puedes insertar un valor en decimal, hexadecimal, octal o binario.

En el caso de los registros del coprocesador 1, también se pueden insertar valores en coma flotante.