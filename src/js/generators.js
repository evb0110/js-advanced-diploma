import { pairToNumber, numberToPair } from './helpers/pairsAndNumbers';

/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
function* characterGenerator(allowedTypes, maxLevel) {
  while (true) {
    const idx = Math.floor(Math.random() * allowedTypes.length);
    const level = Math.floor(Math.random() * maxLevel) + 1;
    yield new allowedTypes[idx](level);
  }
}

export default function generateTeam(allowedTypes, maxLevel, characterCount) {
  const team = [];
  const characterIterator = characterGenerator(allowedTypes, maxLevel);
  let counter = 1;
  for (const character of characterIterator) {
    if (counter > characterCount) break;
    team.push(character);
    counter++;
  }
  return team;
}

export function* generatePosition([iMin, iMax], [jMin, jMax]) {
  while (true) {
    const i = iMin + Math.floor(Math.random() * (iMax - iMin + 1));
    const j = jMin + Math.floor(Math.random() * (jMax - jMin + 1));
    yield pairToNumber(8, [i, j]);
  }
}

export function generateTeamPositions([iMin, iMax], [jMin, jMax], characterCount) {
  const teamPositions = [];
  const positionIterator = generatePosition([iMin, iMax], [jMin, jMax]);
  for (const position of positionIterator) {
    if (teamPositions.length >= characterCount) break;
    if (!teamPositions.includes(position)) teamPositions.push(position)
  }
  return teamPositions;
}
