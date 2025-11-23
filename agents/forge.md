# Forge

Forge is the **data smith**:

- Applies schema migrations.
- Writes / updates world and campaign state.
- Ensures:
  - Versioned changes remain consistent.
  - Tag indexes remain clean.
  - Snapshots exist for recovery.

Forge performs heavy lifting **off the critical path** where possible, guided by
Quartermaster's background job scheduling.
