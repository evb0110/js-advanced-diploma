import { moveIndices, attackIndices } from '../src/js/helpers/reachIndices';

describe('TESTING MOVE INDICES', () => {
  test('magician top right', () => {
    const idx = 7;
    const type = 'magician';
    const result = moveIndices(type, 8, idx).sort((a, b) => a - b);
    const expected = [6, 15, 14].sort((a, b) => a - b);
    expect(result).toEqual(expected);
  });

  test('daemon bottom right', () => {
    const idx = 63;
    const type = 'daemon';
    const result = moveIndices(type, 8, idx).sort((a, b) => a - b);
    const expected = [62, 55, 54].sort((a, b) => a - b);
    expect(result).toEqual(expected);
  });

  test('daemon 8th cell', () => {
    const idx = 8;
    const type = 'daemon';
    const result = moveIndices(type, 8, idx).sort((a, b) => a - b);
    const expected = [0, 1, 9, 16, 17].sort((a, b) => a - b);
    expect(result).toEqual(expected);
  });

  test('vampire top left', () => {
    const idx = 0;
    const type = 'vampire';
    const result = moveIndices(type, 8, idx).sort((a, b) => a - b);
    const expected = [1, 8, 9, 2, 16, 18].sort((a, b) => a - b);
    expect(result).toEqual(expected);
  });

  test('bowman bottom left', () => {
    const idx = 56;
    const type = 'bowman';
    const result = moveIndices(type, 8, idx).sort((a, b) => a - b);
    const expected = [57, 48, 49, 58, 40, 42].sort((a, b) => a - b);
    expect(result).toEqual(expected);
  });
});

describe('TESTING ATTACK INDICES', () => {
  test('swordsman top left', () => {
    const idx = 0;
    const type = 'swordsman';
    const result = attackIndices(type, 8, idx).sort((a, b) => a - b);
    const expected = [1, 8, 9].sort((a, b) => a - b);
    expect(result).toEqual(expected);
  });
});