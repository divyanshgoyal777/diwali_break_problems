function hasMatchingElements(a, b) {
  for (const key in a) {
    const isPresent = key in b && isEqual(a[key], b[key]);
    if (!isPresent) return false;
  }
  return a.length === b.length;
}

function isEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object' && a !== null) return hasMatchingElements(a, b);
  if (Number.isNaN(a) && Number.isNaN(b)) return true;
  return a === b;
}

module.exports = {
  isEqual,
};