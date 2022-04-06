---
sidebar_position: 2
---

# Managers

JAMS's architecture is manager-based. A manager can be defined as a set of elements tools can use.

## Manager types

JAMS provides three basic manager types.

### Basic managers

Implemented by the class `Manager`. It Contains a set of elements without any hierarchy.

### Managers with a default value

Behaves as a normal manager, with the difference that one of its values is the default value. These managers extend the
class `DefaultValuableManager`.

### Managers with a selected value

Behaves as a manager with a default value, with the difference that one of its values is selected. When the selected
value is deleted, the default value is selected. These managers extend the class `SelectableManager`.

## Providers

Every element stored in a manager is linked to the provider that created it. A provider can be a plug-in or JAMS itself.
When a provider is detached from the application, all elements provided by it are removed from all managers.

## Registry

The registry is a static element inside the application. It can be interpreted as a manager of mangers. With the
registry you can get, add, remove or modify attached managers. Just like a normal manager, when a provider is detached
from the application, all provided managers are removed from the registry.

### Primary and secondary managers

JAMS classify managers into primary managers and secondary managers.

Primary managers can be accessed easily when a manager is being searched using its type using methods
like `Manager.of(Type.class)`. There can only be one primary manager for each type.

To search secondary manager, its name must be given explicitly: `Jams.REGISTRY.of("other-manager", Type.class)`.

## Accessing managers

There are two ways of accessing a manager: using the registry or using the shortcuts found in the class `Manager`.

```java
// Returns the primary manager that manages languages.
Manager<Language> simpleLanguageManager = Manager.of(Language.class);
simpleLanguageManager = Jams.REGISTRY.of(Language.class);

// Returns the primary selectable manager that manages languages.
SelectableManager<Language> selectableLanguageManager = Manager.ofS(Language.class);
selectableLanguageManager = (SelectableManager<Language>) Jams.REGISTRY.of(Language.class);

// Returns the manager that is an instance of LanguageManager.
LanguageManager languageManager = Manager.get(LanguageManager.class);
languageManager = Jams.REGISTRY.get(LanguageManager.class);

// Returns the manager with the given name.
Manager<Language> manager = Jams.REGISTRY.of("other-language-manager", Language.class);
```

## Using managers

Managers implement the interface `Set` so they can be easily manipulated.

```java
SelectableManager<Language> manager = Manager.ofS(Language.class);

// Accessing elements
Language selectedLanguage = manager.getSelected();
Optional<Language> english = manager.get("English");

// Iterate through the manager
manager.forEach(language -> System.out.println(language.getName()));

// Adding and removing elements
if (english.isPresent()) {
    manager.remove(english.get());
    manager.add(english.get());
}
```

## Creating new managers

A manager can be created for any type that extends `ManagerResource`.

```java
// The element to store inside the manager
public record MyElement(ResourceProvider provider, String name, double value) implements ManagerResource {
    @Override
    public ResourceProvider getResourceProvider() {return provider;}

    @Override
    public String getName() {return name;}
}

// The manager implementation
public class MyManager extends Manager<MyElement> {
    
    public MyManager(ResourceProvider provider) {
        super(provider, "my-manager", MyElement.class, false);
    }

    @Override
    protected void loadDefaultElements() {
        add(new MyElement(provider, "test-1", 1.0));
        add(new MyElement(provider, "test-2", 2.0));
        add(new MyElement(provider, "test-3", 3.0));
    }
}

// Register the manager whenever you want
Plugin myPlugin = ...;
Jams.REGISTRY.registerPrimary(new MyManager(myPlugin));
```

## Listening managers' changes

Managers use JAMS's event system: a listener can be implemented easily.

```java
public void registerListeners() {
    Manager.get(MyManager.class).registerListeners(this, true);
}

@Listener
private void onElementRegister(ManagerElementRegisterEvent<MyElement> event) {
    System.out.println("New element in my manager: " + event.getElement().getName());
}
```

The basic available events for managers are the following:

- `ManagerElementRegisterEvent<Type>`
- `ManagerElementUnregisterEvent<Type>`
- `ManagerDefaultElementChangeEvent<Type>`
- `ManagerSelectedElementChangeEvent<Type>`
