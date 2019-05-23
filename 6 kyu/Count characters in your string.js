function count(string) {
    if (!string.length) return {};
    let result = {}
    const count = 1;
    for (let i = 0; i < string.length; i++) {
        if (!result[string[i]]) {
            result[string[i]] = count
        } else
            result[string[i]]++
    }
    return result;
}



console.log(count("aba"), {
    a: 2,
    b: 1
});
console.log(count(""), {});