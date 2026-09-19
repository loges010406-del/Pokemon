# Work Card 03 — Core Behaviour

## Goal

Implement the core content-led behaviour: dynamic name search, type filtering, repeated Pokémon cards, and a selected Pokémon detail view using the bundled sample dataset.

## Inputs

- Work Cards 01 and 02 output
- `src/data/pokemon.js`
- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `build-status.md`

## Files likely touched

- `src/App.jsx`
- `src/components/SearchPanel.jsx`
- `src/components/PokemonGallery.jsx`
- `src/components/PokemonCard.jsx`
- `src/components/PokemonDetails.jsx`
- `src/styles.css`

## Instructions for the coding agent

1. Derive the available type filters from the sample dataset and render them as accessible filter controls.
2. Implement controlled name search and type filtering. Matching should be case-insensitive and update immediately as the user types or changes a filter, without a submit button or page reload.
3. Show a clear result count and an honest empty state when no records match. Provide a simple way to clear the filters.
4. Render repeated Pokémon cards from the filtered records. Each card must show the image or approved fallback, name, and type chips, and must be selectable by click and keyboard.
5. Track the selected Pokémon in application state and render a detail view with image, type, abilities, HP, Attack, Defense, Speed, and description.
6. Keep the detail view honest when nothing is selected; do not display invented values.
7. Use semantic controls, labels, status text, and visible focus states. Announce result-count and selection changes appropriately.
8. Keep the data in memory. Do not add persistence, a live API, or network requests.

## What not to do

- Do not implement the battle simulator or custom cursor yet.
- Do not add accounts, uploads, localStorage, a backend, or a database.
- Do not claim the sample dataset is complete or official.
- Do not use hover as the only way to select a card.
- Do not add unrelated catalogue features or multiple data types.

## Done when

- Typing a name filters the gallery immediately.
- Selecting a type filter combines with the name search.
- The gallery shows a result count and useful empty state.
- Selecting a card displays the matching detail record.
- The controls and cards work with keyboard and screen-reader-friendly semantics.

## Verification steps

- Search for a known sample name and confirm only matching cards remain.
- Select a type and confirm the result count and cards update without reloading.
- Combine a name query with a type filter and confirm the intersection is correct.
- Clear the filters and confirm the full sample gallery returns.
- Select a card by click and keyboard and confirm the matching details appear.
- Design check: search panel, cards, type chips, detail layout, focus states, and spacing follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- Type a partial Pokémon name and confirm results update as typing continues.
- Choose a type filter, then clear it, and confirm the gallery responds correctly.
- Select a card and confirm its image/fallback, type, abilities, and stats are visible.
- Resize to a narrow mobile viewport and confirm controls, cards, and details do not overflow.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after search, filtering, gallery, and details are verified. Update `build-status.md` and wait for the learner's check before starting Work Card 04.

## Status

Complete
