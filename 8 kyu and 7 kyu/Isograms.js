function isIsogram(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;


    // return new Set(str.toUpperCase()).size === str.length;

}

// console.log(isIsogram("Dermatoglyphics"), true);
// console.log(isIsogram("isogram"), true);
// console.log(isIsogram("aba"), false, "same chars may not be adjacent");
// console.log(isIsogram("moOse"), false, "same chars may not be same case");
// console.log(isIsogram("isIsogram"), false);
// console.log(isIsogram(""), true, "an empty string is a valid isogram");