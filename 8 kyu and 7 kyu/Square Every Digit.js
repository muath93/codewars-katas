function squareDigits(num) {
    const numbers = num.toString();
    return Number(Array.from(numbers, x => x * x).join(''));
}
console.log(squareDigits(9119), 811181);