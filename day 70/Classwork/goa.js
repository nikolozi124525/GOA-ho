let sum = 0;

const numbers=[6, 7, 8, 9,10]; 
numbers.forEach(myFunction);

function myFunction(item) {

sum =item;
}

console.log(sum)

const num1=['a','b','c'];

num1.forEach((element,index,num)=> console.log(element, index,num));