/**
 * Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 *
 */

//function takes boolean value
//if boolean is true return "yes"
//if false return "no"

function boolToWord(bool) {
  //   if (bool === true) {
  //     return "Yes";
  //   }
  //   if (bool === false) {
  //     return "No";
  //   }

  return bool == true ? "Yes" : "No";
}

console.log(boolToWord(true));
