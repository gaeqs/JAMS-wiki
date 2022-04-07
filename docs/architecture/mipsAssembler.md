---
sidebar_position: 4
---

# MIPS32 Assembler

The JAMS's MIPS32 assembles is the advanced assembler that assembles MIPS32 projects.

This assembler supports advanced characteristics such as macros, global labels and relative references.

## Procedure

The assembler assembles a project's code in **four** steps: **discovering**, **expansion**, **address assignation**
and **value assignation**.

The following snippet will be used to explain the steps:

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

### Discovering

In this step, the raw text of the project is split into their primitive components, allowing the assembler to understand
the composition of each line.

At the end of this step, global labels and file labels (labels not defined inside a macro) are registered with no
assigned value.

Macros are also registered here. A macro's identifier is defined by its name and the number of parameters it requires.
Thanks to this, macro overloading is supported. For example, the macro `print` in the previous snippet has the `print-1`
identifier.

```
Global labels:
main - XXXXXXXX

File labels:
local - XXXXXXXX

Global macros:
print-1

File macros:
printJams-0
```

### Expansion

Macro calls are invoked in this step, appending the macro's code at the position of the macro call. This code executes
the first assembler step when it is appended. The code is appender right after the macro call, so the macro code will
also execute this step.

:::info Scopes

Labels and macros inside a macro have a different scope. If the macro is global, the scope is considered a child of the
global scope. If the macro is local, the scope is a child of the file's scope.

When a scope is the child of another scope, the child can reach its parent's labels and macros. The child can also
define new labels and macros with the same identifier as a parent's label or macro. Even though this behavior is
allowed, the child will only be able to access the element it defines. This functionality is defined as `shadowing`.

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

### Address assignation

Once the assembled has expanded the macros, addresses for all instructions, labels and directives are assigned.

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

### Value assignation

As the final step, the assembler will insert into memory the values the directives and instructions represent.

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

## Advanced characteristics

The assembler allows the use of advanced techniques in the development of assembly applications.

### Relative references

A label can be referenced by an instruction or directive relatively using the special references `+` and `-`.

The `+` reference references the next label. The `-` reference references the previous label.

:::caution Relative references' scope

Relative references can only reference labels **on the same scope**. They cannot reference labels on the parent's scope.

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

### Nested macros

A macro can be defined inside another macro. This is known as a **nested macro**. These macros can only be reached from
the parent's scope.

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