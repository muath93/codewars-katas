function feast(beast, dish) {
    const dishs = dish.split(' ');
    return beast.split(' ').some((word, i) => {

        console.log(dishs.includes(word));

        return beast.includes(word)
    })
}

console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)