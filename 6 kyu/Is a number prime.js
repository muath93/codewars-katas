function isPrime(num) {
    if (num === 0 || num <= 1) return false
    if (num === 2) return true
    else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num >= 2
}



console.log(isPrime(0) === false, );
console.log(isPrime(1) === false, );
console.log(isPrime(2) === true);