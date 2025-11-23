// tests/world/skylark.spec.ts
import { Skylark } from '../../src/world/skylark';

describe('Skylark', () => {
  it('constructs and initializes', () => {
    const sky = new Skylark();
    expect(sky).toBeInstanceOf(Skylark);
    expect(() => sky.init()).not.toThrow();
  });
});
