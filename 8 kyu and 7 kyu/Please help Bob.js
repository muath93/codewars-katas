function errBob(str){

    const newStr = str.split(' ');
    return newStr.reduce((result,word)=>{
        const vaowel = word.match(/[a|e|o|i|u]/)

        if (word.toLowerCase().endsWith(',')){
            if (word[word.length-1].endsWith(vaowel)){
                result += `${word}`
                console.log(result);
            }else{
                result += `${word.slice(0,-1)}err, `
            }
        }else{
            result += `${word}err `
        }
        return result
    },'')
}

console.log(errBob("Hello, I am Mr Bob"),"Hello, I amerr Mrerr Boberr")
console.log(errBob("THIS, is crazy!"), "THISERR, iserr crazyerr!")
console.log(errBob("r r r r r r r r"), "rerr rerr rerr rerr rerr rerr rerr rerr")
console.log(errBob("hI, hi. hI hi skY! sky? skY sky"),"hI, hi. hI hi skYERR! skyerr? skYERR skyerr")
console.log(errBob("This, is. another! test? case to check your beautiful code."),"Thiserr, iserr. anothererr! testerr? case to checkerr yourerr beautifulerr code.")
