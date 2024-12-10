# About the project 🎉

I had the pleasure of working on this assignment, and it has been an exciting journey from start to finish👩‍💻.
Throughout the development process, I focused on creating a user-friendly and efficient solution within the time available. I aimed to incorporate best practices and the latest technologies. This project reflects my passion for coding and my commitment to ensuring consistency in coding standards. That is why I chose Prettier. This project demonstrates the implementation of the Atomic Design methodology, which organizes components in a clear and scalable manner. The structure showcases my interest in thoughtful and efficient design architecture. Furthermore, CSS Modules are used in this project to prevent classname collisions and to ensure modular and maintainable styles. Thank you for your interest, feel free to explore, contribute, and please provide feedback, because I know its not 100%! I am excited to share it with you 😊.

## Table of contents

- [About the project 🎉](#about-the-project-)
- [Table of contents](#table-of-contents)
- [Requirements](#requirements)
- [Built with](#built-with)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Commits specification](#commits-specification)

## Requirements

- ✅ The application can search movies by title
- ✅ Used State management and management by TanStack.
- ✅ A single search query returns the top 5 movies as provided by the Search API
- ✅ For each movie the following information will be displayed: poster,
  title(released), type, year, rated, genre, director, actors, plot(full), awards
- ✅ The application highlights two predefined movies, displaying the following information: title, year, awards, poster,
  plot(full)
- ✅ When searching movies plot can be set to either ‘full‘ or ‘short’.
- ✅ Display genre and actors as a list instead of comma separated
- ✅ Responsive design

## Built with

- [TypeScript](https://www.typescriptlang.org/docs/)
- [React](https://react.dev/)
- [Vite](https://vite.dev/guide/)
- [Tanstack Queries](https://tanstack.com/query/latest)
- [Tanstack Router](https://tanstack.com/router/latest)
- [Tanstack Form](https://tanstack.com/form/latest)
- [(Framer) Motion](https://www.framer.com/motion/)

## Getting started

- Install PNPM packages
  ```sh
  pnpm install
  ```
- Run project

  ```sh
  pnpm run dev

  ```

## Project structure

This project demonstrates an implementation of the Atomic Design methodology, which organizes components in a clear and scalable manner. The structure is designed to show my interest in thoughtful and efficient design architecture:

- Atoms: Basic building blocks of the UI (e.g., buttons, input fields).
- Molecules: Groups of atoms functioning together (e.g., form inputs with labels).
- Organisms: Complex components composed of molecules (e.g., navigation bars, forms).
- Templates: Page-level structures that place components into a layout.
- Pages: Specific instances of templates with real content

## Commits specification

Write clear and concise commit messages that describe the changes made.

```sh
[<type>]<scope>: (<referencing issues>)<description>
```

- **`<type>`**: The type of change. Common options:

* feature: A new feature
* fix: A bug fix
* docs: Documentation only changes
* style: Changes that do not affect the meaning of the code(white-space, formatting, missing semi-colons, etc)
* refactor: A code change that neither fixes a bug nor adds a feature that improves performance
* test: Adding missing tests
* chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

- **`<scope>`** (optional): The specific part of the codebase affected (e.g., `header`, `api`, `utils`).
- **`<description>`**: A brief description of the change (imperative mood, e.g., "add", "fix", "update").
- **`[<referencing issues>]`** (optional): References to related issues, formatted like `(#123)`.
