---
sidebar_position: 2
---

# Gestores

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

## Crear nuevos gestores

Se puede crear gestores de cualquier tipo de dato que extienda la interfaz `ManagerResource`.

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

## Escuchar cambios en los gestores

Los gestores usan el sistema de eventos integrado en JAMS, por lo que escuchar cambios en los gestores es muy sencillo.

```java
public void registerListeners() {
    Manager.get(MyManager.class).registerListeners(this, true);
}

@Listener
private void onElementRegister(ManagerElementRegisterEvent<MyElement> event) {
    System.out.println("New element in my manager: " + event.getElement().getName());
}
```

Los eventos básicos disponibles en los gestores son:

- `ManagerElementRegisterEvent<Type>`
- `ManagerElementUnregisterEvent<Type>`
- `ManagerDefaultElementChangeEvent<Type>`
- `ManagerSelectedElementChangeEvent<Type>`
La arquitectura de JAMS está basada en **gestores**. Un gestor se puede definir como un conjunto de elementos que las
herramientas pueden usar.

## Tipos de gestores

JAMS proporciona tres tipos básicos de gestores.

### Gestores normales

Implementados por la clase `Manager`. Contienen una lista de elementos sin ninguna jerarquía.

### Gestores con valor por defecto.

Actúa como un gestor normal, con la diferencia que uno de sus valores es el valor por defecto. Estos gestores heredan de
la clase `DefaultValuableManager`.

### Gestores con valor seleccionado.

Actúan como un gestor con valor por defecto, pero con uno de los elementos seleccionado. Cuando el elemento seleccionado
se elimina, el elemento por defecto queda seleccionado. Estos gestores heredan de la clase `SelectableManager`.

## Proveedores

Cada elemento guardado en un gestor está asociado al proveedor que lo proporciona. Un proveedor puede ser un plugin o el
propio JAMS. Cuando un proveedor se desvincula de la aplicación, todos los elementos proporcionados por el proveedor son
eliminados de los gestores.

## Registro

El registro es un elemento estático dentro de la aplicación. Se puede considerar un gestor de gestores. En el registro
se pueden recuperar, añadir, eliminar o modificar gestores. Igual que los gestores normales, cuando un proveedor se
desvincula de la aplicación, todos los gestores proporcionados por el proveedor son eliminados del registro.

### Gestores primarios y gestores secundarios

JAMS permite separar los gestores en dos tipos: gestores primarios y gestores secundarios.

Los gestores primarios son fácilmente accesibles cuando se busca un gestor por tipo usando métodos como
`Manager.of(Type.class)`. Solo puede existir un gestor primario por tipo.

Para buscar gestores secundarios, se debe proveer el nombre del gestor explícitamente:
`Jams.REGISTRY.of("other-manager", Type.class)`.

## Acceder a los gestores

Existen dos maneras de acceder a un gestor: usando el registro o usando los atajos de la clase `Manager`.

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

## Usar los gestores

Los gestores implementan la interfaz `Set`, por lo que son fácilmente manipulables.

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

## Crear nuevos gestores

Se puede crear gestores de cualquier tipo de dato que extienda la interfaz `ManagerResource`.

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

## Escuchar cambios en los gestores

Los gestores usan el sistema de eventos integrado en JAMS, por lo que escuchar cambios en los gestores es muy sencillo.

```java
public void registerListeners() {
    Manager.get(MyManager.class).registerListeners(this, true);
}

@Listener
private void onElementRegister(ManagerElementRegisterEvent<MyElement> event) {
    System.out.println("New element in my manager: " + event.getElement().getName());
}
```

Los eventos básicos disponibles en los gestores son:

- `ManagerElementRegisterEvent<Type>`
- `ManagerElementUnregisterEvent<Type>`
- `ManagerDefaultElementChangeEvent<Type>`
- `ManagerSelectedElementChangeEvent<Type>`