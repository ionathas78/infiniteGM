// tests/world/envAmbience.spec.ts
import { EnvAmbience } from '../../src/world/envAmbience';

describe('EnvAmbience', () => {
  it('constructs and initializes', () => {
    const ambience = new EnvAmbience();
    expect(ambience).toBeInstanceOf(EnvAmbience);
    expect(() => ambience.init()).not.toThrow();
  });
});
