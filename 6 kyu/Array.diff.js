function array_diff(a, b) {
    let arr = [];

    for (let i = 0; i < a.length; i++) {
        const n = a[i];
        if (!arr[n]) {
            arr.push(n)
        }
        if (arr[n]) {
            arr.pop(n)
        }
    }
    console.log(arr);

    for (let j = 0; j < b.length; j++) {
        const m = b[j];
        if (arr[m]) {
            console.log(m);
            console.log(j);

            arr.splice(m)
        }
    }
    console.log(arr);

    return arr
}

function array_diff(a, b) {
    let arr = {};

    for (let i = 0; i < a.length; i++) {
        const n = a[i];
        if (!arr[n]) {
            arr[n] = 1
            // console.log(arr);
        } else if (arr[n]) {
            console.log(n);
            arr[n]++
        }
    }
    console.log(arr);

    for (let j = 0; j < b.length; j++) {
        const m = b[j];
        if (arr[m]) {
            console.log(m);

            delete arr[m]
            console.log(arr);

        }
    }
    let x = []
    return Array.from(x).fill(Object.values(arr))
}

// console.log(array_diff([], [4, 5]), []);
// console.log(array_diff([1, 2], [1]), [2]);
console.log(array_diff([1, 2, 2], [1]), [2, 2]);
// console.log(array_diff([3, 4], [3]), [4]);
// console.log(array_diff([1, 8, 2], []), [1, 8, 2]);