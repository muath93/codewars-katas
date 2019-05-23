function stray(numbers) {
  let result = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    console.log(result);
    if (!result[num]) {
      result[num] = 1
      console.log(result);

    } else if (result[num]) {
      result[num]++
    }
  }
  for (const key in result) {
    if (result[key] === 1) {
      return +key
    }

  }
}

// function stray(numbers) {
//   // let result = {};
//     numbers.reduce((result,num,i)=>{

//      if (!result[num]) {
//       result[num] = 1
//       console.log(result);

//     } else if (result[num]) {
//       result[num]++
//     }    
//     console.log(result[x]);

//     return result[x]

//   },{})

// for (const key in result) {
//   if (result[key] === 1) {
//     return +key
//   }

// }  

// Brilliant sol:-
const stray2 = nums => nums.reduce((a, b) => a ^ b);

// }

console.log(stray2([1, 1, 2]), 2);