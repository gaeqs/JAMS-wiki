---
sidebar_position: 1
---

# Introducción

JAMS es un IDE moderno especializado en lenguajes ensamblador. Concretamente, JAMS ha sido diseñado para el lenguaje
ensamblador MIPS, y se puede extender su funcionamiento con el uso de plugins.

![Jams](/img/JAMS-1.png)

## Diseño

JAMS es un IDE basado en **proyectos**. Un proyecto está formado por una carpeta y las siguientes propiedades:

- **Tipo del proyecto**: especifica el tipo de proyecto. Actualmente solo puede tomar el valor "MIPS" si no se añaden
  plugins.
- **Propiedades del proyecto**: valores necesarios por el tipo de proyecto. Configuran aspectos concretos y generales de
  todo el proyecto.
- **Configuraciones**: especifican las propiedades de una **ejecución** del proyecto. Es decir, configuran el simulador. Un
  proyecto puede tener varias configuraciones.