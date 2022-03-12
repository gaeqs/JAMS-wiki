---
sidebar_position: 5
---

# Caches

The "caches" tool shows information about the simulation's caches.

![Caches](/img/docs/nodes/caches.png)

## Cache selection

The combobox at the top of the tool allows changing the current cache.

:::tip Visualización de datos

In this tool you cannot see or edit the current data of the cache. These operations can be performed in
the [memory tool](memory). En esta herramienta no se pueden ver ni editar los datos actuales de la caché. Esas

:::

## Stats

In this tab are shown the operations, hits and misses of the current caches.

You can reset the current cache clicking on the `Reset caches` button.

## Log

In the log, you can see the actions the current cache has performed and whether they have missed or hit.

![Caches log](/img/docs/nodes/cachesLog.png)

:::caution The log is not reset automatically.

The log is not deleted when a simulation is reset or a step is undone. The tool is designed this way to allow the easy
visualization of cache changes.

You can delete a cache's log clicking on the 'Clear log' button or delete all caches' logs clicking on the 'Clear all
logs' button.

:::