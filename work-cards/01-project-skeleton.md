# Work Card 01 — Project Skeleton

## Goal

Create the minimal Vite, React, and plain-CSS foundation for Pika Battle Lab, including the bundled sample dataset and a usable app shell. Do not implement the search, gallery, details, or battle features in this card.

## Inputs

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `build-status.md`
- This work card only

## Files likely touched

- `package.json`
- `index.html`
- `src/main.jsx`
- `src/App.jsx`
- `src/data/pokemon.js`
- `src/styles.css`
- `public/assets/` for original placeholder assets, if needed

## Instructions for the coding agent

1. Create a minimal Vite React project configuration with `dev`, `build`, and `preview` scripts.
2. Create the React entry point and an `App` component that renders a semantic page shell with a header containing the working project name and a main content area.
3. Create a small curated sample dataset in `src/data/pokemon.js`. Include at least six records with `id`, `name`, `types`, `image`, `hp`, `attack`, `defense`, `speed`, `abilities`, and `description`.
4. Use only original placeholder artwork, locally bundled assets, or a clear image fallback. Do not use copied Pokémon artwork or external image URLs.
5. Add base CSS variables, reset rules, readable typography, 8px-based spacing, and a responsive page container. Keep feature-specific styling for later cards.
6. Keep all data in the client bundle. Do not add an API call, backend, authentication, database, payments, uploads, or persistence.
7. Preserve the confirmed one-page structure and leave clear section targets for the next card.

## What not to do

- Do not implement search, filtering, gallery interactions, details, battle simulation, or the custom cursor yet.
- Do not install unrelated packages or add a framework beyond the confirmed Vite, React, and plain-CSS stack.
- Do not copy FarmTable or official Pokémon branding, logos, text, or artwork.
- Do not invent a complete Pokédex or present sample stats as official data.
- Do not initialize Git or deploy during this card.

## Done when

- The project has a valid Vite React entry point and build configuration.
- The app shell renders a project header and main area.
- The sample dataset contains the required fields and at least six original sample records.
- The base stylesheet provides readable typography, spacing, contrast, and responsive foundations.
- The project builds without an external data dependency.

## Verification steps

- Run `npm install` only when implementing this card, then run `npm run dev`.
- Confirm the development server starts and the app shell/header is visible.
- Run `npm run build` and confirm it completes without errors.
- Inspect `src/data/pokemon.js` and confirm every record has the required fields and no network fetch.
- Design check: base spacing, typography, contrast, and page rhythm follow `design.md`; do not treat this foundation as the final visual implementation.

## Localhost test before continuing

After this card, the learner should test:

- Open the localhost preview and confirm the project header and app shell load.
- Run the production build command and confirm it finishes successfully.
- Confirm the page has no external API request and no feature UI from later cards has been added.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after the shell, dataset, and base styles are verified. Update `build-status.md` and wait for the learner's check before starting Work Card 02.

## Status

Complete
