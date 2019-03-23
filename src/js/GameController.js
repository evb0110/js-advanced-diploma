import themes from './themes';
import generateTeam, { generateTeamPositions } from './generators';
import tooltips from './helpers/tooltips';
import { moveIndices, attackIndices } from './helpers/reachIndices';
import GamePlay from './GamePlay';
import cursors from './cursors';

import Bowman from './characters/Bowman';
import Daemon from './characters/Daemon';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
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

    this.makeTeams();

    this.gamePlay.redrawPositions(this.positions);
  }

  makeTeams() {
    const { boardSize } = this.gamePlay;

    const humanAllowedTypes = [Bowman, Magician, Swordsman];
    const computerAllowedTypes = [Daemon, Undead, Vampire];

    const humanTeam = generateTeam(humanAllowedTypes, 1, 2);
    const computerTeam = generateTeam(computerAllowedTypes, 1, 2);

    const humanTeamPositions = generateTeamPositions([0, boardSize - 1], [0, 1], 2);
    const computerTeamPositions = generateTeamPositions(
      [0, boardSize - 1],
      [boardSize - 2, boardSize - 1],
      2,
    );

    this.humanPositionedTeam = [];
    this.computerPositionedTeam = [];

    humanTeam.forEach((humanCharacter, i) => {
      const positionedCharacter = new PositionedCharacter(humanCharacter, humanTeamPositions[i]);
      this.humanPositionedTeam.push(positionedCharacter);
    });
    computerTeam.forEach((computerCharacter, i) => {
      const positionedCharacter = new PositionedCharacter(
        computerCharacter,
        computerTeamPositions[i],
      );
      this.computerPositionedTeam.push(positionedCharacter);
    });

    this.positions = [...this.humanPositionedTeam, ...this.computerPositionedTeam];
  }

  onCellClick(index) {
    // TODO: react to click
    const posCharacter = this.positions.filter(pos => pos.position === index);
    if (
      posCharacter.length
      && ['bowman', 'swordsman', 'magician'].includes(posCharacter[0].character.type)
    ) {
      if (this.selectedPosCharacter !== undefined) {
        this.gamePlay.deselectCell(this.selectedPosCharacter.position);
      }
      this.gamePlay.selectCell(index);
      this.selectedPosCharacter = posCharacter[0];
      } else if (!posCharacter.length) {
        // this.selectedPosCharacter = {...this.selectedPosCharacter, position: index}
        // this.positions = [...this.humanPositionedTeam, ...this.computerPositionedTeam];
        // this.gamePlay.redrawPositions(this.positions);
    } else {
      GamePlay.showError('You can only select a playable character');
    }
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    const posCharacter = this.positions.filter(pos => pos.position === index);
    if (posCharacter.length) {
      const {
        level, attack, defence, health,
      } = posCharacter[0].character;
      const message = tooltips({
        level,
        attack,
        defence,
        health,
      });
      this.gamePlay.showCellTooltip(message, index);
      this.gamePlay.setCursor(cursors.pointer);
    } else {
      this.gamePlay.setCursor(cursors.auto);
    }

    if (this.selectedPosCharacter !== undefined) {
      const currentPosCharacter = this.positions.filter(pos => pos.position === index);
      const moveIdxs = moveIndices(
        this.selectedPosCharacter.character.type,
        this.gamePlay.boardSize,
        this.selectedPosCharacter.position,
      );
      const attackIdxs = attackIndices(
        this.selectedPosCharacter.character.type,
        this.gamePlay.boardSize,
        this.selectedPosCharacter.position,
      );

      if (moveIdxs.includes(index) && !currentPosCharacter.length) {
        this.gamePlay.setCursor(cursors.pointer);
        this.gamePlay.greenCell(index);
      } else if (attackIdxs.includes(index) && currentPosCharacter.length) {
        this.gamePlay.setCursor(cursors.crosshair);
        this.gamePlay.redCell(index);
      } else if (index !== this.selectedPosCharacter.position) {
        this.gamePlay.setCursor(cursors.notallowed);
      }
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
    this.gamePlay.hideCellTooltip(index);
    this.gamePlay.degreenCell(index);
    this.gamePlay.deredCell(index);
  }
}
