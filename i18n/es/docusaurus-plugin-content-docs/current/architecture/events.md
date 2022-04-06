---
sidebar_position: 3
---

# Eventos

JAMS incluye un sistema de eventos que permite informar de sucesos entre componentes de la aplicación. Este sistema está
profundamente inspirado en el sistema de eventos usado por la comunidad de *Minecraft* en proyectos
como [Spigot](https://www.spigotmc.org/) o [Sponge](https://www.spongepowered.org/), y puede considerarse una evolución
descentralizada de esta tecnología.

## Emisores de eventos

Los emisores de eventos son los encargados de relacionar los creadores de eventos con sus escuchadores. Un emisor de
evento está representado por la interfaz `EventBroadcast`. Esta interfaz es implementada por cualquier elemento que
quiera ser usado para registrar escuchas (Gestores, plugins, o el propio JAMS implementan un emisor).

La clase `SimpleEventBroadcast` contiene una implementación de `EventBroadcast` que se puede usar como superclase.

## Definir escuchas

Las escuchas son métodos no estáticos anotados con la anotación `@Listener`. Estos métodos solo tienen un parámetro que
pide un elemento que extienda la clase `Event` y deben devolver `void`.

```java
@Listener
private void onLanguageRegister(ManagerElementRegisterEvent.After<Language> event) {
    System.out.println("New language available! " + event.getElement().getName());
}
```

Este método, después de ser registrado en un [gestor](managers) de idiomas, se ejecutará cuando un nuevo idioma sea
añadido al gestor.

:::tip Genéricos

A diferencia de otros sistemas de eventos similares, el sistema de eventos de JAMS permite usar eventos genéricos. Un
ejemplo es el caso anterior, donde el método pide un elemento de tipo `ManagerElementRegisterEvent.After<Language>`.

Si el emisor al que está registrado emite un evento de tipo `ManagerElementRegisterEvent.After<Theme>`, la escucha **no**
será invocada.

:::

:::tip Herencias

Un evento puede extender la clase de otro evento. Esto permite generar una jerarquía de eventos. Una escucha que pide un
cierto tipo de evento se ejecutará siempre que dicho evento o uno de sus hijos ocurra.

Si una escucha pide el evento `Event`, su método se ejecutará siempre que un evento ocurra.

:::

## Registrar escuchas

Una vez se tenga una escucha definida, esta se puede registrar en uno o varios emisores de eventos.

Al ser las escuchas no estáticas, toda escucha registrada en un emisor está ligada al evento con el que debe ser
invocado. Esto añade una gran flexibilidad al sistema, permitiendo que un elemento registre escuchas dependiendo de su
estado.

El método más usado para registrar escuchas es el método `registerListeners(Object, boolean)`. Este método buscará en el
objeto todos los métodos con la etiqueta `@Listener` que pidan un evento y devuelvan `void`. Esta búsqueda incluye a
**todos** los métodos definidos en el objeto, incluyendo métodos privados y métodos de las superclases.

El booleano `useWeakReferences` permite registrar la escucha usando una **referencia débil**. Si este booleano es falso,
el objeto usado para el registro quedará en memoria aunque todas sus referencias cesen de existir, por lo que se debe
eliminar el registro de manera manual. La referencia débil elimina este paso, borrándose el registro automáticamente
cuando el elemento deje de ser referenciado.

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

Si se desea, se puede registrar una única escucha del objeto. Este método requiere conocimientos de la
librería `reflection` de Java:

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

Para eliminar los registros, se han de usar los métodos análogos `unregisterListeners` y `unregisterListener`.

## Eventos cancelables

Algunos eventos implementan la interfaz `Cancellable`, lo cual permite cancelar el evento. Las escuchas restantes no
serán llamadas cuando un evento es cancelado salvo que `ignoreCancelled` sea `true`.

## Parámetros avanzados

La etiqueta `@Listener` permite definir comportamientos más avanzados en la escucha.

```java
@Listener(priority = 20, ignoreCancelled = true)
private void onLanguageRegister(ManagerElementRegisterEvent.After<Language> event) {
    System.out.println("New language available! " + event.getElement().getName());
}
```

El parámetro `priority` permite definir la prioridad de la escucha. La escucha con un número más alto será la primera en
ser llamada.

El parámetro `ignoreCancelled` es un booleano que le da a la escucha la capacidad de ser llamada incluso cuando un
evento ha sido cancelado.