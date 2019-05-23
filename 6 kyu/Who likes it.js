function likes(names) {
    if (!names.length) return 'no one likes this'
    return names.reduce((likes, name, i) => {
        if (names.length == 1) {
            likes = `${name} likes this`
        } else if (names.length == 2) {
            likes = `${names[0]} and ${names[1]} like this`
        } else if (names.length === 3) {
            likes = `${names[0]}, ${names[1]} and ${names[2]} like this`
        } else {
            likes = `${names[0]}, ${names[1]} and ${names.length-2} others like this`
        }
        return likes
    }, '')
}

function likes(names) {
    if (!names.length) return 'no one likes this'
    return names.reduce((likes, name, i) => {
        (names.length == 1) ?
        likes = `${name} likes this`: (names.length == 2) ?
            likes = `${names[0]} and ${names[1]} like this` :
            (names.length === 3) ?
            likes = `${names[0]}, ${names[1]} and ${names[2]} like this` :
            likes = `${names[0]}, ${names[1]} and ${names.length-2} others like this`

        return likes
    }, '')
}

console.log(likes([]) === 'no one likes this');
console.log(likes(['Peter']) === 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']) === 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']) === 'Alex, Jacob and 2 others like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'ali']) === 'Alex, Jacob and 3 others like this');