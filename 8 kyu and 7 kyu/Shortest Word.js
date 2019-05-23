function findShort(s) {
    const shortest = s.split(' ').sort((a, b) => {
        return a.length - b.length
    });
    return shortest[0].length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);