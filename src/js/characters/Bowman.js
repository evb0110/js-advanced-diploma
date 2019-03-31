import Character from './Character';
import characters from './characters'

export default class Bowman extends Character {
  constructor(level, type = characters.bowman, attack = 25, defence = 20, health) {
    super(level, type, attack, defence, health);
  }
}
