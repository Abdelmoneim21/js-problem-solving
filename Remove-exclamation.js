// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks_(s) {
  let arr = Array.from(s);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "!") {
      arr.pop(arr[i]);
    }
  }
  return String(arr).replace(/[","]/g, "");
}

function removeExclamationMarks(s) {
  return s.replace(/[!]/g, "");
}

console.log(removeExclamationMarks("ahmed!"));
