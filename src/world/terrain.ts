// src/world/terrain.ts
// Terrain: broad-scale terrain + basic descriptors for regions

export type TerrainId = string;

export interface TerrainCell {
  id: TerrainId;
  label: string;
  biome?: string;       // "forest", "desert", etc. (illustrative)
  elevation?: number;   // abstract units; system-agnostic
  notes?: string;
}

export class Terrain {
  private cells: Map<TerrainId, TerrainCell> = new Map();

  init(): void {
    // Placeholder: nothing needed yet.
  }

  addCell(cell: TerrainCell): void {
    this.cells.set(cell.id, cell);
  }

  getCell(id: TerrainId): TerrainCell | undefined {
    return this.cells.get(id);
  }

  listCells(): TerrainCell[] {
    return [...this.cells.values()];
  }

  clear(): void {
    this.cells.clear();
  }
}
