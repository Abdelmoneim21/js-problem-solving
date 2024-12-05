/**
 * At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0
. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
 */

let arr = [82, 15, 6, 38, 35];

function differenceInAges(ages) {
  let newArr = [];
  ages.forEach((element) => {
    newArr.push(Math.floor(element));
  });
  sortedArr = newArr.sort(function (a, b) {
    return a - b;
  });

  return [
    sortedArr[0],
    sortedArr[sortedArr.length - 1],
    sortedArr[sortedArr.length - 1] - sortedArr[0],
  ];
}

function showDifference(arr) {
  let oldest = Math.max(...arr);
  let youngest = Math.min(...arr);
  let difference = oldest - youngest;

  return [youngest, oldest, difference];
}
console.log(showDifference(arr));
