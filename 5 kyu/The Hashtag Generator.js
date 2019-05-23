// function generateHashtag(str) {
//     if (!str.trim().length) return false;
//     // const string = str.replace(/  /g, "");
//     const string = str.replace(/\s+/g, " ");

//     let final = '';

//     string.split(' ').reduce((hash, word) => {
//         const first = word[0].toUpperCase();
//         const other = word.split('').slice(1).join('')
//         let result = '';
//         result += `${first}${other}`;
//         if (result.length < 140) {
//             return final += result
//         } else {
//             return false;
//         }
//     }, '');

//     console.log(final);

//     console.log(final);
//     if (final.includes('false')) {
//         return false
//     } else {
//         return '#' + final
//     }
// }

function generateHashtag(str) {
    if (!str.trim().length) return false;
    const string = str.replace(/\s+/g, " ");
    let hash = '';

    string.split(' ').forEach((word) => {
        const first = word[0].toUpperCase();
        const other = word.split('').slice(1).join('')
        hash += `${first}${other}`;
    });
    return (hash.length < 140) ? '#' + hash : false
}

function generateHashtag(str) {
    if (!str.trim().length) return false;
    const string = str.replace(/\s+/g, " ");
    let hash = '';
    string.split(' ').forEach((word) => {
        hash += word[0].toUpperCase() + word.substring(1);
    });
    return (hash.length < 140) ? '#' + hash : false
}
// console.log(generateHashtag(""), false, "Expected an empty string to return false")
// console.log(generateHashtag("code                                                                                                                                            wars"))
// console.log(generateHashtag(" ".repeat(200)), false)
console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
// console.log(generateHashtag("Codewars"), "#Codewars")
// console.log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
// console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
// console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
// console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false)
// console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
// console.log(generateHashtag("a".repeat(140)), false)