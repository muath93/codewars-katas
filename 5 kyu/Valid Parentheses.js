function validParentheses(parens) {
    if (parens[0] === ')' || parens[parens.length - 1] === '(') return false
    let sum = 0;
    parens.split('').forEach(paren => {
        if (paren === '(') {
            sum += 1
        } else {
            sum -= 1
        }
        if (sum < 0) {
            return false
        }
    })
    return sum === 0
}

function validParentheses(parens) {
    let sum = 0;
    for (let i = 0; i < parens.length; i++) {
        const paren = parens[i];
        if (paren === '(') {
            sum += 1
        } else {
            sum -= 1
        }
        if (sum < 0) {
            return false
        }
    }
    return sum === 0
}


// console.log(validParentheses("()"), true);
// console.log(validParentheses("())"), false);
// console.log(validParentheses(")()()()("), false);
console.log(validParentheses("())("), false);