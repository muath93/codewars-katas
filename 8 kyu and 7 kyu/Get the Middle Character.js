function getMiddle(s) {
    const odd = Math.floor(s.length / 2)
    const even = (s.length / 2) - 1
    if (s.length % 2 === 0) {
        return `${s[even]}${s[odd]}`;
    } else {
        return s[odd];
    }
}

console.log((getMiddle("test")));
console.log((getMiddle("testing")));
console.log((getMiddle("middle")));
console.log((getMiddle("A")));