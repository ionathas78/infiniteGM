// src/world/dungeonNet.ts
// DungeonNet: local location network (dungeon/site graph)

export type DungeonNodeId = string;

export interface DungeonNode {
  id: DungeonNodeId;
  label: string;
  kind?: string;   // "room", "hall", "chamber", etc.
  notes?: string;
}

export interface DungeonLink {
  from: DungeonNodeId;
  to: DungeonNodeId;
  kind?: string;   // "door", "secret-door", etc.
  notes?: string;
}

export class DungeonNet {
  private nodes: Map<DungeonNodeId, DungeonNode> = new Map();
  private links: DungeonLink[] = [];

  init(): void {
    // Placeholder: nothing yet.
  }

  addNode(node: DungeonNode): void {
    this.nodes.set(node.id, node);
  }

  addLink(link: DungeonLink): void {
    this.links.push(link);
  }

  getNode(id: DungeonNodeId): DungeonNode | undefined {
    return this.nodes.get(id);
  }

  getLinks(): DungeonLink[] {
    return this.links;
  }

  clear(): void {
    this.nodes.clear();
    this.links = [];
  }
}
