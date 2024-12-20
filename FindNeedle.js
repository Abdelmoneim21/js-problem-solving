/**Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"
 */
//LOOP THROUGH ARRAY
//CHECK IF ELEMENT == "NEEDLE"
// RETURN THE MESSAGE

let haystack = [
  "hay",
  "junk",
  "hay",
  "hay",
  "needle",
  "moreJunk",
  "randomJunk",
];

function findNeedle(haystack) {
  let index;
  for (let i = 0; i < haystack.length; i++) {
    if (arr[i] == "needle") {
      index = i;
    }
  }
  return `found the needle at position ${index}`;
}

function easierWay(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}
console.log(easierWay(haystack));
