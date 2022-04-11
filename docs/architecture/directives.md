---
sidebar_position: 6
---

# Directives

Directivas are instructions the assembler executes when a project is assembled. Directives allow the developer to
reserve memory (with data or without data), to define the assembly flow, to define macros and equivalents and other
basic operations.

The JAMS preprocessor can be considered a primitive and basic version of
the [C preprocessor](https://gcc.gnu.org/onlinedocs/cpp/).

## Directive implementation

Unlike instructions, directives are defined by only one class extending `Directive`.

A directive implementation can override the following methods:

- `onDiscovery`: this method is invoked when the directive is found in the discovery step of an assembler.
- `onExpansion`: this method is invoked when the directive is found in the expansion step of an assembler.
- `onAddressAssignation`: this method is invoked in the address assignation step. If the directive allocates memory or
  executes any memory operation, this method should return the start address of the directive.
- `onMemoryAssignation`: this method is invoked in the memory assignation step.

:::caution States

Directive implementations **mustn't store state information**. All the directive must be solved locally in the
overridden methods.

:::

As an example, an implementation of the `.space` directive may be the following:

```java
public class DirectiveSpace extends Directive {

    public static final String NAME = "space";
    private static final DirectiveParameterType[] PARAMETERS = {DirectiveParameterType.POSITIVE_INT};

    public DirectiveSpace() {
        super(NAME, PARAMETERS, false, false, true);
    }

    @Override
    public OptionalInt onAddressAssignation(MIPS32AssemblerLine line, String[] parameters, String rawParameters) {
        if (parameters.length != 1)
            throw new AssemblerException(line.getIndex(), "." + NAME + " must have one parameter.");

        if (!NumericUtils.isInteger(parameters[0]))
            throw new AssemblerException(parameters[0] + " is not a number.");
        int i = NumericUtils.decodeInteger(parameters[0]);
        if (i < 0) throw new AssemblerException(i + " cannot be negative.");

        MIPS32AssemblerData data = line.getAssembler().getAssemblerData();
        data.align(0);
        int start = data.getCurrent();
        data.addCurrent(i);
        return OptionalInt.of(start);
    }

}
```

## Directive sets

Directives are grouped by **directive sets**. Just like instruction sets, a project will have a directive set assigned.
Directive sets are managed by the `DirectiveSetManager`.