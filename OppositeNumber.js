/*Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

1: -1
14: -14
-34: 34
*/
//check number is positive or negative
//if positive return the negative els return the positive
function opposite(number) {
  return -number;
}
console.log(7, -4);
console.log(opposite(7), opposite(-4));
