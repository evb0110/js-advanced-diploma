import Character from './Character';
import characters from './characters'

export default class Vampire extends Character {
  constructor(level, type = characters.vampire, attack = 40, defence = 10, health) {
    super(level, type, attack, defence, health);
  }
}
