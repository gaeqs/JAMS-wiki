---
sidebar_position: 8
---

# Languages

Just like any modern application, JAMS presents a localization system based on language packets.

Any user or plugin can create a language packet that adds or modifies a language.

## Packet structure

A language packet is a folder or compressed file that contains a `language.json` file and
several [YAML](https://yaml.org/) files. This folder or file can be located inside a plugin or inside
the `~/JAMS/languages` folder.

An example of a `janguage.json` file will be the following:

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

The file contains the following parameters:

- **name**: the name of the language. This name is the one shown to the user, and it acts as the language's identifier.
- **files**: the YAML files composing the packet.
- **priority**: the priority of the packet when several packets with the same language exists. The packet will have more
  priority the bigger this number is. This parameter is **optional** and its default value is 0.

YAML files can be located inside folders or in the root directory of the packet. They must be defined in
the `language.json` file using a relative path from the packet.

An example of a YAML file will be the following:

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

Even though this feature is not used in any official packet, language packets can contain message sections, just like
any other YAML file.

```yaml
ACTION:
  MY_ACTION: My action
```

In this case, the developer will use the `ACTION.MY_ACTION` identifier to reference the message.

## Attachments

There may be situations where several packets target the same language. This collision problem is solved thanks to the
attachment system.

A language packet will always act as a language attachment. This attachment has a **priority** defined on
the `language.json` file. If two attachments have the same priority, the priority is solved using by creation order,
being the last one to be created the one who has more priority.

The message attached to an identifier will be the one present in the attachment with more priority that defines the
identifier.

Thanks to this small extension system, users can create modifications, and plugins can add new messages.

## Fetching messages

There are two ways to fetch messages using an identifier: **manually** or **using a prefab**.

### Manually

A plugin can access the selected language using the `Manager.ofS(Language.class).getSelected()` method. The correct way
to fetch a message is using the `getOrDefault(String)` method. This method will fetch the message linked to the given
identifier. If the language doesn't contain the message, the method will search it in the default language. If both
languages don't have the message, this method will return an empty string.

Usually, this procedure should be executed again when the selected language changes. This is done registering a listener
into the language manager that asks for a `LanguageRefreshEvent`.

```java
    @Listener
    public void onRefresh(LanguageRefreshEvent event) {
        refreshMessage(event.getSelectedLanguage());
    }
```

### Using a prefab

There are a great variety of *JavaFX* nodes ready to be used with language identifiers. You can find all these nodes in
the `net.jamsimulator.jams.language.wrapper` package.

```java
new LanguageLabel(Messages.ACTION_FOLDER_EXPLORER_ELEMENT_NEW_FOLDER)
```