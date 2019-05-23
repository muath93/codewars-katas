function whoIsPaying(name) {
    return (name.length <= 2) ? [name] : [name, name[0] + name[1]]
}


console.log(whoIsPaying("Mexico"), ["Mexico", "Me"]);
console.log(whoIsPaying("Melania"), ["Melania", "Me"]);
console.log(whoIsPaying("Melissa"), ["Melissa", "Me"]);
console.log(whoIsPaying("Me"), ["Me"]);
console.log(whoIsPaying(""), [""]);
console.log(whoIsPaying("I"), ["I"]);