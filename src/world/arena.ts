// src/world/arena.ts
// Arena: transient battle-space state (zones, positions, effects)

export type ArenaZoneId = string;

export interface ArenaZone {
  id: ArenaZoneId;
  label: string;
  // e.g. "near fountain", "by the ogre", etc.
  note?: string;
}

export class Arena {
  private zones: Map<ArenaZoneId, ArenaZone> = new Map();

  init(): void {
    // Placeholder: finalize any boot-time setup if needed.
  }

  addZone(zone: ArenaZone): void {
    this.zones.set(zone.id, zone);
  }

  getZone(id: ArenaZoneId): ArenaZone | undefined {
    return this.zones.get(id);
  }

  listZones(): ArenaZone[] {
    return [...this.zones.values()];
  }

  clear(): void {
    this.zones.clear();
  }
}
