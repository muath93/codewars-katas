function DNAtoRNA(dna) {
    return [...dna].includes('T') ? dna.replace(/T/gi, 'U') : dna;
}

// function DNAtoRNA(dna) {
// return dna.replace(/T/g, 'U')
// }

// function DNAtoRNA(dna) {
//     let rna='';
//     if(dna.split('').includes('T')){
//        return rna+= dna.replace(/T/gi,'U');
//     }
//     else{
//         return dna;
//     }
// }


console.log(DNAtoRNA("TTTT"), "UUUU")
console.log(DNAtoRNA("GCAT"), "GCAU")
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")