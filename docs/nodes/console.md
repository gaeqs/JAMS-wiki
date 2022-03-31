---
sidebar_position: 7
---

# Console

The console prints the application's messages and allows the user to send messages the simulation can interprete.

![Console](/img/docs/nodes/console.png)

## Functionalities

The console is the intermediate between the user and the application.

### Visualizer

The visualizer shows all messages the application prints using syscalls.
It also shows the result of the execution when the simulation finishes.¡

### Input

The console allows the user to send messages to the application using the text field at the bottom of the tool.
Messages will be stored in a **message queue** until the simulation requires them.

The user can delete messages from the queue clicking on them.

### Toolbar

The console has three buttons used to perform several actions:
- `C`: clears the console.
- `Ci`: clears the message queue.
- `▼`: when enabled, the console will scroll at the end of the visualizer when a new message is printed.