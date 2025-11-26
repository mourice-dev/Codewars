/** @format */

function findOdd(A) {
  return A.reduce((a, b) => a ^ b);
}
console.log(findOdd([7])); // 7
console.log(findOdd([0])); // 0
console.log(findOdd([1,1,2])); // 2
console.log(findOdd([0,1,0,1,0])); // 0
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])); // 4
