/**
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

 */
// createarray
//check if numbers is postive => return -n else +n

let array = [2, 3, 4, -1, -5];
let n = -5;
console.log(-n);

function invert(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = -array[i];
  }

  return array;
}

console.log(invert([1, 2, -5, 3, -4]));
