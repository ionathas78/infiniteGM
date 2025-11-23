// tests/world/mapper.spec.ts
import { Mapper } from '../../src/world/mapper';

describe('Mapper', () => {
  it('constructs and initializes', () => {
    const mapper = new Mapper();
    expect(mapper).toBeInstanceOf(Mapper);
    expect(() => mapper.init()).not.toThrow();
  });
});
