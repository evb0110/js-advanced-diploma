export function pairToNumber(boardSize, [i, j]) {
  return i * boardSize + j;
}

export function numberToPair(boardSize, num) {
  const i = Math.floor(num / boardSize);
  const j = num % boardSize;
  return [i, j];
}
