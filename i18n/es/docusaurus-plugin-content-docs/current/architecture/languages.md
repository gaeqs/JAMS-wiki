---
sidebar_position: 8
---

# Idiomas

Igual que cualquier aplicación moderna, JAMS presenta un sistema de localización basado en paquetes de idiomas.

Cualquier usuario o componente puede crear un paquete que añada o modifique un idioma.

## Estructura de un paquete

Un paquete de idiomas es una carpeta o un archivo comprimido que contienen un archivo `language.json` y varios archivos
[YAML](https://yaml.org/). Esta carpeta o archivo estará situado dentro de un componente o dentro de la carpeta
`~/JAMS/languages`.

Un ejemplo de un archivo `language.json` es el siguiente:

```json title="language.json"
{
  "name": "English",
  "priority": 0,
  "files": [
    "actions.yml",
    "configuration.yml",
    "directives.yml",
    "editor.yml",
    "general.yml",
    "instructions.yml",
    "interface.yml",
    "mips_elements.yml",
    "mips_simulation_configuration.yml",
    "simulation.yml"
  ]
}
```

Dentro del archivo se encuentran los siguientes parámetros:

- **name**: el nombre del idioma. Este nombre es el que será mostrado al usuario y actúa como identificador del idioma.
- **files**: los archivos YAML que componen el paquete.
- **priority**: la prioridad del paquete si existen varios paquetes para el mismo idioma. Cuanto más alto sea el número,
  más prioridad tiene el paquete. Esta propiedad es **opcional** y por defecto toma el valor 0.

Los archivos YAML pueden estar en carpetas dentro del paquete, y deben estar definidos en el archivo `language.json`
con una dirección relativa a la raíz del paquete.

Un ejemplo de un archivo YAML es el siguiente:

```yaml title="interface.yml"
START_TITLE: JAMS {VERSION}
START_PROJECTS: Projects
START_NEW_PROJECT: New project
START_ABOUT: About
BOTTOM_BAR_MEMORY: '{USED} of {TOTAL}MiB'
BOTTOM_BAR_MEMORY_TOOLTIP: Click to execute the garbage collector.

PROJECT_CREATOR_MIPS_ASSEMBLER: 'Assembler:'
PROJECT_CREATOR_MIPS_INSTRUCTION_SET: 'Instruction set:'
PROJECT_CREATOR_MIPS_DIRECTIVE_SET: 'Directive set:'
PROJECT_CREATOR_MIPS_REGISTERS: 'Registers:'
PROJECT_CREATOR_MIPS_EMPTY: Empty MIPS project

MAIN_MENU_FILE: File
MAIN_MENU_EDIT: Edit
MAIN_MENU_SIMULATION: Simulation
MAIN_MENU_TOOLS: Tools
MAIN_MENU_HELP: Help
MAIN_MENU_FILE_EXIT: Exit
MAIN_MENU_FILE_SETTINGS: Settings
MAIN_MENU_FILE_OPEN_PROJECT: Open project
MAIN_MENU_FILE_CREATE_PROJECT: Create project
MAIN_MENU_FILE_CREATE_PROJECT_TITLE: Create project
MAIN_MENU_FILE_CREATE_PROJECT_NAME: 'Name:'
MAIN_MENU_FILE_CREATE_PROJECT_PATH: 'Path:'
MAIN_MENU_HELP_ABOUT: About

PROJECT_TAB_STRUCTURE: Project structure
PROJECT_TAB_SIMULATION: Simulation

BAR_VIEW_MODE_PANE: Show in pane
BAR_VIEW_MODE_WINDOW: Show in window
BAR_VIEW_MODE_PERSISTENT_WINDOW: Show in persistent window
```

Aunque no se use en ningún paquete por defecto, los paquetes de idiomas permiten crear secciones como en cualquier
archivo YAML.

```yaml
ACTION:
  MY_ACTION: My action
```

En este caso, se usará el identificador `ACTION.MY_ACTION` para referenciar el mensaje.

## Extensiones

Puede existir el caso donde varios paquetes hagan referencia al mismo idioma. Este problema de colisión se soluciona
gracias a las extensiones.

Un paquete actúa siempre como una extensión de un idioma. Esta extensión tiene una **prioridad** que se define en el
archivo `language.json` del paquete. Si dos extensiones tienen la misma prioridad, el orden se resuelve por orden de
creación de la extensión, siendo el último en ser creado el que tenga más prioridad.

El mensaje ligado a un identificador será el de la extensión con más prioridad que contenga un mensaje ligado al
identificador.

Gracias a este pequeño sistema de extensiones, los usuarios podrán crear modificaciones y los componentes podrán añadir
nuevos mensajes.

## Acceder a mensajes

Existen dos maneras de acceder a los mensajes mediante un identificador: **de manera directa** o **usando un componente
preparado**.

### Acceder de manera directa.

Un componente puede acceder al idioma seccionado usando el método `Manager.ofS(Language.class).getSelected()`. La
manera más correcta para pedir un mensaje es usando el método `getOrDefault(String)`. Este método devolverá el mensaje
asociado al identificador dado. Si el idioma no contiene ningún mensaje con ese identificador, lo buscará en el idioma
por defecto. Si ninguno de los dos idiomas contiene el mensaje, devuelve una cadena de texto vacía.

Cabe destacar que esta acción suele deber rehacerse cuando el idioma cambia, por lo que se debe registrar una escucha en
el gestor de idiomas, escuchando el evento `LanguageRefreshEvent`.

```java
    @Listener
    public void onRefresh(LanguageRefreshEvent event) {
        refreshMessage(event.getSelectedLanguage());
    }
```

### Usar un componente preparado

Existe una gran variedad de nodos para *JavaFX* preparados para usar mensajes traducibles. Estos nodos se pueden
encontrar en el paquete `net.jamsimulator.jams.language.wrapper`.

```java
new LanguageLabel(Messages.ACTION_FOLDER_EXPLORER_ELEMENT_NEW_FOLDER)
```