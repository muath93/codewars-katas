function openOrSenior(data) {
    return data.reduce((acc, value) => {
        if (value[0] >= 55 && value[1] > 7) {
            acc.push('Senior')
        } else acc.push('Open')
        return acc;
    }, [])
}


console.log(openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20]
]), ['Open', 'Senior', 'Open', 'Senior'])
console.log(openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [54, 23]
]), ['Open', 'Open', 'Open', 'Open'])
console.log(openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12]
]), ['Senior', 'Open', 'Open', 'Open'])