/** @format */

function duplicateCount(text) {
  const t = text.toLowerCase();
  return [...new Set(t)].filter((c) => t.split(c).length - 1 > 1).length;
}
