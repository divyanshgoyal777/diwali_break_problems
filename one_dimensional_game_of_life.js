function generate(array, generations, rules) {
  if (generations === 0) return array;

  const newGeneration = [];

  for (let i = 0; i < array.length; i++) {
    const left = i > 0 ? array[i - 1] : 0;
    const center = array[i];
    const right = i < array.length - 1 ? array[i + 1] : 0;

    const key = "" + left + center + right;

    newGeneration.push(rules[key]);
  }

  return generate(newGeneration, generations - 1, rules);
}

const rules = {
  "111": 0,
  "110": 0,
  "101": 0,
  "100": 1,
  "011": 1,
  "010": 1,
  "001": 1,
  "000": 0,
};

console.log(generate([0, 0, 0, 1, 0, 0, 0], 1, rules));
console.log(generate([0, 0, 0, 1, 0, 0, 0], 2, rules));
console.log(generate([0, 0, 0, 1, 0, 0, 0], 3, rules));
