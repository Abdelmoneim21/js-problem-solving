// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let string = str.split("");
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (string[i] == vowels[j]) {
        count = count + 1;
      }
    }
  }
  return count;
}

console.log(getCount("abdelmoneim"));
