import { expect, test } from 'vitest';
import { addArray } from '../src/helpers/sum';
import { describe } from 'node:test';

describe('check array', () => {
  test('sum array to equal 6', () => {
    // preparacion
    const array = [1, 2, 3];
    // estimulo
    const result = addArray(array);
    // comportamiento esperado
    expect(result).toBe(6);
  });

  test('should return 0, if the array is empty', () => {
    expect(addArray([])).toBe(0);
  });
});
