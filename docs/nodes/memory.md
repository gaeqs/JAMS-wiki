---
sidebar_position: 4
---

# Memory

La herramienta "memoria" permite visualizar la información que contiene la memoria y las cachés de un simulador
actualmente.

![Memory](/img/docs/nodes/memory-es.png)

## Functionalities

### Memory selector

The first combobox allows selecting which memory is being displayed. The memory list is sorted by level, being the first
memory the L1 cache memory. If the simulation has no cache memories, the combobox will only show the main memory.

### Visualization type

The second combobox contains several visualization options for the values of the memories.

The available options are the following:

- **Binary**: shows the value in binary.
- **Characters**: shows the value as four ASCII characters.
- **Decimal**: shows the value in decimal. This is the default option.
- **Double**: shows the value as a double. The most significant part is the value of the next memory address.
- **English text**: shows the value as an english text.
- **Float**: shows the value as a float.
- **Hexadecimal**: shows the value in hexadecimal.
- **Long**: shows the value as a 64-bit number. The most significant part is the value of the next memory address.
- **Octal**: shows the value in octal.
- **RGB**: shows the value as an RGB color. The eight most significant bits are ignored.
- **RGBA**: shows the value as an RGBA color.
- **Roman**: shows the value as a roman number.

### Movement

You can move through the tool in three different ways:

- Selecting a section in the third combobox.
- Inserting a concrete memory address.
- Using the movement arrows.

### Editing values

You can edit any value from any memory double-clicking on its field. The value you input can be represented in binary,
octal, decimal or hexadecimal.