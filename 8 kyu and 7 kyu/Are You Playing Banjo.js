// function areYouPlayingBanjo(name) {
//     if (name[0].toLowerCase() === 'r') {
//         return `${name} plays banjo`
//     } else {
//         return `${name} does not play banjo`
//     }
// }

function areYouPlayingBanjo(name) {
    return (name[0].toLowerCase() === 'r') ? `${name} plays banjo` : `${name} does not play banjo`
}

console.log(areYouPlayingBanjo("Martin") === "Martin does not play banjo");
console.log(areYouPlayingBanjo("Rikke") === "Rikke plays banjo");