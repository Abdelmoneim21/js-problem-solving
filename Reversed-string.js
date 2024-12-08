// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  let str_1 = Array.from(str);
  let str_2 = [];
  for (let i = str_1.length; i >= 0; i--) {
    str_2.push(str_1[i]);
  }
  return str_2.toString().replace(/[","]/g, "");
}
console.log(solution("ahmed"));
