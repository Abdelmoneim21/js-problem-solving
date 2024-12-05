// You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.

//1-initial sum = 0
// loop on array
//check if element is positive
//add the element to the initial sum
//return sum
let arr = [1, -2, 4, -5, 6, 12];

function SumOfPositive(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(SumOfPositive(arr)); //16

function builtin_sol(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
}
console.log(builtin_sol(arr));
