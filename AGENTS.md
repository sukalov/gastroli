# Agent Guidelines

## Commands
- Build: `bun run build` or `npm run build`
- Lint: `bun run lint` or `npm run lint` (ESLint with Next.js config)
- Dev: `bun run dev` or `npm run dev`
- Start: `bun run start` or `npm run start`
- No test framework configured in this project

## Code Style Guidelines
- **Framework**: Next.js 16.1.1 with React 19.2.3, TypeScript
- **UI**: shadcn/ui components with Base UI, Tailwind CSS v4, Phosphor icons
- **Imports**: Use absolute imports with `@/*` alias (e.g., `@/components/ui/button`)
- **Component structure**: Use ONLY shadcn/ui provided components, no custom components. Use `cn()` utility for class merging
- **TypeScript**: Strict mode enabled, use proper types for all props and functions
- **File naming**: kebab-case for files, PascalCase for components
- **Styling**: Use ONLY pre-defined Tailwind color system, no custom colors. Use class-variance-authority for component variants
- **Linting**: ESLint with Next.js core-web-vitals and TypeScript configs
- **Text content**: Use ONLY lowercase letters in UI text, website metadata, and comments