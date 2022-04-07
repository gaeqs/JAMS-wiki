---
sidebar_position: 4
---

# Ensamblador MIPS32

El ensamblador MIP32 de JAMS es un ensamblador avanzado usado para ensamblar proyectos MIPS32.

Este ensamblador soporta características avanzadas usadas comúnmente al programar en ensamblador, como las macros, las
etiquetas globales o las referencias relativas.

## Procedimiento

El ensamblador ensambla el código de un proyecto en **cuatro** pasos: **descubrimiento**, **expansión**, **asignación de
direcciones** y **asignación de valores**.

Se usará el siguiente programa para comentar los diferentes pasos del ensamblador:

```
	.macro print ( %string )
	.data
text:	.asciiz %string
	.text 
	la $a0, text
	li $v0, 4
	syscall
	.endmacro
	
	.macro printJams ()
	print ("Welcome to JAMS!\n")
	.endmacro
	
	.text
	.globl main print
main:	
local:	 
	printJams ()
```

### Descubrimiento

En este paso el texto del proyecto se descompone en sus primitivas, permitiendo al ensamblador entender los diferentes
componentes de cada línea.

Al final de este paso, las etiquetas globales y las etiquetas de archivo (etiquetas no definidas dentro de una macro)
son registradas sin ningún valor asignado.

Las macros de cada archivo también son registradas. El identificador de una macro es definido por su nombre concatenado
al número de parámetros que necesitan. Este procedimiento se realiza para dar soporte a la sobrecarga de macros. En el
caso de la macro `print`, su identificador sería `print-1`.

```
Etiquetas globales:
main - XXXXXXXX

Etiquetas del archivo:
local - XXXXXXXX

Macros globales:
print-1

Macros del archivo:
printJams-0
```

### Expansión

En este paso, las llamadas macros son invocadas, insertando el código de la macro en la posición de la llamada. Este
código realiza el primero paso del ensamblador mientras es añadido. Al ser insertado justo después de la llamada, el
código de la macro también será expandido.

:::info Alcance

Las etiquetas y macros que están dentro de una macro tienen un alcance diferente al del archivo. Si la macro es global,
el alcance es considerado hijo del alcance global y no podrá acceder a las etiquetas del archivo que lo invoca. Si la
macro es local, el alcance es considerado hijo del alcance del archivo.

Cuando un alcance es hijo de otro alcance, el hijo podrá acceder a las etiquetas y macros de su padre. El hijo también
podrá definir nuevas etiquetas y macros con el mismo identificador que una etiqueta o macro de su padre. Aunque este
comportamiento está permitido, el hijo solo podrá acceder al elemento que él define. Esta funcionalidad es
llamada `ocultamiento` o `shadowing`.

:::

```
main:	
local:	
	# Macro printJams-0
	# Macro print-1
	.data # Data returns the previous address.
text:	.asciiz "Welcome to JAMS!\n"
	.text
	la $s0, text
	li $v0, 4
	syscall
	# Endmacro print-1
	# Endmacro printJams-0
```

### Asignación de direcciones

Una vez el ensamblador haya expandido las macros, se asignan las direcciones de todas las instrucciones, etiquetas y
directivas que requieran dirección.

```
main:	
local:	
                	# Macro printJams-0
                	# Macro print-1
                	
0x00400000          .data # Data returns the previous address.
0x10010000      text:    .asciiz "Welcome to JAMS!\n"
0x10010010          .text

                    # la is a pseudo-instruction and 
                    # it will be split in two instructions 
0x00400000          la $s0, text
0x00400008          li $v0, 4
0x0040000c          syscall

                    # Endmacro print-1
                    # Endmacro printJams-0
```

### Asignación de valores

Como paso final, el ensamblador insertará en memoria los valores que representan las directivas e instrucciones.

```
                	# Macro printJams-0
                	# Macro print-1
                	
0x10010000          Welcome to JAMS!\n\0
0x00400000          0x3c011001 # la $a0, text
0x00400004          0x34240000
0x00400008          0x24020004 # li $v0, 4
0x0040000c          0x0000000c # syscall

                    # Endmacro print-1
                    # Endmacro printJams-0
```

## Características avanzadas

El ensamblador permite el uso de técnicas avanzadas en el desarrollo de aplicaciones ensamblador.

### Referencias relativas

Una directiva o instrucción puede referenciar a una etiqueta de manera relativa con las referencias especiales
`+` y `-`.

La referencia `+` hace referencia a la etiqueta siguiente. La referencia `-` hace referencia a la etiqueta anterior.

:::caution Alcance con referencias relativas

Las referencias relativas solo pueden hacer referencia a etiquetas **del mismo alcance**. No pueden hacer referencia a
etiquetas de un alcance mayor.

:::

```
main:	
	li $s0, 0
	li $s1, 10
loop:	
	printJams ()
	addi $s0, $s0, 1
	bne $s0, $s1, -
```

### Macros anidadas.

Una macro puede ser definida dentro de otra macro. Esto es conocido como una **macro anidada**. Esta macro solo podrá
ser accedida en el alcance de la macro en la que está declarada.

```
	.macro printJams ()
	.macro print (%string)
	.data
text:	.asciiz %string
	.text
	la $a0, text
	li $v0, 4
	syscall
	
	.endmacro
	print ("Welcome to JAMS!\n")
	.endmacro
```