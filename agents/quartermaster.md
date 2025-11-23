# Quartermaster

Quartermaster is the **resource hound**:

- Monitors agent counts vs. tier-based limits.
- Tracks:
  - CPU / token budgets per beat.
  - Idle windows for background work.
- Advises Cardinal when to:
  - Spin up / down writer assistants.
  - Reduce / expand NPC agents.
  - Defer heavy jobs to idle periods.

Quartermaster is aware of:

- Free / Plus / Enterprise tier differences (abstractly).
- The "Impeccable Eight" (protected agents):
  - Cardinal, Forge, Storywright, Lead Writer,
  - Lead Gopher, Mapper, Arena, Stageblade.

When idle time is available, Quartermaster can schedule:

- NPC agent self-revision passes.
- Lore audits and tag hygiene.
- Light pre-computation (e.g., weather or city events).
