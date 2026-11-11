function fill(row, col, bitmap, originalColor, newColor) {
  if (
    row < 0 ||
    row >= bitmap.length ||
    col < 0 ||
    col >= bitmap[row].length ||
    bitmap[row][col] !== originalColor
  )
    return;

  bitmap[row][col] = newColor;

  fill(row - 1, col, bitmap, originalColor, newColor); // Up
  fill(row + 1, col, bitmap, originalColor, newColor); // Down
  fill(row, col - 1, bitmap, originalColor, newColor); // Left
  fill(row, col + 1, bitmap, originalColor, newColor); // Right
}

function floodFill(bitmap, sr, sc, newColor) {
  if (
    bitmap.length === 0 ||
    sr < 0 ||
    sr >= bitmap.length ||
    sc < 0 ||
    sc >= bitmap[sr].length
  )
    return bitmap;

  const originalColor = bitmap[sr][sc];
  const newBitmap = [];

  for (let i = 0; i < bitmap.length; i++) {
    const newRow = [];

    for (let j = 0; j < bitmap[i].length; j++) {
      newRow.push(bitmap[i][j]);
    }

    newBitmap.push(newRow);
  }

  fill(sr, sc, newBitmap, originalColor, newColor);

  return newBitmap;
}

const bitmap = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

const result = floodFill(bitmap, 2, 2, 1);

console.log("Original bitmap:", bitmap);
console.log("New bitmap:", result);
