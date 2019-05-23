function divisibleBy(numbers, divisor) {
    return numbers.reduce((divisable, number) => {
        if (number % divisor === 0) {
            divisable.push(number)
        }
        return divisable
    }, [])
}

//Another sol

// function divisibleBy(numbers, divisor) {
//     return numbers.filter(n => n % divisor === 0)
//   }

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))