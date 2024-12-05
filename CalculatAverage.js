/**
 * 
 * Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.


 */

let list = [];

function findAverage(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });

  if (array.length == 0) {
    return 0;
  }
  return sum / array.length;
}

console.log(findAverage(list));
