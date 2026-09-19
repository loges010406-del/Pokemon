# Work Card 05 — Review and Fix

## Goal

Run the Review Mirror against the completed Version-One implementation, choose the single most useful defect or scope mismatch, fix only that issue, and re-verify the smallest affected flow.

## Inputs

- Work Cards 01–04 output
- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `prompts/07-review-mirror.md`
- `build-status.md`

## Files likely touched

- Only the file or files required for the single approved fix

## Instructions for the coding agent

1. Read the current `build-status.md`, `build-blueprint.md`, this card, and `prompts/07-review-mirror.md` before editing.
2. Review the implementation against the confirmed scope, architecture, design rules, accessibility basics, and proof ladder.
3. Run the available build and localhost checks. Record the smallest useful issue to fix; do not start a new feature.
4. Make one focused correction. Examples include a broken link, an overflowing mobile control, an unclear result message, a missing focus state, or a sample-data label that is hard to see.
5. Re-run the narrow verification for the changed behavior and a quick regression check for the core browse/search/detail/battle flow.
6. Update `build-status.md` with the verified state and the exact fix. Do not silently expand scope while fixing the issue.

## What not to do

- Do not add a new feature, larger redesign, backend, API, persistence, accounts, or multiplayer.
- Do not rewrite unrelated components.
- Do not copy branding or introduce copyrighted assets while fixing the issue.
- Do not claim the review is complete if the build or core localhost flow still fails.

## Done when

- One concrete review finding is recorded.
- The smallest useful fix is implemented and verified.
- The core flow still works after the fix.
- `build-status.md` reflects the verified state and next step.

## Verification steps

- Run the project build command and confirm it passes.
- Re-test the core search, filter, card selection, details, and battle flow.
- Check the specific defect at desktop and mobile widths.
- Confirm no new scope or unapproved dependency was introduced.
- Design check: the fix preserves the mood, spacing, CTA, component, accessibility, and mobile rules in `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- Open localhost and repeat the complete core flow from hero to battle result.
- Reproduce the fixed issue and confirm it is resolved.
- Check a narrow mobile viewport and confirm the fix did not create overflow or unreadable content.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after the single review fix and regression check. Update `build-status.md` and wait for the learner's check before starting Work Card 06.

## Status

Not started
