---
sidebar_position: 1
---

# Introduction

JAMS is a modern IDE specialized in assembly languages and, specifically, in the MIPS assembly language. You can extend
the functionalities of JAMS using plugins.

![Jams](/img/JAMS-1.png)

## Design

JAMS is a **project**-based IDE. A project is conformed of a folder and the following properties:

- **Project type**: specifies the project type. Currently, it can only have the value "MIPS" without plugins.
- **Project properties**: values used by the project type. These values configure general aspects of a project.
- **Configurations**: a configuration specifies the properties of an **execution**. In other words, it configures the
  simulator. A project may contain several configurations.