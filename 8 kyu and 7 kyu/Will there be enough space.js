function enough(cap, on, wait) {
    const people = on + wait;
    if (people <= cap) {
        return 0;
    } else {
        return (people % cap)
    }
}



console.log((enough(10, 5, 5), 0));
console.log((enough(10, 5, 5)));
console.log((enough(100, 60, 50), 10));
console.log((enough(100, 60, 50)));
console.log((enough(100, 80, 50)));