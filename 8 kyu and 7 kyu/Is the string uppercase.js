// String.prototype.isUpperCase = function (str) {
//     return str === str.toUpperCase() ? true : false;
// }

String.prototype.isUpperCase = function () {
    return this.valueOf().toUpperCase() === this.valueOf();
};

// console.log(isUpperCase('Hello World'), false, 'Hello World is not upper case');
console.log('hello world'.isUpperCase(), false, 'hello world is not upper case');
// console.log('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
// console.log('hello World'.isUpperCase(), false, 'hello World is not upper case');