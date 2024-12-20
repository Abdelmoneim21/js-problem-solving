// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  let arr = Array.from(x);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr[i] = 0;
    } else {
      arr[i] = 1;
    }
  }
  return arr.join("");
}

// more simple solution
function fakeBin_(x) {
  return x
    .split("")
    .map((x) => (x < "5" ? "0" : "1"))
    .join("");
}

console.log(fakeBin("1236785"));
