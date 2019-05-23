function letterCheck(arr) {
    let result = {};
    for (let i = 0; i < arr[1].length; i++) {
        const letter = arr[1][i].toLowerCase();
        if (!result[letter]) {
            result[letter] = letter
        }
    }
    for (let j = 0; j < arr[0].length; j++) {
        const letter = arr[0][j].toLowerCase();
        if (result[letter]) {
            delete result[letter]
        }
    }
    return (Object.keys(result).length) ? false : true;
}

console.log(letterCheck(["trances", "nectar"]), true)
console.log(letterCheck(["THE EYES", "they see"]), true)
console.log(letterCheck(["assert", "staring"]), false)
// console.log(letterCheck(["arches", "later"]), false)
// // console.log(letterCheck(["dale", "caller"]), false)
// console.log(letterCheck(["parses", "parsecs"]), false)
// console.log(letterCheck(["replays", "adam"]), false)
// console.log(letterCheck(["mastering", "streaming"]), true)
// console.log(letterCheck(["drapes", "compadres"]), false)
// console.log(letterCheck(["deltas", "slated"]), true)