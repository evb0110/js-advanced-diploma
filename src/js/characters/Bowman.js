import Character from '../Character';
import characters from './characters'

export default class Bowman extends Character {
  constructor(level) {
    const type = characters.bowman;
    super(level, type);
    this.attack = 25;
    this.defence = 25;
  }
}
