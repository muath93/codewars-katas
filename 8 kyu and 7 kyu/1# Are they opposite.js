function isOpposite(s1, s2) {

    const str = [...s1];
    console.log(s1.charAt(0));

    const arr = str.map((element, i) => {
        if (s1.charAt(i) === s2.charAt(i).toLowerCase() || s1.charAt(i) === s2.charAt(i).toUpperCase()) {
            return true;
        }
    });

    console.log(arr.join(' '))

}


console.log(isOpposite("ab", "AB"), true);
console.log(isOpposite("aB", "Ab"), true);
console.log(isOpposite("aBcd", "AbCD"), true);
console.log(isOpposite("aBcde", "AbCD"), false);
console.log(isOpposite("AB", "Ab"), false);
console.log(isOpposite("", ""), false);