function positiveSum(arr) {
    let sum = 0;
    arr.forEach(element => {
        // console.log(Math.sign(element));
        if (Math.sign(element) === 1) {
            sum += element;
        }
    });
    return sum;
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);