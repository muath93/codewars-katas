// function isSquare(arr) {
//     if (arr.length > 0)
//         return arr.every((n, i) => {
//             const x = i + 1;
//             return n === Math.pow(x, 2)
//         })
// }


function isSquare(arr) {
    if (arr.length > 0)
        return arr.every((n, i) => {
            return Math.pow(n, Math.sqrt(n, 2))
        })
}

console.log(isSquare([3, 256, 289, 196, 289, 1, 361, 100, 36, 100, 361, 225, 81, 256, 289, 324, 144, 49, 0, 400, 121]), true);
console.log(isSquare([289, 169, 121, 169, 256, 25, 324, 121, 64, 49, 121, 81, 36, 81, 324, 36, 361, 169, 16, 16, 81]), true);
console.log(isSquare([1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400]), true);
// console.log(isSquare([-1, 2, 3, 4, 5, 6]), false);
console.log(isSquare([]), undefined);
console.log(isSquare([1, 2, 4, 15]), false);