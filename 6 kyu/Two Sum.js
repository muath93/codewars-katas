function twoSum(numbers, target) {
    return numbers.reduce((result, num, i) => {
        for (let j = i + 1; j < numbers.length; j++) {
            if ((numbers[j] + num === target && i != j) && result.length < 2) {
                result.push(i, j);
            }
        }
        return result;
    }, []);
}

function numericalCompare(a, b) {
    return a - b;
}

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
}



console.log(twoSum([1, 2, 3], 4).sort(numericalCompare), [0, 2]);
console.log(twoSum([1234, 5678, 9012], 14690).sort(numericalCompare), [1, 2]);
console.log(twoSum([2, 2, 3], 4).sort(numericalCompare), [0, 1]);
console.log(twoSum([72, 666, 477, 543, 752, 543, 964, 889, 732, 81], 1432).sort(numericalCompare));
console.log(twoSum([340, 110, 64, 765, 811, 356, 463, 827, 1, 112], 875));