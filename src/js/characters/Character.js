export default class Character {
  constructor(level, type = 'generic', attack = 0, defence = 0, health = 50) {
    this.level = level;
    this.attack = attack;
    this.defence = defence;
    this.health = health;
    this.type = type;
    // TODO: throw error if user use "new Character()"
    if (new.target === Character) throw new Error('impossible to instantiate the Character superclass!')
  }
}
