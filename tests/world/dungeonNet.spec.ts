// tests/world/dungeonNet.spec.ts
import { DungeonNet } from '../../src/world/dungeonNet';

describe('DungeonNet', () => {
  it('constructs and initializes', () => {
    const net = new DungeonNet();
    expect(net).toBeInstanceOf(DungeonNet);
    expect(() => net.init()).not.toThrow();
  });
});
