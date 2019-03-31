import Character from './Character';
import characters from './characters'

export default class Magician extends Character {
  constructor(level, type = characters.magician, attack = 10, defence = 40, health) {
    super(level, type, attack, defence, health);
  }
}
