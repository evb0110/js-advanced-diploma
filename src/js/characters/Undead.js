import Character from './Character';
import characters from './characters'

export default class Undead extends Character {
  constructor(level, type = characters.undead, attack = 25, defence = 25, health) {
    super(level, type, attack, defence, health);
  }
}
