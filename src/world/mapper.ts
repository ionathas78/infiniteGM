// src/world/mapper.ts
// Mapper: persistent location graph and spatial relationships

export type LocationId = string;

export interface LocationNode {
  id: LocationId;
  label: string;
  notes?: string;
}

export interface LocationEdge {
  from: LocationId;
  to: LocationId;
  kind?: string; // "door" | "tunnel" | "stairs" | etc. (illustrative only)
  notes?: string;
}

export class Mapper {
  private nodes: Map<LocationId, LocationNode> = new Map();
  private edges: LocationEdge[] = [];

  init(): void {
    // Placeholder: boot-time hydration if needed.
  }

  addLocation(node: LocationNode): void {
    this.nodes.set(node.id, node);
  }

  connect(edge: LocationEdge): void {
    this.edges.push(edge);
  }

  getLocation(id: LocationId): LocationNode | undefined {
    return this.nodes.get(id);
  }

  getEdges(): LocationEdge[] {
    return this.edges;
  }

  clear(): void {
    this.nodes.clear();
    this.edges = [];
  }
}
