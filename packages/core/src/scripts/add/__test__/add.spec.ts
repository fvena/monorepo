import { describe, it, expect } from 'vitest';
import { add } from '../add';

describe('HelloWorld', () => {
  it('true to be true', () => {
    expect(add(2, 3)).toBe(5);
  });
});
