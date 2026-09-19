# Build Blueprint

## Source Files

This blueprint is based on the confirmed planning files:

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-status.md`

The design reference is `https://designmd.ai/chef/farmtable`. It is an inspiration source only. The implementation must translate its layout, spacing, color mood, and overall feel into an original interface; it must not copy the source system, its branding, content, logos, imagery, or exact identity.

## Project Identity

- Working name: Pika Battle Lab
- Project type: Content-led Pokémon fan interface
- Audience: Teens, adults, Pokémon enthusiasts, and die-hard fans
- Version: 1.0
- Primary action: Search and explore Pokémon information
- Secondary action: Run a simple two-Pokémon battle simulation

## Build Shape

Content-led site. The main value is browsing, searching, understanding, and selecting Pokémon information. The battle simulator is an optional secondary interaction and must not turn Version 1 into a full game.

## Version-One Promise

A visitor can open the site, search or filter a curated Pokémon list, select a Pokémon to inspect its image and stats, choose two Pokémon, run a basic local battle simulation, and understand the winner or tie. The experience is responsive, keyboard usable, visually playful, and clearly labelled as sample fan data rather than an official product or complete rules engine.

## Scope Lock

### Now

- One-page responsive layout with a compact header and section links.
- Hero with project title, short description, sample-data notice, and one primary “Explore Pokémon” action.
- Name search and type filter that update results immediately without a submit button or page reload.
- Repeated Pokémon cards showing image, name, and type.
- Selected Pokémon detail view with image, type, abilities, HP, Attack, Defense, Speed, and a short description.
- Battle simulator with two selectors, a simulate action, and a clear winner/tie result.
- Pikachu-inspired cursor treatment using an original lightning-bolt or playful pointer effect, with a normal cursor fallback.
- Lightweight hover, focus, selection, and battle-result feedback.
- Desktop and narrow-mobile layouts.
- Visible sample-data and illustrative-simulation labels.

### Later

- Larger curated catalogue.
- More detailed battle animations, sound, and move selection.
- Browser-local favorites or history after a separate scope confirmation.
- Additional themes and accessibility preferences.

### Never

- No full Pokémon game.
- No multiplayer, synchronized battles, accounts, login, payments, backend, database, live API, secret keys, uploads, or admin system.
- No official branding, copied logos, copyrighted artwork, or misleading official-product claims.
- No claim that the simplified battle result follows official competitive rules.
- No multi-page catalogue or admin system in Version 1.

## Architecture Summary

Use Vite, React, and plain CSS. Keep the application as a responsive one-page experience with these sections in order:

1. Hero
2. Search and type filter
3. Pokémon gallery/list
4. Pokémon details
5. Battle simulator
6. About project

The header links scroll to the sections. Search and filter state update the gallery in memory. Selecting a card updates the detail view. The battle simulator reads two selected records and calculates a local illustrative result. Keep component boundaries small and readable; trivial wrappers may be combined, but data, rendering, and interaction responsibilities must remain clear.

## Data / State / Storage Rules

Use one bundled sample record shape:

- `id`: stable local identifier.
- `name`: display name.
- `types`: one or more sample type labels.
- `image`: local asset path or legally usable local image reference.
- `hp`, `attack`, `defense`, `speed`: numeric sample stats.
- `abilities`: short text list.
- `description`: one or two sentences of factual or clearly labelled sample context.

Use in-memory application state for:

- `searchQuery`
- `selectedTypes`
- `selectedPokemonId`
- `battleSelectionA`
- `battleSelectionB`
- `battleResult`

The dataset is a small curated sample, not a complete Pokédex. Version 1 does not require `localStorage` or any persistent storage. Do not add persistence, a backend, or a live data source unless the learner explicitly requests a new scope and the planner reconfirms it.

## Design Direction Summary

Borrow the FarmTable reference’s warm, grounded mood, open section rhythm, generous spacing, flat border-led cards, readable hierarchy, and friendly overall vibe. Translate those qualities into an original electric-yellow, charcoal, grass-green, and sky-blue palette suitable for a teen-friendly Pokémon fan laboratory.

Do not copy FarmTable or any official Pokémon website’s logos, text, photography, illustrations, component artwork, exact color system, brand identity, or claims. Do not use copyrighted Pokémon artwork unless the asset is locally bundled and legally usable; prefer original placeholders or approved assets. Avoid dense text, cluttered screens, glossy gradients, neon-heavy decoration, and excessive shadows.

The first screen must show the title, a short description, the primary exploration action, and the sample-data notice. Cards should be consistent and scannable. Controls need large touch targets, visible focus states, and clear status messaging. Mobile uses a single column with a compact header and no horizontal scrolling.

## Implementation Rules

- Build only the confirmed Version-One scope.
- Keep the primary action focused on search and exploration.
- Make search and type filtering dynamic and non-submitting.
- Keep all data local and bundled; do not introduce an API dependency.
- Use semantic HTML, accessible names, keyboard navigation, and visible focus styles.
- Provide text alternatives for images and do not rely on color alone.
- Respect reduced-motion preferences.
- Use original visual assets and clearly label sample data and simulated results.
- Keep animations lightweight, optional, and non-blocking.
- Test the core flow on desktop and a narrow mobile viewport.
- Do not scaffold, install packages, or write app code during this planning phase.

## File and Folder Expectations

The future implementation should remain small and readable:

- `src/main.jsx`
- `src/App.jsx`
- `src/data/pokemon.js`
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/SearchPanel.jsx`
- `src/components/PokemonGallery.jsx`
- `src/components/PokemonCard.jsx`
- `src/components/PokemonDetails.jsx`
- `src/components/BattleSimulator.jsx`
- `src/components/BattleResult.jsx`
- `src/components/AboutSection.jsx`
- `src/styles.css`
- `public/` for locally bundled, legally usable assets

The builder may combine trivial component wrappers, but must not merge unrelated responsibilities or add unapproved files and features.

## Work Card Plan

Generate small, sequential Work Cards after the learner approves this blueprint. The planned order is:

1. Project shell, sample dataset, and responsive layout foundation.
2. Header, hero, and section navigation.
3. Search, type filter, and dynamic gallery cards.
4. Pokémon detail selection and stat view.
5. Battle simulator and result display.
6. Pikachu-inspired cursor, micro-interactions, accessibility, and mobile polish.
7. End-to-end verification and proof preparation.

Each card must contain a narrow goal, inputs, likely files, instructions, non-goals, done conditions, verification steps, localhost test, and stop condition. Do not create the cards until permission is given.

## Review Mirror

Before any implementation card starts, compare the intended work against:

- The confirmed Project Brief.
- The Architecture decisions.
- The specific Design Direction.
- The current Work Card only.
- The current `build-status.md` phase and blockers.

After each card, verify the smallest useful behavior, update `build-status.md`, and stop for the learner’s check. Do not silently expand scope while fixing a defect.

## Proof Ladder

1. The app starts on localhost without a backend or external API.
2. The hero exposes the primary exploration action.
3. Typing a name and selecting a type immediately filters the gallery.
4. Selecting a card displays the matching details and stats.
5. Selecting two Pokémon and simulating a battle displays a winner or tie.
6. Sample-data and illustrative-simulation labels are visible.
7. Header links and keyboard navigation work.
8. The core flow works at a narrow mobile viewport.
9. The custom cursor has a usable fallback and does not block interaction.
10. No copied branding, copyrighted artwork, fake claims, filler text, or unapproved persistence is present.

## 60-Second Explanation Template

“Pika Battle Lab is a responsive, content-led Pokémon fan interface for teens and enthusiasts. Users search and filter a small sample catalogue, open a Pokémon card to view its stats and details, and optionally compare two Pokémon in a simple local battle simulation. It uses Vite, React, and plain CSS with bundled sample data, so it needs no account, backend, database, or live API. The design translates FarmTable’s warm, spacious, border-led style into an original playful fan palette without copying branding or artwork. Version 1 proves the core browse, search, detail, battle, accessibility, and mobile flows.”

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, and the current Work Card before editing.
- Implement only the current Work Card.
- Do not jump ahead to later cards or add unapproved features.
- Stop after verification and report the result.
- Update `build-status.md` after each Work Card.
- Do not add backend, auth, database, live API, payments, uploads, secrets, or keys unless this blueprint explicitly allows them; it does not.
- Do not invent claims, testimonials, logos, fake stats, or real numbers; mark sample data clearly.
- Apply the content-led site guardrails: one page or a very small site, factual/sample content in clear sections, one primary action, responsive layout, mobile check, working links, and honest form behavior.
- Treat any legacy `Build Mode` field as `Build Shape` without stopping.
- Do not copy the FarmTable or official Pokémon visual identity.
- Do not begin implementation until the learner says `Start Work Card 01`.
