import Character from '../Character';
import characters from './characters'

export default class Vampire extends Character {
  constructor(level) {
    type = characters.vampire;
    super(level, type);
    this.attack = 40;
    this.defence = 10;
  }
}
