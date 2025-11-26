/** @format */

function duplicateCount(text) {
  const t = text.toLowerCase();
  return [...new Set(t)].filter((c) => t.split(c).length - 1 > 1).length;
}
console.log(duplicateCount("abcde"));              // 0
console.log(duplicateCount("aabbcde"));            // 2
console.log(duplicateCount("aabBcde"));            // 2
console.log(duplicateCount("indivisibility"));     // 1
console.log(duplicateCount("Indivisibilities"));   // 2
console.log(duplicateCount("aA11"));               // 2
console.log(duplicateCount("ABBA"));               // 2
