//http://127.0.0.1:5500/Tours-details/first-tour.html?id=5&image=http://egyvoyage.somee.com/Resources/

let string =
  "http://127.0.0.1:5500/Tours-details/first-tour.html?id=5&image=http://egyvoyage.somee.com/Resources/";
let extract = function (string) {
  let arr = string.split("?");

  let sss = arr[1][3];

  return sss;
};

console.log(extract(string));
