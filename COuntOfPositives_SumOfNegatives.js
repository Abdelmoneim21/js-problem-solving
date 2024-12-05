/**Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */
// loop through array
// check element if positive get length of them
// if negative sum them
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  // your code here
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count += 1;
    }
    if (input[i] < 0) {
      sum += input[i];
    }
  }
  return [count, sum];
}

function EasierWay(input) {
  let count = input.filter((x) => x > 0).length;
  let sum = input
    .filter((x) => x < 0)
    .reduce((current, acc) => current + acc, 0);

  return [count, sum];
}
console.log(EasierWay(arr));
