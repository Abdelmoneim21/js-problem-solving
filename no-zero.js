// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

function noBoringZeros(n) {
  while (Number.isInteger(n / 10) === true) {
    n = n / 10;
  }
  return n;
}
function noBoringZeros_(n) {
  let txt = String(n);
  while (txt.endsWith(0)) {
    txt = txt.slice(0, txt.length - 1);
  }
  return Number(txt);
}
console.log(noBoringZeros_(1950560000));
