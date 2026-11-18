// const { isEqual } = require("./deep_equality");
const { isEqual } = require("./deep_equality2");

function test(title, expected, a, b) {
    const isPassed = isEqual(a, b) === expected;
    const symbol = isPassed ? "✅" : "❌";

    console.log(`${symbol} | ${title}`);
}

function testDifferentTypes() {
    test("number and string should be inequal", false, 5, "a");
    test("number and boolean should be inequal", false, 5, true);
    test("number and array should be inequal", false, 5, [1, 2]);
    test("number and object should be inequal", false, 5, { a: 1 });
    test("string and boolean should be inequal", false, "a", false);
    test("string and array should be inequal", false, "a", [1, 2]);
    test("string and object should be inequal", false, "a", { a: 1 });
    test("boolean and array should be inequal", false, true, [1, 2]);
    test("boolean and object should be inequal", false, false, { a: 1 });
    test("array and object should be inequal", false, [1, 2], { a: 1, b: 1 });
    test("Empty array and empty object should be inequal", false, [], {});
}

function testNumber() {
    test("Two same numbers should be equal", true, 2, 2);
    test("Two different numbers should be inequal", false, 2, 5);
}

function testBoolean() {
    test("Two same booleans should be equal", true, true, true);
    test("Two different booleans should be inequal", false, true, false);
}

function testString() {
    test("Two same strings should be equal", true, "ab", "ab");
    test("Two different strings should be inequal", false, "a", "b");
}

function testArray() {
    test("Two empty arrays should be equal", true, [], []);
    test("Two arrays with same elements and same length should be equal", true, [1], [1]);
    test("Two arrays with different length should be inequal", false, [1, 2, 3], [1, 2]);
    test("Two arrays with same length but different values should be inequal", false, [1, 2], [1, 1]);
}

function testObject() {
    test("Two empty object should be equal", true, {}, {});
    test("Two objects with same keys and same values should be equal", true, { a: 1, b: 2 }, { a: 1, b: 2 });
    test("Two objects with different keys and same values should be inequal", false, { a: 1, b: 2 }, { a: 1, c: 2 });
    test("Two objects with same keys and different values should be inequal", false, { a: 1, b: 2 }, { a: 2, b: 2 });
}

function testNanUndefinedNull() {
    test("Two NaN should be equal", true, NaN, NaN);
    test("Two null should be equal", true, null, null);
    test("Two undefined should be equal", true, undefined, undefined);
}

function main() {
    testNumber();
    testBoolean();
    testString();
    testArray();
    testObject();
    testDifferentTypes();
    testNanUndefinedNull();
}

main();