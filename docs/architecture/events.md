---
sidebar_position: 3
---

# Events

JAMS includes an event system that informs about events between components. This system is deeply inspired by event
systems used by the Minecraft community on projects such as  [Spigot](https://www.spigotmc.org/) or
[Sponge](https://www.spongepowered.org/), and it can be considered a decentralized evolution of this technology.

## Event broadcasts

Event broadcasts links event generators to listeners. An event broadcast is represented by the
`EventBroadcast` interface. This interface is implemented by any component that wants to be used as a listener register.
Managers, plugins and JAMS itself implement an event broadcast.

The `SimpleEventBroadcast` class contains an implementation of `EventBroadcast` that can be used as a superclass.

## Defining listeners

A listener is a non-static method annotated with the `@Listener` annotation. These methods can only have a parameter of
a type that extends `Event` and they must return `void`.

```java
@Listener
private void onLanguageRegister(ManagerElementRegisterEvent.After<Language> event) {
    System.out.println("New language available! " + event.getElement().getName());
}
```

This method, after it is registered in a [manager](managers), will be invoked when a new language is added to the
manager.

:::tip Generic

Unlike other similar event systems, JAMS's event system allows the use of generics. An example is the previous code
snippet, where the method asks for a `ManagerElementRegisterEvent.After<Language>`.

If the broadcast the listener is registered on emits a `ManagerElementRegisterEvent.After<Theme>`, the listener
**won't** be invoked.

:::

:::tip Hierarchies

An event can extend another event. This allows the developer to create an event hierarchy. A listener that asks for an
event will be invoked when that event or one of its children is emitted.

If a listener asks for an `Event`, its method will be invoked when any event is emitted.

:::

## Registering listeners

Once a listener is defined, it can be registered in one or several event broadcasts.

Listeners cannot be static, so they need an object linked to them when they are registered. This object will invoke the
method when an event is emitted. This behavior grants a huge flexibility to the system, allowing an element to register
listeners depending on its state.

The best way to register a listener is using the method `registerListeners(Object, boolean)`. This method searches
inside the object for all methods with the `@Listener` annotation. This search includes **all** methods defined by the
object, including private methods and method defined by superclasses.

If the boolean `useWeakReferences` is true, listeners will be registered using a **weak reference**. If this boolean is
false, the object used to register the listener will be kept in memory when all its references are invalid, so all
listeners must be unregistered manually before that happens. The weak reference removes this step, deleting the register
automatically once all references are invalid.

```java
private void register() {
    Manager<Language> manager = Manager.of(Language.class);
    manager.registerListeners(this, true);
}

@Listener
private void onLanguageRegister(ManagerElementRegisterEvent.After<Language> event) {
    System.out.println("New language available! " + event.getElement().getName());
}
```

It is also possible to register only one method from the object. This method requires basic knowledge of
the `reflection` API:

```java
private void register() throws NoSuchMethodException {
    Manager<Language> manager = Manager.of(Language.class);
    manager.registerListener(
            this,
            this.getClass().getDeclaredMethod("onLanguageRegister", ManagerElementRegisterEvent.class),
            true
    );
}

@Listener()
private void onLanguageRegister(ManagerElementRegisterEvent.After<Language> event) {
    System.out.println("New language available! " + event.getElement().getName());
}
```

To unregister listeners, use the methods `unregisterListeners` and `unregisterListener`.

## Cancellable events

Some events implement the `Cancellable` interface. This interface allows the event to be cancelled. When an event is
cancelled, all left listeners won't be called if their `ignoreCancelled` flag is not `true`.

## Advanced parameters

The `@Listener` annotation can define more advanced behaviours on the listener.

```java
@Listener(priority = 20, ignoreCancelled = true)
private void onLanguageRegister(ManagerElementRegisterEvent.After<Language> event) {
    System.out.println("New language available! " + event.getElement().getName());
}
```

The `priority` parameter defines the priority of the listener. The listener with the biggest value will be the first to
be called.

The `ignoreCancelled` boolean grants the listener the ability to be called even if the event was cancelled. 