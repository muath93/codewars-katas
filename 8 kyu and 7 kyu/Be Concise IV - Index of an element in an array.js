function find(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) return i;
    }
    return "Not found";
}

function find(array, element) {
    const x = array.indexOf(element);
    return x === -1 ? 'Not found' : x;
}

function find(array, element) {
    //  return array.findIndex((elm,i,arr)=>{
    //      console.log(elm)
    //      console.log(i)
    //      console.log(element)
    //    return elm === element ? i: 'Not found' ;
    // });


    // const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

    return array.findIndex(elm => {
        return elm === element;
        // else return"Not Found";

        console.log(index); // 3
        console.log(array[index]); // blueberries
    })
}


function find(array, element) {
    return array.findIndex(elm => {
        if (elm === element) {
            return true
        } else {
            return 'Not found'
        }
    })
}

const find = (arr, elm) => {
    const x = arr.indexOf(elm);
    return x < 0 ? 'Not found' : x;
}

var array = [2, 3, 5, 7, 11];
console.log(find(array, 5), 2);
// console.log(find(array, 11), 4);
// console.log(find(array, 3), 1);
// // console.log(find(array, 2), 0);
// console.log(find(array, 7), 3);
console.log(find(array, 1), "Not found");
// console.log(find(array, 8), "Not found");
// array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
// console.log(find(array, "Hello World"), 1);
// console.log(find(array, "lorem ipsum"), "Not found");
// console.log(find(array, "Lorem Ipsum"), 3);
// console.log(find(array, false), 2);
// console.log(find(array, true), 0);