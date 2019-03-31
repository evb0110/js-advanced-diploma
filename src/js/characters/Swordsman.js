import Character from './Character';
import characters from './characters'

export default class Swordsman extends Character {
  constructor(level, type = characters.swordsman, attack = 40, defence = 10, health) {
    super(level, type, attack, defence, health);
  }
}
