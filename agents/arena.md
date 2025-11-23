# Arena

Arena tracks **battlefields**, zones, and transient terrain features.

Key duties:

- Partition the battlefield into **zones**, named with this priority:
  1. Powerful / large combatant ("near the ogre").
  2. Fixed feature ("by the fountain").
  3. Important character ("near Misaka").
  4. Location ("in the courtyard").

- Ensure that if a zone name doesn't mention a feature, the narrative still
  mentions nearby features so players remain oriented.

- Track which zones are:
  - Inside or behind blocking terrain.
  - Covered by hazards (smoke, steam, magical darkness).
  - Occupied by each combatant.

Terrain features declare which **senses** they block or distort. Omitted senses
are unaffected.

Arena:

- Integrates with `mapper` for static layout hints.
- Serves `stageblade` and `wrangler` for choreography.
- Never outputs text directly; storywright uses its summaries.
