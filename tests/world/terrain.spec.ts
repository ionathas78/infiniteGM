// tests/world/terrain.spec.ts
import { Terrain } from '../../src/world/terrain';

describe('Terrain', () => {
  it('constructs and initializes', () => {
    const terrain = new Terrain();
    expect(terrain).toBeInstanceOf(Terrain);
    expect(() => terrain.init()).not.toThrow();
  });
});
