function findOdd(A) {
    let odd = {};
    const count = 1;
    let oddNum;

    A.forEach(val => {
        if (!odd[val]) {
            odd[val] = count
        } else {
            odd[val]++
        }
    });
    for (let key in odd) {
        if (odd[key] % 2 !== 0) {
            oddNum = key;
        }
    }
    return +oddNum
}

// function findOdd(A) {
//     let odd = {};
//     const count = 1;
//     let oddNum;

//     A.forEach(val => {
//         if (!odd[val] || A.length < 2) {
//             odd[val] = count
//             oddNum = val
//             console.log(odd);

//             console.log(oddNum);

//         } else if (odd[val] && odd[val] > 1) {
//             console.log(oddNum);
//             console.log(odd);
//             odd[val] = count

//         } else if (odd[val] === 1) {
//             console.log(odd);
//             oddNum = val
//         } else {
//             odd[val]++
//         }

//     });
//     console.log(odd);

//     console.log(oddNum);
//     return oddNum
// }


console.log(findOdd([10]), 10);
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);