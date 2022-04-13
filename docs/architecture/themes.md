---
sidebar_position: 9
---

# Themes

JAMS's themes work like the style of any webpage: using cascade style sheet files (CSS).

JAMS's theme system work very similar to the [language](languages) system: themes are packed inside a folder or a
compressed file alongside a JSON file that acts as an entry point.

One main difference is that developers don't need to manage any aspect of the theme system: the selected theme will be
applied automatically to all *JavaFX* nodes thanks to the *JavaFX* theme system.

## Structure

The `theme.json` defines the name and the CSS files included in a theme. An example of a `theme.json` file would be the
following:

```json title="theme.json"
{
  "name": "Light Theme",
  "dependencies": ["Other Theme"],
  "files": [
    "extra.css"
  ]
}
```

A `theme.json` files contains the following parameters:

- **name**: the theme's name. It is the name shown to the player, and acts as the theme's identifier.
- **files**: the CSS files included in the theme.
- **dependencies**: the themes this theme depends on. The style of these themes will be added to this theme's style.
  This parameter is optional.

Whether it is defined or not in the dependencies, all themes depend on the `Common` theme. This theme acts as a base,
defining the basic style of the application. This theme defines several global variables. Themes must assign a value to
them.

### Global variables

Global variables define the color of several components in a easy way. A theme must assign a color to all global
variables defined in the `Common` theme. This job should be done in the `global.css` file.

This file is a special file that is included automatically in the file. When a theme is compiled, the data inside this
file will be wrapped into a `*{ }` section, making all variables available for all elements.

A `global.css` example would be the following:

```css title="global.css"
-theme-foreground: #222222;
-theme-foreground-darker: derive(-theme-foreground, 20%);
-theme-foreground-darker-2: derive(-theme-foreground, 40%);
-theme-foreground-lighter: #000000;
-theme-background: #f2f2f2;
-theme-background-darker: #e5e5e5;
-theme-background-darker-2: #eaeaea;
-theme-background-lighter: #f7f7f7;
-theme-background-pressed: derive(-theme-background, -10%);
-theme-background-darkest: #FFFFFF;
-theme-shadow: #555555;
-theme-header: #8faccc;
-theme-menu-item-hover: #4D6EAF;

-theme-element-out: #e3cd91;
-theme-element-selected: #5a80cc;
-theme-element-invalid: #e86161;

-theme-explorer-file-to-assemble: #90b682;
-theme-explorer-selected-file-to-assemble: #7094a8;

-theme-text-match: #214182;
-theme-text-selected: #93aee7;
-theme-text-comment: #3b3b3b;
-theme-text-label: -theme-foreground;
-theme-text-global-label: #7c271b;
-theme-text-directive: #7a3f13;
-theme-text-directive-parameter: #931883;
-theme-text-string: #376912;
-theme-text-instruction: #6e5a13;
-theme-text-pseudo-instruction: #247a11;
-theme-text-register: #1f318c;
-theme-text-immediate: #2c7c1a;
-theme-text-macro: #14735d;
-theme-text-global-macro: #7c271b;
-theme-text-macro-parameter: #391a8d;

-theme-error: #5e1515;
-theme-warining: #5b4805;
-theme-info: #193e6c;
-theme-done: #216b19;

-theme-search-result: #6ead42;
-theme-search-result-stroke: #3c6321;
-theme-selected-search-result: #4f6dc5;
-theme-selected-search-result-stroke: #000000;

-theme-simulation-fetch: #fafa97;
-theme-simulation-decode: #d0faa8;
-theme-simulation-execute: #afe0fa;
-theme-simulation-memory: #d5b9fc;
-theme-simulation-write-back: #fcbbb4;
-theme-simulation-breakpoint: #ff2e29;

-theme-cache-hit: #41592a;
-theme-cache-miss: #5b3e3e;
-theme-lab-selected-segment: #cb1010;
```

## Attachments

Just like languages, themes work using a extension structure. All theme packets are transformed into theme extensions.
If several theme packets target the same theme, bot packets will coexist.

A big difference between the language system and the theme system is the priority: theme packets **have no priority**. *
JavaFX* follows the
[CSS priority standards](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#how_is_specificity_calculated);
another priority layer would be unnecessary.