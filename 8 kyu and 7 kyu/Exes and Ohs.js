function XO(str) {
    let x = o = 0;
    str.split('').map((char) => {
        (char.toLowerCase() === 'x') ? x++ :
        (char.toLowerCase() === 'o') ? o++ : null
    })

    return (x === o) ? true : false
}


console.log(XO('xo'), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
console.log(XO("zpzpzpp"), true);
console.log(XO("ooxXm"));
console.log(XO("ooxXmxxx"));