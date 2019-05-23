function getCount(str) {
    let vowelsCount = 0;
    str.split('').filter(char => (char.match(/[aeiou]/)) ? vowelsCount++ : null)
    return vowelsCount;
}

// Another sol:

// function getCount(str) {
//     return str.replace(/[^aeiou]/gi, '').length;
//   }

console.log(getCount("abracadabra"), 5)
console.log(getCount("abracaoeiudbra"), 8)