function areArraysEqual(a, b) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

function areObjectsEqual(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (const key in a) {
        if (!(key in b)) return false;
        if (a[key] !== b[key]) return false;
    }

    return true;
}

function areValuesEqual(a, b) {
    return a === b;
}

function areTypesEqual(a, b) {
    return type(a) === type(b);
}

function type(a) {
    if (Array.isArray(a)) return "array";
    if (Number.isNaN(a)) return "NaN";
    return typeof a;
}

function isEqual(a, b) {
    if (areValuesEqual(a, b)) return true;
    if (!areTypesEqual(a, b)) return false;

    switch (type(a)) {
        case "array": return areArraysEqual(a, b);
        case "object": return areObjectsEqual(a, b);
        case "NaN": return true;
    }

    return false;
}

module.exports = {
    isEqual,
};