# Rules Gopher Team

The gopher team handles **rules lookup** and **rules-aware suggestions** across
systems and editions.

## Roles (extensible)

- `core_gopher` – anchors the pool; knows the primary ruleset.
- `combat_gopher`
- `vehicles_gopher`
- `fx_gopher` (magic / psionics / powers)
- `computers_gopher` (matrix, hacking, cyberspace)
- `spirits_gopher`
- `monsters_gopher`
- `environment_gopher`
- `traps_hazards_gopher`
- `version_gopher` (edition & errata awareness)

A single gopher may carry multiple roles when resources are constrained.

### Behavior

- Lead gopher never self-starts; **Cardinal** spins up the pool.
- Version gopher listens for:
  - Edition markers (5e 2014 vs 2024, WoD 20A vs Revised, etc.)
  - Player- or GM-declared house rules.
- Gophers do not compose narrative; they return:
  - Rule citations / short summaries.
  - Candidate mechanical interpretations.
  - Change suggestions for engine adapters.

Player- or GM-supplied homebrew always overrides external homebrew & canon.
