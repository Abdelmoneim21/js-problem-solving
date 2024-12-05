/*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
 */

//number of sheep = nummber of true values

let sheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheep(sheep) {
  let number = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      number += 1;
    }
  }
  return number;
}

//using map function

function mapCount(sheep) {
  let count = 0;
  sheep.map((x) => {
    if (x === true) {
      count += 1;
    }
  });
  return count;
}

console.log(mapCount(sheep));
