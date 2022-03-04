---
sidebar_position: 4
---

# Configurations

Configurations define how a project has to be simulated. A project can have several configurations. The user must
specify a configuration before they can create a simulation.

The current configuration can be changed on the `toolbar` of the project structure. Configurations can be edited
clicking on the `configuration button` ⚙.

![Configurations' menu](/img/docs/getting-started/configurations.png)

In this window we can create, delete, copy and edit configurations. All configurations will be saved automatically when
this window is closed.

:::tip Information about parameters

The parameters contain descriptions about their effects in the simulation. Hover the mouse over a parameter
to see its description.

:::

## Syscalls

Configurations save the syscalls the simulation may use.

![Configuration's syscalls](/img/docs/getting-started/syscalls.png)

In this menu we can create, delete and edit syscalls.

### Bundles

If you need a common set of syscalls, you can load it using the button `load bundle` and its combobox. By default, the
loaded bundle is the one of the **MARS** simulator.

## Caches

Just like syscalls, configurations define the caches the simulator will use.

![Configuration's caches](/img/docs/getting-started/caches.png)

In contrast to other simulators, JAMS's caches are completely integrated in the simulator, working as a wrapper of
another memory. This allows us to define **several cache levels**, acting one over another.

In the example of the image, the cache 0 acts as a wrapper of the cache 1, while the cache 1 acts as a wrapper of the
memory.

:::note Cache types

JAMS lets define three cache types: direct mapping, associative mapping and set-associative mapping.

All three types support both the *write-back* mode and the *write-through* mode.

:::

:::info Instruction access

Caches are not affected by instruction fetches.

:::