# Work Card 02 — First Visible Version

## Goal

Turn the project shell into the first visible one-page version with a compact header, hero, section navigation, sample-data notice, and concise About section. Keep the primary action focused on exploring Pokémon.

## Inputs

- Work Card 01 output
- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `build-status.md`

## Files likely touched

- `src/App.jsx`
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/AboutSection.jsx`
- `src/styles.css`

## Instructions for the coding agent

1. Create a compact semantic header with the project name and links to Home, Search Pokémon, Pokémon Gallery, Battle Simulator, and About.
2. Add section landmarks with stable IDs for the header links. Create visible headings for the search, gallery, details, battle, and about areas even if their feature content is completed by later cards.
3. Build a hero with a short title, beginner-friendly description, one prominent “Explore Pokémon” primary action, and a clear notice that the catalogue and battle use sample fan data.
4. Make the primary action move focus or scroll to the search/gallery area. Respect reduced-motion preferences.
5. Add a concise About section describing the purpose, Version-One features, technologies, and the illustrative nature of the battle.
6. Apply the confirmed warm, grounded, teen-friendly visual direction with original styling. Use border-led cards/panels, readable contrast, and generous spacing.
7. Make header links and the primary action keyboard accessible. Provide a visible focus state and an active-section indication where practical.
8. Keep all later feature behavior out of this card; placeholders must be honest and must not contain fake stats, testimonials, or filler text.

## What not to do

- Do not add search logic, dynamic cards, details, battle logic, localStorage, or a backend.
- Do not add multiple pages or a full navigation system.
- Do not copy the FarmTable or official Pokémon visual identity.
- Do not use copyrighted artwork, fake claims, or lorem ipsum.
- Do not add sound, accounts, multiplayer, or official battle rules.

## Done when

- The header links reach the intended section landmarks.
- The hero clearly communicates the project and exposes one primary exploration action.
- The sample-data and illustrative-simulation notices are visible.
- The About section is concise and accurate.
- The first visible version is readable on desktop and mobile.

## Verification steps

- Open the localhost preview and confirm the header, hero, section headings, primary action, and About content are visible.
- Activate every header link and confirm it reaches the intended section.
- Use the keyboard to reach the primary action and confirm its focus state is visible.
- Check a narrow mobile viewport and confirm the header, hero, action, and text do not overflow.
- Design check: hero layout, CTA style, spacing, color mood, and mobile first-screen behavior follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- Open localhost and confirm the first visible page loads without errors.
- Click or keyboard-activate “Explore Pokémon” and confirm it moves to the exploration area.
- Resize to a phone-width viewport and confirm the header and hero remain readable without horizontal scrolling.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after the visible shell and navigation are verified. Update `build-status.md` and wait for the learner's check before starting Work Card 03.

## Status

Complete
