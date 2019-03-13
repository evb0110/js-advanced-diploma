import {
  pairToNumber,
  numberToPair
} from '../src/js/helpers/pairsAndNumbers';

describe('NUMBER TO PAIR', () => {
  test('testing left upper corner', () => {
    const num = 0;
    const result = numberToPair(8, num);
    const expected = [0, 0];
    expect(result).toEqual(expected);
  });

  test('testing left down corner', () => {
    const num = 56;
    const result = numberToPair(8, num);
    const expected = [7, 0];
    expect(result).toEqual(expected);
  });

  test('testing middle', () => {
    const num = 17;
    const result = numberToPair(8, num);
    const expected = [2, 1];
    expect(result).toEqual(expected);
  });
});

describe('TESTING PAIR TO NUMBER', () => {
  test('testing left upper corner', () => {
    const pair = [0, 0];
    const result = pairToNumber(8, pair);
    const expected = 0;
    expect(result).toBe(expected);
  });

  test('testing right down corner', () => {
    const pair = [7, 7];
    const result = pairToNumber(8, pair);
    const expected = 63;
    expect(result).toBe(expected);
  });

  test('testing middle', () => {
    const pair = [4, 5];
    const result = pairToNumber(8, pair);
    const expected = 37;
    expect(result).toBe(expected);
  });
});
