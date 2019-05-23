// function solution(str, ending){
//  return str.endsWith(ending)
// }

const solution = (str, ending) => str.endsWith(ending);



console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)