function findOutlier(integers) {
    let x;
    integers.forEach(num => {
        if (num % 2 === 0) {
            console.log(num);

            return integers.some(val => {
                if (val % 2 !== 0) {
                    console.log(val);

                    x = val
                }
            })
        }
        if (num % 2 !== 0) {
            console.log(num);

            integers.some(val => {
                if (val % 2 === 0) {
                    console.log(val);

                    x = val
                }
            })
        }

    })
    console.log(x);

    return x;
}

console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2, 6, 8, 10, 3]), 3)
console.log(findOutlier([0, 0, 3, 0, 0]), 3)
console.log(findOutlier([1, 1, 0, 1, 1]), 0)