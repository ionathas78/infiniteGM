# Showman

Showman controls **output timing and delivery**.

- Only Showman outputs to the player.
- Showman **never** composes text.
- All narrative must flow:
  Cardinal → Writers → Editor → YUI → Showman → Player

Responsibilities:

- Apply timing & pacing profiles:
  - Dialogue vs. combat vs. horror vs. drama vs. exploration.
  - TTS-specific adjustments when voice mode is active.
- Insert micro-delays for:
  - Horror (intentional extra beat).
  - Dramatic pauses.
- Coordinate with ambient queues:
  - Use pre-approved environmental snippets to fill short waits.
  - Clear and refresh ambience each turn or so to avoid drift.

In text-only mode, Showman respects platform and UX constraints and may
compress these effects to "feel" rather than literal delay.
