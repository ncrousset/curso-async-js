function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const names = iterate(['tito', 'rudys', 'jonathan']);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);