function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(10,15, sum));

setTimeout(function() {
    console.log("Hola JS");
}, 2000)

function gretting(name) {
    console.log(`Hola ${name}`);
} 

setTimeout(gretting, 2000, 'Jose');