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

function getSymbol(isPassed) {
  return isPassed ? "✅" : "❌";
}

function getMessage(isPassed, result, expected) {
  return isPassed ? "" : `\nExpected: ${expected} \nActual: ${result}`;
}

function test(a, b, expected) {
  const result = isEqual(a, b);
  const isPassed = result === expected;
  const symbol = getSymbol(isPassed);
  const message = getMessage(isPassed, result, expected);
  console.log(a, "===", b, symbol, message);
};

test({ a: undefined }, { b: 1 }, false);
test({ b: 1 }, { a: undefined }, false); // false
test(1, 1, true); // true
test("a", "a", true); // true
test([], [], true); // true
test([1], [1], true); // true
test([1], [1, 2], false); // false
test(1, "1", false); // false
test({ a: 1 }, { a: 1 }, true); // true
test({ a: 1 }, { b: 1 }, false); // false
test({ a: [1] }, { a: [1] }, true); // true
test({ a: { b: 1 } }, { a: { b: 1 } }, true); // true
test(
  ({ name: "Alice", address: { city: "Delhi" } }),
  ({ name: "Alice", address: { city: "Delhi" } })
  , true); // true