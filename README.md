# three.js-start

A minimal [three.js](https://threejs.org/) starter project powered by [Vite](https://vite.dev/).

## Tech Stack

- **Build Tool**: Vite 8
- **3D Library**: three.js ^0.184.0
- **Language**: TypeScript (ES modules)
- **Linter**: ESLint with [@antfu/eslint-config](https://github.com/antfu/eslint-config)
- **Package Manager**: pnpm
- **Git Hooks**: simple-git-hooks + lint-staged

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [pnpm](https://pnpm.io/) (v9 or later recommended)

### Install

```bash
pnpm install
```

### Development

Start the Vite dev server with hot reload:

```bash
pnpm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Lint

Check code style and formatting:

```bash
pnpm run lint
```

Auto-fix issues:

```bash
pnpm run lint:fix
```

### Build

Build for production:

```bash
pnpm run build
```

The output will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
pnpm run preview
```

## Project Structure

```
three.js-start/
├── index.html           # Entry HTML file
├── main.ts              # Three.js app (scene, camera, renderer, animation loop)
├── main.css             # Global styles
├── tsconfig.json        # TypeScript configuration
├── eslint.config.mjs    # ESLint configuration
├── public/              # Static assets
└── package.json         # Project config and dependencies
```

## What It Does

The starter renders a green cube in a WebGL scene. It sets up:

- A **scene** — the 3D world
- A **perspective camera** — the viewpoint
- A **WebGL renderer** — draws the scene to the canvas
- An **AxesHelper** — visual coordinate reference
- An **animation loop** — continuously renders the scene

This is the foundation you can build on — add lights, textures, models, controls, and more.

## License

ISC
