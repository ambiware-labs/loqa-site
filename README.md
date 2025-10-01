# Loqa Site

This repository contains the source for [ambiware.ai](https://ambiware.ai), the public website for Loqa Labs and the Loqa project. The site is built with Vue 3 (Composition API + TypeScript), Vite, Tailwind CSS, and Vue Router.

## Tech Stack

- [Vue 3](https://vuejs.org/) with Composition API + TypeScript
- [Vite](https://vitejs.dev/) for local development and builds
- [Tailwind CSS](https://tailwindcss.com/) with custom brand theme + typography plugin
- [Vue Router](https://router.vuejs.org/) for client-side navigation

## Quick Start

```bash
cd loqa-site
npm install
npm run dev
```

The development server runs at <http://localhost:5173>. The site automatically reloads as you edit Vue components or content files.

### Building for production

```bash
npm run build
```

Static assets emit to `dist/` and can be deployed via GitHub Pages.

## Project Structure

```
loqa-site/
├── public/            # Static assets (CNAME, icons)
├── src/
│   ├── components/    # Reusable UI components and layout primitives
│   ├── content/       # Structured blog content / metadata
│   ├── router/        # Vue Router configuration
│   ├── views/         # Route-level pages (Home, Getting Started, Blog)
│   ├── App.vue        # App shell
│   └── main.ts        # Entry point
└── tailwind.config.js # Brand theme extensions
```

## Branding

Tailwind is configured with Loqa Labs + Loqa brand colors and typography. Global styles live in `src/style.css`, which imports DM Sans and Space Grotesk for headings and UI text.

## Deployment

The site deploys via GitHub Pages using the `CNAME` file to map to `ambiware.ai`. Pushes to the `main` branch trigger the automated deployment.

## Contributing

We welcome fixes and improvements! Before opening a pull request:

```bash
npm install
npm run lint   # coming soon (use make lint for markdown in loqa-meta)
```

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for the full guidelines.

## License

MIT © Loqa Labs
