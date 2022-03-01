---
sidebar_position: 1
---

# Introducción

JAMS es un IDE moderno especializado en lenguajes ensamblador. Concretamente, JAMS ha sido diseñado para el lenguaje
ensamblador MIPS, y se puede extender su funcionamiento con el uso de plugins.

![Jams](/img/JAMS-1.png)

## Objetivos

La creación de JAMS ha tenido los siguientes objetivos:

- Crear un IDE moderno para lenguajes ensamblador, y en concreto para el lenguaje ensamblador MIPS.
- Crear un simulador capaz de ejecutar la mayoría de programas ensamblados en MIPS.
- Crear un sistema completo de personalización, permitiendo al usuario cambiar la apariencia de la aplicación.
- Permitir a los usuarios expandir las capacidades de la aplicación mediante plugins.
- Mantener una interfaz sencilla y adecuada para la enseñanza.

## No-objetivos

JAMS no pretende lograr los siguientes objetivos:

- Crear un IDE complejo con soporte para una gran variedad de lenguajes de programación.
- Crear un entorno de desarrollo que permita crear código válido para entornos MIPS reales.

## Diseño

JAMS es un IDE basado en **proyectos**. Un proyecto está formado por una carpeta y las siguientes propiedades:

- **Tipo del proyecto**: especifica el tipo de proyecto. Actualmente solo puede tomar el valor "MIPS" si no se añaden
  plugins.
- **Propiedades del proyecto**: valores necesarios por el tipo de proyecto. Configuran aspectos concretos y generales de
  todo el proyecto.
- **Configuraciones**: especifican las propiedades de una **ejecución** del proyecto. Es decir, configuran el simulador. Un
  proyecto puede tener varias configuraciones.