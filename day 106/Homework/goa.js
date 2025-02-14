
import { capitalizeFirstLetter, reverseString, isPalindrome } from './string.mjs';
import { add, subtract, multiply, divide, squareRoot } from './math.mjs';
import { getRandomInt, getRandomElement, getRandomBoolean } from './random.mjs';
import Product from './class.mjs';
import { sumArray, maxInArray, minInArray, shuffleArray } from './arr.mjs';


console.log(capitalizeFirstLetter('hello')); 
console.log(reverseString('hello')); 
console.log(isPalindrome('racecar')); 


console.log(add(5, 3));
console.log(subtract(5, 3)); 
console.log(multiply(5, 3)); 
console.log(divide(5, 0)); 
console.log(squareRoot(16)); 


console.log(getRandomInt(1, 10)); 
console.log(getRandomElement([1, 2, 3, 4])); 
console.log(getRandomBoolean()); 


const laptop = new Product(1, 'Laptop', 'High performance laptop', 999.99, 10);
console.log(laptop.getPrice()); 
laptop.updateQuantity(2);
console.log(laptop.quantity); 

console.log(sumArray([1, 2, 3])); 
console.log(maxInArray([1, 2, 3])); 
console.log(minInArray([1, 2, 3])); 
console.log(shuffleArray([1, 2, 3])); 
