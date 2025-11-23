// tests/world/arena.spec.ts
import { Arena } from '../../src/world/arena';

describe('Arena', () => {
  it('constructs and initializes', () => {
    const arena = new Arena();
    expect(arena).toBeInstanceOf(Arena);
    expect(() => arena.init()).not.toThrow();
  });
});
