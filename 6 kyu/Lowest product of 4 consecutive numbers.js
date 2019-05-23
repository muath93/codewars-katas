function lowestProduct(input) {
    if (input.length < 4) return 'Number is too small';

    const numbers = input.split('').map(num => {
        return +num
    })
    let count = Math.min(...numbers);
    // console.log(count);

    const arr = numbers.filter((num, i) => {
        if (num === count) {
            count = num
            console.log(count);

            return num


            //  return sum = sum* num
        }
        // else return sum
    });

    console.log(arr);

}

// console.log(lowestProduct("123456789"),24); 
console.log(lowestProduct("1234"), 24);
console.log(lowestProduct("234567899"), 120);
// console.log(lowestProduct("2345611117899"),1);
// console.log(lowestProduct("333"),"Number is too small");
// console.log(lowestProduct("1234111"),4,"Numbers should be consecutives");        