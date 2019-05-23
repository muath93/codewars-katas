// isPangram = (string) => (string.toLowerCase().match(/[a-z]/gi) ? true : false)

isPangram = (string) => {
    const pangram = new Set(string.toLowerCase().match(/[a-z]/gi));
    if (pangram.size === 26) {
        return true
    } else return false
}


isPangram = (string) => (new Set(string.toLowerCase().match(/[a-z]/gi)).size === 26)


function isPangram(string) {
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((x) => string.toLowerCase().includes(x));
}

// const string = "The quick brown fox jumps over the lazy dog."
// console.log(isPangram(string), true)
// const string = "This is not a pangram."
const string = "abcdefghijklmopqrstuvwxyz"
// const string = "AbCdEfGhIjKlM zYxWvUtSrQpOn"
console.log(isPangram(string), false)