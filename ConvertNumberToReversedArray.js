/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
 */
function digitize(n) {
  let string = String(n);

  let arr = [];
  for (let i = 0; i < string.length; i++) {
    arr.push(string[i]);
  }
  let reversedStringArray = arr.reverse();
  //   reversedStringArray.forEach((x) => parseInt(x));
  let reversedArray = [];
  for (let i = 0; i < reversedStringArray.length; i++) {
    reversedArray.push(parseInt(reversedStringArray[i]));
  }
  return reversedArray;
}

function easierDigitize(n) {
  return n
    .toString() //1-convert number to string
    .split("") // slice the number to array of numbers  (strings)
    .map((x) => Number(x)) //return elements of array to number type
    .reverse(); // reverse the array
}
console.log(easierDigitize(13574));
