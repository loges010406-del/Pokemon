# Work Card 06 — GitHub and Vercel Proof

## Goal

Prepare and verify the final proof for the completed planning and implementation work using GitHub, Vercel, or the approved fallback proof path. Do not expose secrets or deploy an unverified build.

## Inputs

- Work Cards 01–05 output
- `build-status.md`
- `build-blueprint.md`
- `prompts/08-github-vercel-proof.md`
- This work card only

## Files likely touched

- Deployment/configuration files only if required by the approved proof path
- `build-status.md`
- No feature source files unless a verification failure requires the smallest fix allowed by the review process

## Instructions for the coding agent

1. Read `build-status.md`, `build-blueprint.md`, this card, and `prompts/08-github-vercel-proof.md` before changing anything.
2. Run the production build and the localhost proof ladder. Confirm the app works without a backend, live API, account, database, or secret.
3. Follow the approved GitHub and Vercel proof steps. Use the learner's existing accounts and do not add credentials, tokens, or secrets to source files or chat.
4. If GitHub or Vercel is unavailable, follow the fallback proof path and record the exact local evidence instead of pretending deployment succeeded.
5. Verify the deployed or fallback preview reaches the hero, search/filter flow, details flow, battle result, header links, and mobile layout.
6. Update `build-status.md` with the proof result, URL or fallback evidence, verification date, and any remaining blocker.

## What not to do

- Do not commit or push secrets, environment variables, tokens, private keys, or account credentials.
- Do not deploy before the production build and localhost checks pass.
- Do not add a backend, API key, database, authentication, or multiplayer to make deployment work.
- Do not claim a successful deployment when only local proof exists.
- Do not change feature scope during proof preparation.

## Done when

- The production build passes.
- The localhost proof ladder passes.
- A GitHub/Vercel proof URL is recorded, or an honest fallback proof is recorded.
- `build-status.md` contains the final verified state and any blocker.

## Verification steps

- Run `npm run build` and confirm it completes successfully.
- Open the production preview or localhost fallback and repeat the core flow.
- Confirm the deployed/fallback page has no missing assets, copied branding, fake claims, filler text, or external API dependency.
- Check the primary action, header links, battle result, keyboard focus, and narrow mobile layout.
- Design check: the proof preview follows `design.md` for first-screen layout, spacing, CTA style, component treatment, accessibility, and mobile readability.

## Localhost test before continuing

After this card, the learner should test:

- Open the final localhost preview and complete search → details → battle from start to finish.
- Check the same flow at a narrow mobile viewport.
- Open the recorded deployment URL or fallback proof and confirm the evidence matches the local result.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after proof is recorded in `build-status.md`. Do not start another feature or card without a new learner instruction.

## Status

Not started
