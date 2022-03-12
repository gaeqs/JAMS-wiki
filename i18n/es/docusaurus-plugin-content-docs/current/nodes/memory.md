---
sidebar_position: 4
---

# Memoria

La herramienta "memoria" permite visualizar la información que contiene la memoria y las cachés de un simulador
actualmente.

![Memory](/img/docs/nodes/memory-es.png)

## Funcionalidades

### Selección de memoria

El primer desplegable de la herramienta permite elegir qué memoria se desea visualizar. La lista de memorias está
ordenada por nivel, siendo la primera memoria la caché de nivel 1. Si la simulación no contiene ninguna caché, este
desplegable solo mostrará la memoria principal.

### Tipo de visualización

El segundo desplegable contiene diferentes opciones en las que los datos de la memoria se puede ver.

Las opciones disponibles son las siguientes:

- **Binario**: muestra cada valor en binario.
- **Caracteres**: muestra cada valor como un conjunto de cuatro caracteres ASCII.
- **Decimal**: muestra cada valor en decimal. Esta es la opción por defecto.
- **Coma flotante (doble precisión)**: muestra cada valor en coma flotante de doble precisión. La parte más
  representativa es el valor de la siguiente dirección de memoria.
- **Texto inglés**: muestra cada valor como un texto en inglés.
- **Coma flotante**: muestra cada valor en coma flotante.
- **Hexadecimal**: muestra cada valor en hexadecimal.
- **Long**: muestra cada valor como un número de 64 bits. La parte más representativa es el valor de la siguiente
  dirección de memoria.
- **Octal**: muestra cada valor en octal.
- **RGB**: muestra cada valor como un color RGB. El cuarto más representativo del valor queda en desuso.
- **RGBA**: muestra cada valor como un color RGBA.
- **Romano**: muestra cada valor como un número romano.

### Movimiento

Puedes moverte a través de la herramienta de diferentes maneras:

- Seleccionando una sección en el tercer desplegable.
- Insertando una dirección concreta.
- Usando las flechas de movimiento.

### Editar valores

Puedes editar cualquier valor de las memorias haciendo doble clic en su celda. El valor que puedes asignar puede estar
representado en binario, octal, decimal o hexadecimal.