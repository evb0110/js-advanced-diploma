import Character from '../Character';
import characters from './characters'

export default class Swordsman extends Character {
  constructor(level) {
    const type = characters.swordsman;
    super(level, type);
    this.attack = 40;
    this.defence = 10;
  }
}
