
let n = parseInt(prompt("შეიტანეთ n:"));  
let arr = prompt("შეიტანეთ მასივი:").split(' ').map(Number); 

arr.sort((a, b) => b - a);  

console.log(arr.join(' '));
