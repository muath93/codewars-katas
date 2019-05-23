// capitals = (word) => {
//     let capitalIndex = [];
//     word.split('').map((char, index) => {
//         if (char.match(/[A-Z]/)) {
//             capitalIndex.push(index)
//         }
//     })
//     return capitalIndex
// };

capitals = (word) => {
    return word.split('').reduce((capitalIndex, char, index) => {
        if (char.match(/[A-Z]/)) {
            capitalIndex.push(index)
        }
        return capitalIndex
    }, []);
}

console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
console.log(capitals('Codears'), [0, 3, 4, 6]);