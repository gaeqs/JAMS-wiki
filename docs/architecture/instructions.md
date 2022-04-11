---
sidebar_position: 5
---

# Instructions

Instructions are the most important part of an assembly language. JAMS manages instructions in a modular way.

## Structure

All instructions implement the `Instruction` interface. This interface defines basic instructions' concepts, such as the
name, the mnemonic, the documentation or the parameters.

This interface also defines the `match` methods, used to check whether a mnemonic and a set of parameters represent an
instruction. The assembler uses these methods to know which instruction defines a line.

Finally, the interface also defines the `assemble` method. It translates the instruction in a set of assembled
instructions. This method must be implemented by the classes that implement this interface.

This interface is implemented by two basic abstract classes: `BasicInstruction` and `PseudoInstruction`.

### Basic instructions

Basic instructions represent regular assembler's instructions. These instructions have a direct translation to machine
code. The `BasicInstruction` class defines more concrete elements, such as the operation code, the arithmetic-logic unit
the instruction must be executed and a new `match` method that can be invoked to know whether an instruction code is
represented by the invoked basic instruction.

This class also defines the `assembleBasic` and `assembleFromCode` abstract methods. These methods are used to create an
assembled instruction from an instruction code or a ser of parameters.

The `assembled` method explained before is implemented by this class.

:::danger Required global constants

All basic instructions must have two defined global constants:

- **MNEMONIC**: a `String` that defines the instruction's mnemonic.
- **PARAMETER_TYPES**: A `InstructionParameterTypes` element that defines the instruction's parameter types.

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

### Pseudo-instructions

Pseudo-instructions are instructions the assembler will translate into a set of basic instructions.

These instructions are represented by the `PseudoInstruction` class. This abstract class defines
the `getInstructionAmount` method, that returns, given a set of parameters, the number of basic instructions a
pseudo-instruction will be translated into.

This class also implements several static methods that help on the implementation of pseudo-instructions.

For example, the implementation of the `addi` pseudo-instruction is the following:

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

## Assembled instructions

The `AssembledInstruction` class represents an assembled instruction. This class stores the integer that represents the
instruction code of an instruction, the instruction that created the assembled instruction (it can be a basic
instruction or a pseudo-instruction) and the basic instruction that represents this assembled instruction.

These classes are only used to store information about an instruction. Child classes can define helper methods the child
class can use to fetch parameters.

## Instruction executions

Instructions are also defined by a `InstructionExecution` class. This class implements an instruction's execution in an
architecture. It also implements several helper methods execution implementations can use.

The `InstructionExecution` class cannot be extended directly. An implementation must extend `SingleCycleExecution` for
single-cycle executions and `MultiCycleExecution` for multi-cycle or pipelined executions.

These executions must be registered in the instruction using the `addExecutionBuilder` method.

## Instruction sets

Instructions are grouped by **instruction sets**. A project will use an instruction set to assemble its code, to help
the user on the editor and to interprete machine code in the simulator. Instruction sets are managed by
the `InstructionSetmanager`.