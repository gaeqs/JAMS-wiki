---
sidebar_position: 6
---

# Simulator's structure

The simulator's interface is very similar to the editor's interface.

You can creat a simulation clicking the `build` 🔨 button on the editor's **toolbar**.

:::caution A configuration is required

You require one configuration selected to create a simulation.

:::

![Simulator](/img/docs/getting-started/simulator.png)

## Nodes

Just like in the editor, all simulator's tools are encapsulated in **nodes**. These nodes can be unfolded, moved or
configured as you wish.

## Toolbar

The simulator's **toolbar** contains the buttons required to manage the simulator's execution.

There are four buttons in the toolbar:

- `Execute all instructions`: runs the simulator. This button is transformed into the `stop` button when the simulator
  is running.
- `Execute one step`: executes one simulator's cycle.
- `Undo one step`: undoes one simulator's cycle. This button will be disabled when the events are disabled in the
  configuration. This option also requires that the *allow undoing steps* is enabled in the configuration.
- `Reset`: resets the simulation.

We can also find a slider in the toolbar. This slider allows to control the delay per cycle of the simulator. 