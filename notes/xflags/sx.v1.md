# note:xflags:sx.v1 — Session XFlags overview

`sx_delta` is a compact **hex diff mask** stored in a session sheath to avoid repeating parameter strings.

- **Campaign settings remain canonical** (human-readable, hand-edited).
- `sx_delta` applies as a **temporary override** for a session/scene.
- Any packed encoding must be backed by a readable key (see `note:xflags:sx.v1:key`).

Design goal: *pleasantly uncanny, never creepy; adaptive, never invasive.*
