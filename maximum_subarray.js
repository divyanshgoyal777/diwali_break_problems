function maximumSubarray(array) {
  if (array.length === 0) return [];

  let max = -Infinity;
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      let sum = 0;

      for (let k = i; k <= j; k++) {
        sum += array[k];
      }

      if (sum > max) {
        result.splice(0);
        result.push(array.slice(i, j + 1));
        max = sum;
      } else if (sum === max) {
        result.push(array.slice(i, j + 1));
      }
    }
  }

  return result;
}

function maximumSubarray(array) {
  if (array.length === 0) return [];

  let max = -Infinity;
  const result = [];

  for (let i = 0; i < array.length; i++) {
    let sum = 0;

    for (let j = i; j < array.length; j++) {
      sum += array[j];

      if (sum > max) {
        result.splice(0);
        result.push(array.slice(i, j + 1));
        max = sum;
      } else if (sum === max) {
        result.push(array.slice(i, j + 1));
      }
    }
  }

  return result;
}

// Can't return all tied maximum subarrays
function maximumSubarray(array) {
  if (array.length === 0) return [];

  let maxSum = array[0];
  let currSum = array[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < array.length; i++) {
    currSum = Math.max(array[i], currSum + array[i]);

    if (currSum === array[i]) tempStart = i;

    if (currSum > maxSum) {
      maxSum = currSum;
      start = tempStart;
      end = i;
    }
  }

  return array.slice(start, end + 1);
}

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 4, -1, 2, 1
console.log(maximumSubarray([1, 2, 3, 4, 5])); // [[1, 2, 3, 4, 5]]
console.log(maximumSubarray([-5, -2, -8, -1, -4])); // [[-1]]
console.log(maximumSubarray([-3, 4, -1, 2, -1, -5])); // [[4, -1, 2]]
console.log(maximumSubarray([5, -1, 2, -10, 3])); // [[5, -1, 2]]
console.log(maximumSubarray([1, -1, 1])); // [[1], [1, -1, 1]]
console.log(maximumSubarray([0, 0, 0])); // [[0, 0, 0], [0, 0], [0], [0, 0], [0]]