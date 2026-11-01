# Termul

A desktop terminal-style application built with Electron, React, TypeScript, Vite, and React Router.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install dependencies

```bash
yarn install
```

## Development

```bash
yarn dev
```

Vite serves the React renderer while Electron runs the desktop application. The renderer uses `HashRouter`, which works with Electron's packaged `file://` renderer entry point.

## Production build

```bash
yarn build
yarn start
```

## Project structure

```text
src/
├── index.ts                 # Electron main process
├── preload.ts               # Secure renderer API
├── styles/                  # Global and terminal styles
├── types/                   # Shared TypeScript declarations
└── renderer/
    ├── index.html           # Vite renderer entry point
    ├── main.tsx             # React entry point
    ├── app/                 # Application and route definitions
    ├── layouts/             # Shared application layouts
    └── pages/               # Route-level pages
```

## Routes

- `#/` — Empty terminal workspace
- `#/settings` — Settings placeholder
- `#/*` — Not-found page

Window controls are exposed through the preload bridge and handled by Electron's main process. The title bar uses Electron's native `-webkit-app-region: drag` support.
