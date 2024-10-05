1//
let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(function(a) {
    return a * a;
});

console.log(squaredNumbers);  



2//
let fruits = ['apple', 'banana', 'cherry'];


let uppercaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});

console.log(uppercaseFruits);  
3//

let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];


let summedNumbers = numbers1.map(function(num, index) {
    return num + numbers2[index];
});

console.log(summedNumbers);  



let squaredNumbersClone = numbers.map(function(a) {
    return a * a;
});


console.log(squaredNumbersClone);  
console.log(squaredNumbersClone);  

