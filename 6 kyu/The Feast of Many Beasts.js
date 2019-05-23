function feast(beast, dish) {
    const lastB = beast.length - 1
    const lastD = dish.length - 1
    if (beast[0] === dish[0] && beast[lastB] === dish[lastD]) return true
    else return false
}

function feast(beast, dish) {
    return (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1])
}


console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)