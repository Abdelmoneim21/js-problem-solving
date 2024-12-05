// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function SumWithoutHighestAndLowest(arr) {
  let sum = 0;
  let highest = arr[0];
  let lowest = arr[0];
  if (arr.length <= 1 || arr.isNull == true) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > highest) {
        highest = arr[i];
      }
      if (arr[i] < lowest) {
        lowest = arr[i];
      }
      sum += arr[i];
    }
    return sum - (highest + lowest);
  }
}
console.log(SumWithoutHighestAndLowest([undefined]));
