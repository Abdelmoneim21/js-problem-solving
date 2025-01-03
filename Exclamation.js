/**
 * Remove an exclamation mark from the end of a string. For a beginner kata
 * , you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
 */

let string = "Hi!!!";
function remove(string) {
  return string.replace(/!$/, "");
}

console.log(remove(string));
