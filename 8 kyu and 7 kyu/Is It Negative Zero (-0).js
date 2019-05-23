function isNegativeZero(n) {
    return Object.is(n, -0)
    // return ((1 / n) === -Infinity && n === 0) ? true : false;
}

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0), false);
console.log(isNegativeZero(-Infinity), false);
console.log(isNegativeZero(-0), false);
console.log(isNegativeZero(-3), false);
console.log(isNegativeZero(-2), false);
console.log(isNegativeZero(-1), false);
console.log(isNegativeZero(-Number.MIN_VALUE), false);
console.log(isNegativeZero(Number.MIN_VALUE), false);
console.log(isNegativeZero(1), false);
console.log(isNegativeZero(2), false);
console.log(isNegativeZero(3), false);
console.log(isNegativeZero(4), false);
console.log(isNegativeZero(5), false);
console.log(isNegativeZero(Infinity), false);