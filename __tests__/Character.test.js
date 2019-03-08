import Character from '../src/js/Character';

test('instantiating Character should throw', () => {
  const makeResult = () => new Character(1);
  expect(makeResult).toThrow();
})

test('instantiating child class should not throw', () => {
  class Child extends Character { 
    constructor(level) {
      super(level)
    } 
  }
  const expected = {
    level: 1,
    attack: 0,
    defence: 0,
    health: 50,
    type: 'generic'
  }
  const child = new Child(1);
  expect(child).toEqual(expected);
});