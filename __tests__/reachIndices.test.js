import { moveIndices, attackIndices } from '../src/js/helpers/reachIndices';

describe('TESTING MOVE INDICES', () => {
  test('magician top right', () => {
    const idx = 7;
    const type = 'magician';
    const result = moveIndices(type, 8, idx);
    const expected = [6, 15, 14];
    expect(result).toEqual(expected);
  });

  test('daemon bottom right', () => {
    const idx = 63;
    const type = 'daemon';
    const result = moveIndices(type, 8, idx);
    const expected = [62, 55, 54];
    expect(result).toEqual(expected);
  });

  test('vampire top left', () => {
    const idx = 0;
    const type = 'vampire';
    const result = moveIndices(type, 8, idx);
    const expected = [1, 8, 9, 2, 16, 18];
    expect(result).toEqual(expected);
  });

  test('bowman bottom left', () => {
    const idx = 56;
    const type = 'bowman';
    const result = moveIndices(type, 8, idx);
    const expected = [57, 48, 49, 58, 40, 42];
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