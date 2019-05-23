function duplicateCount(text) {
    if (!text.length) return 0
    let result = [];
    let count = [];
    for (let i = 0; i < text.length; i++) {

        const char = text[i].toLowerCase();
        if (!result[char]) {
            result[char] = 1

        } else if (result[char]) {
            result[char]++
        }
    }
    for (const char in result) {
        if (result[char] > 1) {
            count.push(1)
        }
    }
    return count.length
}
// console.log(duplicateCount(""), 0);
// console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
// console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
