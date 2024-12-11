// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

function removeChar(str) {
  let arr = Array.from(str);
  let arr_1 = arr.splice(1, arr.length - 2);
  return arr_1.toString().split(",").join("");
}
console.log(removeChar("eloquent"));
