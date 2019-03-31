import Character from './Character';
import characters from './characters'

export default class Daemon extends Character {
  constructor(level, type = characters.daemon, attack = 10, defence = 40, health) {
    super(level, type, attack, defence, health);
    this.attack = 10;
    this.defence = 40;
  }
}
