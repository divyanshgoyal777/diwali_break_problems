function isArrayEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (!isEqual(a[i], b[i])) return false;
  }

  return true;
}

function isObjectEqual(a, b) {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (const key in a) {
    if (!keysB.includes(key)) return false;
    if (!isEqual(a[key], b[key])) return false;
  }

  return true;
}

function isEqual(a, b) {
  if (a === b) return true;

  if (a === null || b === null || typeof a !== "object" || typeof b !== "object") return false;

  if (Array.isArray(a) && Array.isArray(b)) return isArrayEqual(a, b);

  return isObjectEqual(a, b);
}

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