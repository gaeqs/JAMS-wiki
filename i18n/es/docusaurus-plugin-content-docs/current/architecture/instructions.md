---
sidebar_position: 5
---

# Instrucciones

Las instrucciones son la parte más importante de un lenguaje ensamblador. JAMS permite crear y gestionar instrucciones
de una manera modular.

## Estructura de una instrucción.

Todas las instrucciones implementan la interfaz `Instruction`. Esta interfaz define conceptos básicos de una
instrucción, como su nombre, su mnemónico, su documentación o sus parámetros.

Esta interfaz también define los métodos `match`, usada para comprobar si un mnemónico y un conjunto de parámetros
representan una instrucción. Estos métodos son utilizados por el ensamblador para saber qué instrucción define una
línea.

Por último, la interfaz define el método `assemble`, el cual traduce la instrucción en un conjunto de instrucciones
ensambladas. Este método debe ser implementado por las clases hijas.

Esta interfaz es implementada por dos clases abstractas básicas: `BasicInstruction` y `PseudoInstruction`.

### Instrucciones básicas

Las instrucciones básicas (representadas por la clase abstracta `BasicInstruction`) representan instrucciones normales
del ensamblador. Estas instrucciones tienen una traducción directa a código máquina. Esta clase abstracta define
elementos más concretos, como el código de operación, la unidad aritmético-lógica donde la instrucción debe ejecutarse y
un nuevo método `match` que permite saber si un código de instrucción representa la instrucción.

Esta clase define los métodos abstractos `assembleBasic` y `assembleFromCode`. Estos métodos permiten crear un elemento
de tipo `AssembledInstruction` mediante un código de instrucción o un conjunto de parámetros.

El método `assemble` de la interfaz `Instruction` está implementada por esta clase.

:::danger Constantes globales necesarias

Todas las instrucciones básicas requieren dos constantes globales en su implementación:

- **MNEMONIC**: `String` que define el mnemónico de la instrucción.
- **PARAMETER_TYPES**: Elemento de tipo `InstructionParameterTypes` que representa los tipos de los parámetros de la
  instrucción.

```java
public class InstructionAbsDouble extends BasicRFPUInstruction<InstructionAbsDouble.Assembled> {

    public static final String MNEMONIC = "abs.d";
    public static final InstructionParameterTypes PARAMETER_TYPES = new InstructionParameterTypes(
            ParameterType.EVEN_FLOAT_REGISTER,
            ParameterType.EVEN_FLOAT_REGISTER
    );   
    ...
}
```

:::

### Pseudo-instrucciones

Las pseudo-instrucciones son instrucciones que el ensamblador convertirá en un conjunto de instrucciones básicas. Pueden
considerarse un conjunto de instrucciones que ejecutan una acción común.

Estas instrucciones están representadas por la clase `PseudoInstruction`, la cual define el
método `getInstructionAmount`. Este método le permite saber al ensamblador cuántas instrucciones debe esperar que la
pseudo-instrucción dé como resultado dependiendo del conjunto de parámetros dado.

Esta clase implementa varios métodos estáticos que sirven de utilidad para implementar pseudo-instrucciones rápidamente.

Como ejemplo, la implementación de la pseudo-instrucción `addi` sería la siguiente:

```java
public class PseudoInstructionAddi extends PseudoInstruction {

    public static final String MNEMONIC = "addi";

    public static final InstructionParameterTypes PARAMETER_TYPES = new InstructionParameterTypes(
            ParameterType.REGISTER,
            ParameterType.REGISTER,
            ParameterType.SIGNED_16_BIT
    );

    public PseudoInstructionAddi() {
        super(MNEMONIC, PARAMETER_TYPES);
    }

    @Override
    public int getInstructionAmount(String[] parameters) {
        return 2;
    }

    @Override
    public AssembledInstruction[] assemble(
            InstructionSet set,
            int address,
            ParameterParseResult[] parameters
    ) {
        var instructions = instructions(set,
                InstructionAddiu.class, InstructionAdd.class);

        var addiu = parameters(AT, ZERO, parameters[2]);
        var add = parameters(parameters[0], AT, parameters[1]);

        return assemble(instructions, addiu, add);
    }
}
```

## Instrucciones ensambladas

La clase `AssembledInstruction` representa una instrucción ensamblada. Esta clase guarda el entero que representa el
código de instrucción, la instrucción que ha creado la instrucción ensamblada (puede ser una instrucción básica o una
pseudo-instrucción), y la instrucción básica que representa.

Este tipo de elementos sirve únicamente para guardar la información sobre la instrucción. Las clases hijas
de `AssembledInstruction` pueden definir métodos útiles que permiten sacar parámetros del código de instrucción.

## Ejecución de una instrucción

Por último, las instrucciones también están definidas por una clase `InstructionExecution`. Esta clase implementa la
ejecución de una instrucción en una arquitectura, e implementa muchos métodos útiles que los hijos pueden usar para
definir la ejecución de sus instrucciones.

La clase `InstructionExecution` no debe ser extendida directamente, sino que se debe extender la
clase `SingleCycleExecution` para ejecuciones uni-ciclo y `MultiCycleExecution` para ejecuciones multi-ciclo o
segmentadas.

Estas ejecuciones deben ser registradas en la instrucción usando el método `addExecutionBuilder`.

## Conjuntos de instrucciones

Las instrucciones están agrupadas en **conjuntos de instrucciones**. Un proyecto usará un conjunto de instrucciones para
ensamblar su código, ayudar al usuario en el editor e interpretar el código máquina del simulador. Los conjuntos de
instrucciones están gestionados por el gestor `InstructionSetManager`.