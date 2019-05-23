function oddOrEven(array) {
    let sum = 0;
    array.forEach(x => sum += x)
    return (sum % 2 === 0) ? 'even' : 'odd'
}

function oddOrEven(array) {
    return array.reduce((sum, x) => sum + x, 0) % 2 === 0 ? 'even' : 'odd';
}
console.log(oddOrEven([0]), 'even')
console.log(oddOrEven([1]), 'odd')
console.log(oddOrEven([]), 'even')