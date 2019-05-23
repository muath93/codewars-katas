function scramble(str, arr) {
    let result = '';
    for (let i = 0; i <= arr.length; i++) {
        str.split('').map((value, index) => {
            if (i === arr[index]) {
                result += value
            }
        })
    }
    return result;
};


function scramble(str, arr) {
    return arr.reduce((result, _, i) => {
        str.split('').map((value, index) => {
            if (i === arr[index]) {
                result += value
            }
        })
        return result;
    }, '');
}


function scramble(str, arr) {
    return arr.reduce((result, _, i) => {
        str.split('').map((value, index) => (i === arr[index]) ? result += value : '')
        return result;
    }, '');
}


console.log(scramble('abcd', [0, 3, 1, 2]), 'acdb');
console.log(scramble('sc301s', [4, 0, 3, 1, 5, 2]), "c0s3s1", "Should return c0s3s1");
console.log(scramble('bskl5', [2, 1, 4, 3, 0]), "5sblk", "Should return 5sblk");