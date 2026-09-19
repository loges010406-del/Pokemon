# Design Direction

## Design Inspiration URL

- Inspiration: https://designmd.ai/chef/farmtable
- Use: style reference only. Do not clone the source, its branding, content, logos, imagery, or exact identity.

## What We Borrow

- Warm, grounded color mood translated into an original electric-yellow, charcoal, grass-green, and sky-blue Pokémon fan palette.
- Open, well-spaced section rhythm with a clear hierarchy.
- Flat cards with visible borders instead of heavy shadows or glossy effects.
- Strong, readable headings paired with approachable body text.
- Clear chips for types, status, and battle information.
- A friendly, energetic overall vibe suitable for teenagers and Pokémon enthusiasts.

## What We Do Not Copy

- No FarmTable logos, text, photography, illustrations, component artwork, or exact brand identity.
- No official Pokémon website branding, logos, copyrighted artwork, or copied visual system.
- No dense, text-heavy layouts, cluttered controls, glossy gradients, or neon-heavy treatment.
- No claim that the interface is an official Pokémon product or that the battle uses official competitive rules.

## Visual Mood

Teen-friendly, playful, energetic, and welcoming. The interface should feel like a compact fan laboratory: bright enough to feel exciting, but calm and readable enough for browsing stats. Use original visual elements, simple motion, and clear labels rather than copied character art.

## Layout Rules

- Use a one-page layout with a compact header and section links: Home, Search Pokémon, Pokémon Gallery, Battle Simulator, and About.
- Hero: place a short title and description on the left or center, with one prominent “Explore Pokémon” primary action and a small sample-data notice.
- Search: keep the search field and type filter together in a clearly labelled exploration panel.
- Gallery: use a responsive repeated-card grid. Each card has an image area, name, type chip, and a clear selection affordance.
- Details: place the selected Pokémon image and core identity above or beside a stat panel; keep the most important values visible without scrolling on desktop.
- Battle: place the two selectors, simulate action, and result panel in one contained section.
- About: keep the purpose, features, technologies, and sample-data disclaimer concise.
- Use consistent 8px-based spacing, generous section gaps, and border-led separation.

## Color / Contrast Rules

- Background: warm off-white or very light neutral surface.
- Primary action: electric yellow with dark text and a strong focus state.
- Headings and primary text: near-black charcoal.
- Secondary accents: grass green for type/status chips and sky blue for links or informational details.
- Warning/result accents: amber or red only for meaningful battle states, never as decoration.
- Maintain readable contrast for text, controls, chips, and focus indicators.
- Do not rely on color alone to communicate type, battle state, errors, or results.

## Typography Feel

- Use a sturdy, friendly display face for headings if it is locally available or safely bundled; otherwise use a system fallback with strong weight.
- Use a highly readable sans-serif for body copy, labels, controls, and stat values.
- Keep headings short and scannable; avoid decorative all-caps paragraphs.
- Use consistent type sizes and line heights across cards, details, and battle results.

## Component Style

- Header: compact, sticky or top-level, with clear links and a visible active section state.
- Buttons: solid primary action, quieter secondary action, and obvious disabled/loading states.
- Cards: flat surface, visible border, rounded corners, ample padding, and a subtle hover/focus lift without relying on shadows.
- Chips: compact, high-contrast labels for Pokémon types and sample status.
- Inputs: large touch targets, clear labels, visible focus ring, and helpful empty/results messaging.
- Stats: aligned labels and values, with the most important stats easy to scan.
- Battle result: a distinct panel with a clear winner/tie label and a short explanation that the result is a simplified fan simulation.
- Pikachu cursor: use an original lightning-bolt or playful pointer treatment where supported, with a normal cursor fallback and no loss of usability.

## Mobile Rules

- Use a mobile-first single-column layout.
- Keep the header compact and make navigation links easy to tap.
- Show the hero title, short description, primary action, and sample-data notice in the first screen without requiring horizontal scrolling.
- Stack search controls, gallery cards, details, battle controls, and result panels vertically.
- Keep cards and buttons at least touch-friendly; avoid hover-only interactions.
- Allow stat tables and battle selectors to wrap cleanly rather than overflow.
- Test at a narrow viewport and verify that the primary exploration action remains obvious.

## Accessibility Basics

- Provide semantic headings, landmarks, labels, and button names.
- Ensure all controls work with keyboard navigation and have visible focus styles.
- Provide text alternatives for images and do not use artwork as the only source of meaning.
- Announce search result counts, selected Pokémon, and battle results through appropriate live-region or status text.
- Do not depend on color, animation, or the custom cursor to convey essential information.
- Respect reduced-motion preferences for animations and battle reveals.
- Keep copy plain, concise, and understandable for a beginner audience.

## Anti-Slop Rules

- No fake logos.
- No fake testimonials.
- No fake stats unless clearly marked as sample data.
- No “lorem ipsum” in the final proof.
- One clear primary action: explore/search Pokémon.
- Readable at phone width.
- No cloned branding, copyrighted artwork, or misleading official-product claims.
- No decorative gradients, excessive shadows, animated clutter, or interactions that block the main task.

## Design Verification Checklist

- [ ] The first screen clearly communicates the project and exposes the primary exploration action.
- [ ] Header links reach the intended sections and show a usable active state.
- [ ] Search and type controls are easy to find and use.
- [ ] Gallery cards are consistent, scannable, and have clear selection behavior.
- [ ] Details present image, type, abilities, and stats without clutter.
- [ ] Battle controls and result messaging are understandable.
- [ ] Sample-data and illustrative-simulation labels are visible.
- [ ] Colors meet readable contrast requirements and do not rely on hue alone.
- [ ] Keyboard navigation and focus states work.
- [ ] The layout remains readable and usable on a narrow mobile viewport.
- [ ] Reduced-motion preferences are respected.
- [ ] No borrowed logos, copyrighted artwork, fake claims, filler text, or exact source-system identity remains.
