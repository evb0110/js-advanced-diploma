import { calcTileType, calcHealthLevel } from '../src/js/utils';

describe('testing calcTileType', () => {
  test('top left corner', () => {
    const result = calcTileType(0, 100);
    expect(result).toBe('top-left');
  });

  test('top right corner', () => {
    const result = calcTileType(55, 56);
    expect(result).toBe('top-right');
  });

  test('bottom left corner', () => {
    const result = calcTileType(30, 6);
    expect(result).toBe('bottom-left');
  });

  test('bottom right corner', () => {
    const result = calcTileType(2499, 50);
    expect(result).toBe('bottom-right');
  });

  test('top side', () => {
    const result = calcTileType(5, 10);
    expect(result).toBe('top');
  });

  test('left side', () => {
    const result = calcTileType(50, 10);
    expect(result).toBe('left');
  });

  test('bottom side', () => {
    const result = calcTileType(78, 9);
    expect(result).toBe('bottom');
  });

  test('right side', () => {
    const result = calcTileType(44, 15);
    expect(result).toBe('right');
  });

  test('center', () => {
    const result = calcTileType(25, 7);
    expect(result).toBe('center');
  });
});

describe('testing calcHealthLevel', () => {
  test('critical health', () => {
    const result = calcHealthLevel(11);
    expect(result).toBe('critical');
  });

  test('normal health', () => {
    const result = calcHealthLevel(15);
    expect(result).toBe('normal');
  });

  test('high health', () => {
    const result = calcHealthLevel(50);
    expect(result).toBe('high');
  });
});
