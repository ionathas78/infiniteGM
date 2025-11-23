# Writer Pool

The writer pool is a team of agents responsible for turning game state and
consultant notes into narrative text.

## Roles (extensible)

- `lead_writer` – owns the draft, integrates all inputs, maintains tone.
- `beat_weaver` – focuses on beat-level pacing and continuity.
- `sensory_focus` – ensures multi-sensory description per our sense rules.
- `dialogue_voice` – maintains consistent character voices.
- `redundancy_checker` – finds boring repetition & suggests alternatives.
- `plagiarism_guard` – checks for overly-derivative phrasing and nudges rewrites.

Cardinal may dynamically:

- Collapse the pool to a single writer when resources are tight.
- Expand the pool to multiple assistants (goal: 2–3) when resources are rich.

Lead writer:

- Never gets terminated while a session is active.
- Can request new role labels; these extend the roles list for future sessions.

The pool produces *candidate drafts* which then flow:

1. → Editor (style/length pass)
2. → YUI (safety & lines/veils)
3. → Showman (timing & delivery)
