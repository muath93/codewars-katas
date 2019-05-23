function descendingOrder(n) {
    const arrNumbers = n.toString().split('');
    return Number(arrNumbers.sort((a, b) => b > a).join(''));
}
// return arrNumbers.filter((int, index) => {
//     return int > index;
// }).reverse().join('')

console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(123456789), 987654321)