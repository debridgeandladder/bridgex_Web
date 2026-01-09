# Copilot instructions for bridgex-website

This file gives focused, repo-specific guidance to help AI coding agents get productive quickly.

Summary
- Purpose: a small React + Vite client app (under `client/`) plus a minimal Express static server (`server/index.ts`).
- Build output: client build -> `dist/public`; server bundle -> `dist` (see `package.json` `build` script).

Key entry points & where to look
- Client root: `client/index.html` and `client/src/main.tsx` (renders `App`).
- Client app code: `client/src/` — UI components live in `client/src/components/` and shared UI primitives under `client/src/components/ui/`.
- Server: `server/index.ts` (serves `dist/public` in production, static dev preview otherwise).
- Configs: `vite.config.ts` (root set to `client/`, aliases, plugins), `package.json` (scripts & dependencies), and `tsconfig.json`.

Build & dev workflows (explicit)
- Local dev: `pnpm install` then `pnpm dev` (runs `vite --host`). Vite `root` is `client/` so serve from there.
- Previewing a production build: `pnpm build` → outputs client files to `dist/public` (Vite) and bundles `server/index.ts` into `dist` (esbuild). Then `pnpm start` runs the server.
- Quick checks: `pnpm run check` runs `tsc --noEmit`. `pnpm run format` runs Prettier.
- Tests: `vitest` is installed as a devDependency (no test script). Run `pnpm exec vitest` when needed.

Important implementation details & conventions
- Vite aliases (in `vite.config.ts`):
  - `@` -> `client/src`
  - `@shared` -> `shared`
  - `@assets` -> `attached_assets`
  Use these imports rather than relative paths when adding cross-folder imports.
- Build composition: `pnpm build` performs two actions — `vite build` for client (outputs to `dist/public`) and `esbuild` to bundle `server/index.ts` into `dist`. When changing server code, ensure esbuild bundle options stay compatible (ESM output expected).
- Server runtime: `server/index.ts` expects a `dist/public/index.html` (or `public` in certain layouts) and uses `process.env.NODE_ENV` to detect production. Note: `package.json` uses `NODE_ENV=production node dist/index.js` which is POSIX-style; on Windows you may need to set the environment variable differently or use `cross-env`.
- Patches & package manager: This repo uses `pnpm` and has a patched dependency for `wouter` at `patches/wouter@3.7.1.patch` (see `package.json` `pnpm.patchedDependencies`). Prefer `pnpm` for installs.

Styling & runtime plugins
- Tailwind is used (see `tailwindcss` and `@tailwindcss/vite` in `vite.config.ts`), plus `tailwindcss-animate`.
- JSX location plugin (`@builder.io/vite-plugin-jsx-loc`) and a custom `vite-plugin-manus-runtime` are active — be cautious changing plugin order or removing them.

Patterns to follow when editing code
- Small UI components live in `client/src/components/ui/*` and follow a composable primitive pattern — prefer adding small presentational props rather than global mutations.
- Shared logic that spans client/server lives in `shared/` and is imported with `@shared` alias.
- Keep client-only changes inside `client/src` unless updating shared or server code.

What to avoid / gotchas
- Do not assume the project root is `.` for client commands — Vite's root is `client/` (see `vite.config.ts`).
- Be aware of the dual-build `pnpm build` semantics (client + server bundle). Changing one without the other can produce mismatched outputs.
- The `start` script sets `NODE_ENV` inline; on Windows CI or dev shells that don't support POSIX env prefixes, adjust accordingly.

Representative files to inspect for context
- `package.json` (scripts & patched deps)
- `vite.config.ts` (aliases, root, build outDir, plugins)
- `client/src/main.tsx` and `client/src/App.tsx` (runtime bootstrap)
- `server/index.ts` (static server behavior)
- `client/src/components/ui/` (component patterns)

If anything in this summary is unclear or you want deeper examples (e.g., common component props, routing patterns, or how `vite-plugin-manus-runtime` is used), tell me what to expand and I will update this file.
