//In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.)
// called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans.
//It then returns true if exactly one of the two expressions are true, false otherwise. For example:

function xor(a, b) {
  // TODO: Program Me

  if (a === true || b === true) {
    return true;
  } else {
    return false;
  }
}
console.log(xor(false, false));
