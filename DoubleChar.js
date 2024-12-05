/**Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
 */

//turn the string into array
//loop through array
//repeat each element
//return the array to string
let string = "String";
function DoubleChar(string) {
  return string
    .split("")
    .map((x) => x + x)
    .join("");
}
console.log(DoubleChar(string));
