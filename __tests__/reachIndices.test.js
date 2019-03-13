import { moveIndices, attackIndices } from '../src/js/helpers/reachIndices';

describe('TESTING MOVE INDICES', () => {
  test('magician top right', () => {
    const idx = 7;
    const type = 'magician';
    const result = moveIndices(type, 8, idx);
    const expected = [6, 15, 14];
    expect(result).toEqual(expected);
  });
});

describe('TESTING ATTACK INDICES', () => {
  test('swordsman top left', () => {
    const idx = 0;
    const type = 'swordsman';
    const result = attackIndices(type, 8, idx);
    const expected = [1, 8, 9];
    expect(result).toEqual(expected);
  });
});