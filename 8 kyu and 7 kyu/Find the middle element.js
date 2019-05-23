var gimme = function (inputArray) {
    const max = (Math.max(...inputArray))
    const min = (Math.min(...inputArray))
    for (let i = 0; i < inputArray.length; i++) {
        if ((inputArray[i] < max && inputArray[i] > min)) {
            return i;
        }
    }
}


console.log((gimme([2, 3, 1])));
0, 'Finds the index of middle element'
console.log((gimme([5, 10, 14])));