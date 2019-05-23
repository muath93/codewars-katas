function towerBuilder(nFloors) {
    let arr = [];
    let tower = '';
    for (let i = nFloors; i >= 1; i--) {
            // tower+= "*"
            // tower+=''
        
        for (let j = 1; j <= i; j++) {
            tower+= '*'
        }

    
        tower+=''
    arr.push(tower)
    }

    return arr;
}

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);