// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  let beast_ = beast.split("");
  let dish_ = dish.split("");

  if (
    beast_[0] == dish_[0] &&
    beast_[beast_.length - 1] == dish_[dish_.length - 1]
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(feast("lion", "light onion"));
