var numberToMoney = function (n) {
    const x = Math.floor(n * 100) / 100;
    return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

console.log(numberToMoney(2546.2562));
console.log(numberToMoney(2546.2562), '2,546.25');
console.log(numberToMoney(1500.342626), '1,500.34');
console.log(numberToMoney(100.2134), '100.21');
console.log(numberToMoney(3352.22), '3,352.22');