function list(names) {
    if (!names.length) return '';
    return names.reduce((result, name, i) => {
        if (names.length === 1) {
            return result = name.name
        }
        if (names.length === 2) {
            result = `${names[0].name} & ${names[1].name}`
        }
        if (names.length > 2) {
            if (i !== names.length - 2 && i !== names.length - 1) {
                result += `${names[i].name}, `
            } else if (i === names.length - 2) {
                result += `${names[i].name} `
            } else {
                result += `& ${names[i].name}`
            }
        }
        return result;
    }, '')
}

console.log(list([{
    name: 'Bart'
}, {
    name: 'Lisa'
}, {
    name: 'Maggie'
}, {
    name: 'Homer'
}, {
    name: 'Marge'
}]))
// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie')
// console.log(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa')
// console.log(list([{name: 'Bart'}]), 'Bart')
// console.log(list([]), '')
console.log(list([{
    name: 'Bart'
}, {
    name: 'Lisa'
}, {
    name: 'Maggie'
}, {
    name: 'Homer'
}, {
    name: 'Marge'
}]), 'Bart, Lisa, Maggie, Homer & Marge')

// Must work with many names - Expected: 'Bart, Lisa, Maggie, Homer & Marge', instead got: 'Bart, Lisa, Maggie, Homer, & Marge'
// Must work with many names - Expected: 'Bart, Lisa & Maggie', instead got: 'Bart, Lisa, & Maggie'