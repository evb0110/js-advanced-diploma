import themes from './themes';
import generateTeam from './generators';
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
    this.gamePlay.addCellEnterListener(this.onCellEnter);
    this.gamePlay.addCellLeaveListener(this.onCellClick);
    this.gamePlay.addCellClickListener(this.onCellClick);

    const allowedTypes = [Bowman, Daemon, Magician, Swordsman, Undead, Vampire];
    const team = generateTeam(allowedTypes, 1, 2);
    const char0 = new PositionedCharacter(team[0], 56);
    const char1 = new PositionedCharacter(team[1], 57);
    this.gamePlay.redrawPositions([char0, char1]);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
