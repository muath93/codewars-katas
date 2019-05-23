function nextItem(xs, item) {
    let result;
    for (let i = 0; i <= xs.length; i++) {
        if (xs[i] === item) {
            return result = xs[i + 1]
        }
    }
    return result
}



function nextItem(xs, item) {
    let result;
    for (let i = 0; i < xs.length; i++) {
        if (xs[i] === item) {
            return result = xs[i + 1]
        }
    }
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6);
console.log(nextItem(['a', 'b', 'c'], 'd'), undefined);
console.log(nextItem(['a', 'b', 'c'], 'c'), undefined);
console.log(nextItem("testing", "t"), "e");