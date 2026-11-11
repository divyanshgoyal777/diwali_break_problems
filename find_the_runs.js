// Try writing a function that takes an array of numbers and breaks it into ascending and descending runs.
// When equal values occur, the first equal value stays with the previous run.
// The second equal value starts a new run.
// When the direction changes, the current element starts the new run.
// Every run is kept, even if it has only one element.

// function findRuns(array) {
//   const result = [];

//   if (array.length === 0) {
//     return result;
//   }

//   let run = [array[0]];
//   let direction = 0;

//   for (let i = 1; i < array.length; i++) {
//     const difference = array[i] - array[i - 1];

//     if (difference === 0) {
//       result.push(run);
//       run = [array[i]];
//       direction = 0;
//     } else {
//       const newDirection = difference > 0 ? 1 : -1;

//       if (direction === 0) {
//         direction = newDirection;
//         run.push(array[i]);
//       } else if (direction === newDirection) {
//         run.push(array[i]);
//       } else {
//         result.push(run);
//         run = [array[i]];
//         direction = 0;
//       }
//     }
//   }

//   result.push(run);

//   return result;
// }

function findRuns(array) {
  if (array.length === 0) return [];

  const result = [];
  let run = [array[0]];
  let direction = 0;

  for (let i = 1; i < array.length; i++) {
    const difference = array[i] - array[i - 1];
    const newDirection = Math.sign(difference);

    if (newDirection === 0 || (direction !== 0 && direction !== newDirection)) {
      result.push(run);
      run = [array[i]];
      direction = 0;
    } else {
      run.push(array[i]);
      direction = newDirection;
    }
  }

  result.push(run);

  return result;
}

console.log(findRuns([1, 2, 3, 4, 6, 4, 2, 1, 2, 3]));
console.log(findRuns([5, 4, 3, 2, 1]));
console.log(findRuns([5, 4, 3, 2, 1, 2, 3]));
console.log(findRuns([1, 1, 2, 3, 2, 2, 1]));
console.log(findRuns([1, 2, 3, 2]));
