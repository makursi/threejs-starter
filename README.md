# three.js-start

A minimal [three.js](https://threejs.org/) starter project powered by [Vite](https://vite.dev/).

## Tech Stack

- **Build Tool**: Vite 8
- **3D Library**: three.js ^0.184.0
- **Language**: JavaScript (ES modules)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Install

```bash
npm install
```

### Development

Start the Vite dev server with hot reload:

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build

Build for production:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
three.js-start/
├── index.html      # Entry HTML file
├── main.js         # Three.js app (scene, camera, renderer, animation loop)
├── main.css        # Global styles
├── public/         # Static assets
└── package.json    # Project config and dependencies
```

## What It Does

The starter renders a rotating green cube in a WebGL scene. It sets up:

- A **scene** — the 3D world
- A **perspective camera** — the viewpoint
- A **WebGL renderer** — draws the scene to the canvas
- An **animation loop** — rotates the cube continuously

This is the foundation you can build on — add lights, textures, models, controls, and more.

## License

ISC
