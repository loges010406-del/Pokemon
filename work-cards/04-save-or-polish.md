# Work Card 04 — Battle and Interaction Polish

## Goal

Add the optional two-Pokémon battle simulator and finish the confirmed interaction polish: original playful cursor treatment, lightweight feedback, accessibility, and mobile behavior.

## Inputs

- Work Cards 01–03 output
- `src/data/pokemon.js`
- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `build-status.md`

## Files likely touched

- `src/App.jsx`
- `src/components/BattleSimulator.jsx`
- `src/components/BattleResult.jsx`
- `src/styles.css`
- Existing header, gallery, and detail components only if needed for integration

## Instructions for the coding agent

1. Create two accessible selectors populated from the sample dataset for Pokémon A and Pokémon B.
2. Add a “Simulate battle” action that is disabled until both selections are valid.
3. Calculate a simple, deterministic illustrative result from the bundled stats. Display a winner or tie and a short explanation. Clearly label the result as a simplified fan simulation, not official competitive rules.
4. Render the result in a distinct panel with an accessible status message. Keep the result understandable without color alone.
5. Add an original lightning-bolt or playful pointer treatment where supported. Provide a normal pointer fallback and ensure the effect never blocks clicks, keyboard use, or text selection.
6. Add restrained hover, focus, selection, and battle-result feedback. Respect reduced-motion preferences.
7. Stack battle selectors, action, and result cleanly on mobile. Keep touch targets large and avoid horizontal overflow.
8. Recheck the search/gallery/details flow after integrating the new state so existing behavior remains intact.

## What not to do

- Do not implement official battle mechanics, move pools, multiplayer, accounts, sound, or persistent history.
- Do not add a backend, database, live API, payments, or uploads.
- Do not use copyrighted battle artwork or copied branding.
- Do not let animations delay or prevent the result from appearing.
- Do not add localStorage unless a later scope change is explicitly approved.

## Done when

- Two sample Pokémon can be selected and a battle result appears.
- The result always identifies a winner or tie and includes the sample-simulation notice.
- The original cursor treatment has a normal-pointer fallback.
- Focus, keyboard, reduced-motion, and mobile behavior remain usable.
- Existing search, filtering, gallery, and details behavior still works.

## Verification steps

- Select two different sample Pokémon, simulate a battle, and confirm a clear winner or tie appears.
- Select the same Pokémon for both sides if allowed and confirm the result remains understandable.
- Use keyboard navigation to reach both selectors and the simulate action.
- Check the cursor effect and confirm ordinary clicking and keyboard use still work; verify the fallback when custom cursors are unsupported.
- Enable reduced motion if available and confirm the battle result is still delivered without essential animation.
- Design check: battle panel, result reveal, cursor treatment, component spacing, and mobile stacking follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- Run a battle on desktop and confirm the winner/tie panel is clear.
- Repeat the battle flow on a narrow mobile viewport and confirm no controls or result text are cut off.
- Re-run the search, filter, card selection, and details flow to confirm this card did not break earlier behavior.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after battle and interaction polish are verified. Update `build-status.md` and wait for the learner's check before starting Work Card 05.

## Status

Complete
