import Character from '../Character';
import characters from './characters'

export default class Daemon extends Character {
  constructor(level) {
    const type = characters.daemon;
    super(level, type);
    this.attack = 10;
    this.defence = 40;
  }
}
