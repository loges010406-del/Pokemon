# Architecture

## Build Shape

Content-led site. The primary action is searching and exploring Pokémon information. The battle simulator is an optional secondary interaction.

## Stack Decision

- Vite for the development server and build tooling.
- React for component-based rendering and interactive state.
- Plain CSS for styling and responsive behavior.
- Bundled sample data in the client bundle; no live API.
- No backend, authentication, database, payments, uploads, or multi-user features.

## Structure Overview

The project is a responsive one-page experience with a small sticky or compact header and linked sections:

1. Hero
2. Search and type filter
3. Pokémon gallery/list
4. Pokémon details
5. Battle simulator
6. About project

The header links scroll to each section. Search and type filtering update the gallery immediately without a form submission or page reload. Selecting a card opens or highlights its detail view. The battle simulator uses two selections and a local calculation to show a result.

## Component Map

- `App`: owns page-level state and coordinates the main views.
- `Header`: displays the project name and links to Home, Search Pokémon, Pokémon Gallery, Battle Simulator, and About.
- `Hero`: introduces the interface and provides the primary “Explore Pokémon” action.
- `SearchPanel`: contains the name search and type filter controls.
- `PokemonGallery`: renders repeated Pokémon cards from the filtered sample dataset.
- `PokemonCard`: displays image, name, and type; receives selection events.
- `PokemonDetails`: displays the selected Pokémon’s image, type, abilities, HP, Attack, Defense, Speed, and other bundled facts.
- `BattleSimulator`: provides selectors for Pokémon A and Pokémon B, a simulate action, and a result panel.
- `BattleResult`: presents the winner or tie with a clear, playful reveal.
- `AboutSection`: explains the purpose, features, technologies, and sample-data limitation.

## Data / State Model

Use one in-memory Pokémon record shape:

- `id`: stable local identifier.
- `name`: display name.
- `types`: one or more sample type labels.
- `image`: local asset path or approved local image reference.
- `hp`, `attack`, `defense`, `speed`: numeric sample stats.
- `abilities`: short text list.
- `description`: one or two sentences of factual or clearly labelled sample context.

Application state:

- `searchQuery`: current text input.
- `selectedTypes`: active type filter.
- `selectedPokemonId`: currently viewed Pokémon.
- `battleSelectionA` and `battleSelectionB`: battle participants.
- `battleResult`: winner, loser, or tie plus a short result message.

The dataset is a small curated sample, not a complete Pokédex. The interface must visibly identify it as sample fan data and the battle as an illustrative simulation.

## Storage Logic

No persistent storage is required for Version 1. Keep the dataset and interaction state in browser memory. Do not add `localStorage`, accounts, or server persistence unless the learner later requests a browser-local enhancement and the scope is reconfirmed.

## User Flow

1. The visitor lands on the hero and selects “Explore Pokémon.”
2. The page moves to the search/gallery area.
3. The visitor types a name or chooses a type; matching cards update immediately.
4. The visitor selects a card to view its details.
5. The visitor may open the battle simulator, choose two Pokémon, and select “Simulate battle.”
6. The result panel displays the winner or a tie and explains that the result is a simplified fan simulation.
7. The visitor can return to browsing without losing the current page state during the session.

## File Expectations

The implementation should keep the structure small and readable:

- `src/main.jsx`: application entry point.
- `src/App.jsx`: page composition and state coordination.
- `src/data/pokemon.js`: curated sample dataset.
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/SearchPanel.jsx`
- `src/components/PokemonGallery.jsx`
- `src/components/PokemonCard.jsx`
- `src/components/PokemonDetails.jsx`
- `src/components/BattleSimulator.jsx`
- `src/components/BattleResult.jsx`
- `src/components/AboutSection.jsx`
- `src/styles.css`: layout, visual treatment, responsive rules, focus states, and cursor behavior.
- `public/`: locally bundled image and asset files.

Component boundaries may be combined when a file would contain only a trivial wrapper, but the behavior and data responsibilities above must remain clear.

## Constraints

- Keep the experience to one page or a very small site.
- Use factual, clearly sourced or clearly labelled sample content.
- Keep the primary action focused on search and exploration.
- Use only locally bundled or legally usable assets.
- Support keyboard navigation and visible focus states.
- Use a mobile-first layout with vertically stacked sections and a compact header.
- Keep animations and surprises lightweight, optional, and non-blocking.
- Provide an accessible fallback for the Pikachu cursor effect.

## Technical Non-Goals

- No live Pokémon API or external data dependency.
- No backend, database, authentication, accounts, payments, or uploads.
- No multiplayer or synchronized battles.
- No complete official battle engine or competitive rules claim.
- No multi-page catalogue or admin system in Version 1.

## Verification Notes

- Search updates results as the user types.
- Type filtering combines with search without a page reload.
- Selecting a card shows the matching detail content.
- Battle simulation accepts two selections and always displays a winner or tie.
- Sample-data and simulation labels are visible.
- Header links reach the intended sections.
- The page remains usable at a narrow mobile viewport.
- Keyboard users can reach controls and selected content.
- The custom cursor has a normal-pointer fallback.
