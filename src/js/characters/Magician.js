import Character from '../Character';
import characters from './characters'

export default class Magician extends Character {
  constructor(level) {
    const type = characters.magician;
    super(level, type);
    this.attack = 10;
    this.defence = 40;
  }
}
