function hasMatchingElements(a, b) {
  for (const key in a) {
    const isPresent = key in b && isEqual(a[key], b[key]);
    if (!isPresent) return false;
  }
  return a.length === b.length;
}

function isEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object' && a !== null) return hasMatchingElements(a, b);
  return a === b;
}

const testCases = [
  { a: 1, b: 1, expected: true, title: "Same numbers" },
  { a: "a", b: "a", expected: true, title: "Same strings" },
  { a: [], b: [], expected: true, title: "Empty arrays" },
  { a: [1], b: [1], expected: true, title: "Same arrays" },
  { a: [1], b: [1, 2], expected: false, title: "Different arrays" },
  { a: 1, b: "1", expected: false, title: "Number and string" },
  { a: { a: 1 }, b: { a: 1 }, expected: true, title: "Object with same key-value" },
  { a: { a: 1 }, b: { b: 1 }, expected: false, title: "Object with diff key and same value" },
  { a: { a: 1 }, b: { a: 2 }, expected: false, title: "Object with same key and diff value" },
  { a: { a: [1] }, b: { a: [1] }, expected: true, title: "Object with array as a value" },
  { a: { a: { b: 1 } }, b: { a: { b: 1 } }, expected: true, title: "Nested Object" },
  {
    a: { name: "Alice", address: { city: "Delhi" } },
    b: { name: "Alice", address: { city: "Delhi" } }, expected: true, title: "User Data in Object"
  },
  { a: {}, b: [], expected: false, title: "Different objects" },
  { a: { a: undefined }, b: { b: 1 }, expected: false, title: "Object with undefined and Object with value" },
  { a: { b: 1 }, b: { a: undefined }, expected: false, title: "Object with value and Object with undefined" },
];

function test(a, b, expected, title) {
  const isPassed = isEqual(a, b) === expected;
  const symbol = isPassed ? "✅" : "❌";
  const message = `${symbol} ${title}`;
  return message;
}

for (const testCase of testCases) {
  console.log(test(testCase.a, testCase.b, testCase.expected, testCase.title));
}