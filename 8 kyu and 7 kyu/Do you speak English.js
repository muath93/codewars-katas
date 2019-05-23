function spEng(sentence) {
    return sentence.toLowerCase().includes('english');
}


console.log(spEng("english"), true);
console.log(spEng("egnlish"), false);