---
sidebar_position: 6
---

# Directivas

Las directivas son instrucciones que el ensamblador ejecuta al ensamblar un proyecto. Las directivas permiten al
desarrollador definir espacios de memoria (con datos por defecto o no), indicar el flujo del ensamblaje, definir macros
y equivalencias, entre otras funciones.

El preprocesador de JAMS se puede considerar una versión primitiva y muy básica
del [preprocesador de C](https://gcc.gnu.org/onlinedocs/cpp/).

## Implementación de una directiva

A diferencia de las instrucciones, las directivas están definidas por una única clase que extiende la clase `Directive`.

Una implementación de una directiva puede sobreescribir los siguientes métodos:

- `onDiscovery`: este método se ejecuta cuando la directiva es encontrada en la fase de descubrimiento del ensamblador.
- `onExpansion`: este método se ejecuta cuando la directiva es encontrada en la fase de expansión.
- `onAddressAssignation`: este método se ejecuta en la fase de asignación de direcciones. Si la directiva reserva
  memoria o hace operaciones con la memoria, esta debe devolver la dirección en la que empieza.
- `onMemoryAssignation`: este método se ejecuta en la fase de asignación de valores del ensamblador.

:::caution Información de estado

Las clases que implementan una directiva **no deben almacenar información de estado**. Toda la directiva debe ser
resuelta de manera local en los métodos definidos.

:::

Como ejemplo, una implementación de la directiva `.space` sería la siguiente:

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

## Conjuntos de directivas

Las directivas están agrupadas en **conjuntos de directivas**. Igual que con los conjuntos de instrucciones, un proyecto
tendrá asignado un conjunto de directivas. Los conjuntos de directivas están gestionados por el
gestor `DirectiveSetManager`.