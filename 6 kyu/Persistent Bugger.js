function persistence(num) {
    if (num < 10) return 0
    let count = 0;
    while (num >= 10) {

        let temp = num / 10
        console.log(temp);
        let first = Math.floor(temp);
        console.log(first);

        let second = +temp.toString().slice(2);
        console.log(second);

        temp = first * second
        num = temp;

        count++
    }
    return count
}

//  console.log(persistence(39),3);
//  console.log(persistence(4),0);
//  console.log(persistence(25),2);
console.log(persistence(999), 4);