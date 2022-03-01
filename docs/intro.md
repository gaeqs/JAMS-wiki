---
sidebar_position: 1
---

# Introduction

JAMS is a modern IDE specialized in assembly languages and, specifically, in the MIPS assembly language. You can extend
the functionalities of JAMS using plugins.

![Jams](/img/JAMS-1.png)

## Goals

JAMS has the following goals:

- Create a modern IDE for assembly languages, focusing in the MIPS assembly language.
- Create a simulator able to run most of the valid MIPS code.
- Create a complex personalization system, allowing the user to change the appearance of the application.
- Allow users to expand the capabilities of the IDE using plugins.
- Keep the user interface simple and suitable for teaching.

## Non-goals

JAMS is not intended to reach the following goals:
- It's not a goal to create a complex IDE with support for a wide variety of programming languages.
- It's not a goal to create a developing environment that can run code from real MIPS ecosystems.

## Design

JAMS is a **project**-based IDE. A project is conformed of a folder and the following properties:

- **Project type**: specifies the project type. Currently, it can only have the value "MIPS" without plugins.
- **Project properties**: values used by the project type. These values configure general aspects of a project.
- **Configurations**: a configuration specifies the properties of an **execution**. In other words, it configures the
  simulator. A project may contain several configurations.