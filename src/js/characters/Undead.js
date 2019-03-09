import Character from '../Character';
import characters from './characters'

export default class Undead extends Character {
  constructor(level) {
    type = characters.undead;
    super(level, type);
    this.attack = 25;
    this.defence = 25;
  }
}
