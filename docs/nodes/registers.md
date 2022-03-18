---
sidebar_position: 11
---

# Registers

The "registers" tool shows information about the registers of a simulation.

![Registers](/img/docs/nodes/registers.png)

## Functionalities

The tool consists of a table where the registers are represented by four columns: the identifier, the canonical name and
the actual value in decimal and hexadecimal.

Coprocessor 0's registers have one more value: the 'sel' sub-identifier.

Coprocessor 1's registers show their value in floating point instead of decimal.

:::tip Locked registers

In advanced architectures, registers can be locked by an instruction. When this happens, a lock 🔒 appears along the
identifier.

:::

## Editing values

You can edit the value of a register double-clicking its value or hexadecimal value field. You can input a decimal,
hexadecimal, octal or binary value.

When you're editing a coprocessor 1's register, you can also input the value as a floating point number.