/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  while (true) {
    const idx = Math.floor(Math.random() * allowedTypes.length);
    const level = Math.floor(Math.random() * maxLevel) + 1;
    yield new allowedTypes[idx](level);
  }
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
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
