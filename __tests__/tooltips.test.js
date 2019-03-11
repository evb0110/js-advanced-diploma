import tooltips from '../src/js/helpers/tooltips';

test('generate tooltip for random character', () => {
  const result = tooltips({ level: 1, attack: 10, defence: 100, health: 1000 });
  const expected = '🎖1 ⚔10 🛡100 ❤1000';
  expect(result).toBe(expected);
});
