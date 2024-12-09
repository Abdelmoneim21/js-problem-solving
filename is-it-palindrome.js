// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
  let str = x.toLowerCase();
  console.log(str);
  let arr = Array.from(str);
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[i] === arr[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function Palindrome(x) {
  let str = x.toLowerCase();
  console.log(str);
  return str == str.split("").reverse().join("");
}
console.log(Palindrome("Menem"));
