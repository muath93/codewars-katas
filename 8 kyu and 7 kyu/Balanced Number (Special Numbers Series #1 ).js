function balancedNum(number) {
    const arrNum = [...number.toString()];
    const even = (arrNum.length / 2) - 1
    const odd = Math.floor(arrNum.length / 2)
    console.log(odd)

    console.log(arrNum);
    let sum;
    let x;
    parseInt(sum);
    for (let i = 0; i < odd; i++) {
        x = Number(arrNum[i]);
        sum += x;
    }
    return sum;
}


console.log(balancedNum(1024), "Not Balanced")
console.log(balancedNum(66545), "Not Balanced")
console.log(balancedNum(295591), "Not Balanced")
console.log(balancedNum(1230987), "Not Balanced")
console.log(balancedNum(56239814), "Balanced")