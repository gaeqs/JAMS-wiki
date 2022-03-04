---
sidebar_position: 3
---

# Editor structure

The JAMS's editor interface is very similar to the ones present in modern IDEs.

## Nodes

All tools are encapsulated in **nodes**. Each node can be unfolded to the sides of the editor.

![Editor](/img/docs/getting-started/emptyProject.png)

:::tip Unfold in a window

Nodes can be configured to be unfolded in a separated window. This allows to unfold a undefined amount of nodes at the
same time.

Use the secondary button of the mouse to select an unfold mode.

:::

![Editor](/img/docs/getting-started/detachedNodes.png)

## Main menu

JAMS's main menu works just like any other application. Currently, the main menu contains five sections:

- **File**: it allows us to create and open projects. It also allows to open the settings window.
- **Edit**: it shows the text editor commands.
- **Simulation**: it shows the simulation commands.
- **Tools**: it allows us to enable or disable nodes.
- **Help**: it allows us to access to information about JAMS.

## Open projects

Just below the main menu can find the open projects. Every project is represented by a tab. This allows to switch
between projects easily. If we close a tab, we close the project.

If we close all projects, JAMS will close the editor and open the start window.

## Sections

Each project contains a list of tabs with all its sections. Usually, the first tab represents the project's editor,
while the other tabs represents the simulations.

![Editor and its simulations](/img/docs/getting-started/assembledProject.png)

Each section has its own `toolbar`. This toolbar is located at the right of the section list.

This toolbar allows us to run actions related to the current section.

## Bottom bar

The bottom bar is common to all sections. Here we can read the last messages present in the log. At the right, we can
find the memory used by JAMS.

:::tip Garbage collector

JAMS was built in Java, so it uses a garbage collector. We can force it to run clicking on the panel that shows the used
memory.

:::