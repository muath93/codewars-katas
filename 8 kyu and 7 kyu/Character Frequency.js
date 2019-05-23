function charFreq(message) {
    let result = {}
    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        if (!result[char]) {
            result[char] = 1
        } else {
            result[char]++
        }
    }
    return result
}

function charFreq(message) {
    return message.split('').reduce((result, char) => {
        (!result[char]) ? result[char] = 1: result[char]++
        return result
    }, {})
}


console.log(charFreq("I like cats"));