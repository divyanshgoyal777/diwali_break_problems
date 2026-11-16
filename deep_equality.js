function checkElements(a, b) {
  for (const key in a) {
    if (!isEqual(a[key], b[key]) || !Object.keys(b).includes(key)) return false;
  }

  return true;
}

function isEqual(a, b) {
  if (a === b) return true;
  if (a === null || b === null || typeof a !== "object" || typeof b !== "object") return false;
  if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) return checkElements(a, b);
  if (!Array.isArray(a) && !Array.isArray(b) && Object.keys(a).length === Object.keys(b).length) return checkElements(a, b);

  return false;
}

console.log(isEqual({}, [])); // false
console.log(isEqual({ a: undefined }, { b: 1 })); // false
console.log(isEqual({ b: 1 }, { a: undefined })); // false
console.log(isEqual(1, 1)); // true
console.log(isEqual("a", "a")); // true
console.log(isEqual([], [])); // true
console.log(isEqual([1], [1])); // true
console.log(isEqual([1], [1, 2])); // false
console.log(isEqual(1, "1")); // false
console.log(isEqual({ a: 1 }, { a: 1 })); // true
console.log(isEqual({ a: 1 }, { b: 1 })); // false
console.log(isEqual({ a: [1] }, { a: [1] })); // true
console.log(isEqual({ a: { b: 1 } }, { a: { b: 1 } })); // true
console.log(
  isEqual(
    { name: "Alice", address: { city: "Delhi" } },
    { name: "Alice", address: { city: "Delhi" } },
  ),
); // true