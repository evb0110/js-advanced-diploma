import themes from './themes';
import generateTeam from './generators';
import tooltips from './helpers/tooltips';

import Bowman from './characters/Bowman';
import Daemon from './characters/Daemon';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Undead from './characters/Undead';
import Vampire from './characters/Bowman';
import PositionedCharacter from './PositionedCharacter';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved states from stateService
    this.gamePlay.drawUi(themes.prairie);
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));

    const allowedTypes = [Bowman, Daemon, Magician, Swordsman, Undead, Vampire];
    const team = generateTeam(allowedTypes, 1, 2);
    this.positions = [];
    this.positions[0] = new PositionedCharacter(team[0], 56);
    this.positions[1] = new PositionedCharacter(team[1], 57);
    this.gamePlay.redrawPositions([this.positions[0], this.positions[1]]);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    const posCharacter = this.positions.filter(pos => pos.position === index);
    if (posCharacter.length) {
      const { level, attack, defence, health } = posCharacter[0].character
      const message = tooltips({ level, attack, defence, health });
      this.gamePlay.showCellTooltip(message, index);
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
