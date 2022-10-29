import { describe, it, expect } from 'vitest';
import { subtract } from '../subtract';

describe('HelloWorld', () => {
  it('true to be true', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
