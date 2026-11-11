function detectEdge(row, col, pixel, bitmap, threshold) {
  const isBottomInside = row + 1 < bitmap.length;
  const isRightInside = col + 1 < bitmap[row].length;

  const isBottomGreater =
    isRightInside && Math.abs(pixel - bitmap[row][col + 1]) > threshold;
  const isRightGreater =
    isBottomInside && Math.abs(pixel - bitmap[row + 1][col]) > threshold;

  return isRightGreater || isBottomGreater ? 255 : 0;
}

function edgeDetection(bitmap, threshold) {
  const newBitmap = [];

  for (let row = 0; row < bitmap.length; row++) {
    const newRow = [];

    for (let col = 0; col < bitmap[row].length; col++) {
      newRow.push(detectEdge(row, col, bitmap[row][col], bitmap, threshold));
    }

    newBitmap.push(newRow);
  }

  return newBitmap;
}

const bitmap = [
  [20, 20, 20, 220, 220],
  [20, 20, 20, 220, 220],
  [20, 20, 20, 220, 220],
  [20, 20, 20, 220, 220],
];

console.log(edgeDetection(bitmap, 50));
console.log(edgeDetection(bitmap, 255));
console.log(edgeDetection([], 50));
console.log(edgeDetection([[100]], 50));
