const array = [
  "apple",
  2,
  2,
  2,
  2,
  1,
  0,
  0,
  6,
  8,
  [1],
  [1],
  [[1]],
  [[1]],
  [2, 1],
  [1, 2],
  "banana",
  "apple",
  "apple",
  "orange",
  "banana",
];
const frequency = {};

for (const element of array) {
  frequency[element] = (frequency[element] || 0) + 1;
}

console.log(frequency);