
let n = parseInt(prompt("შეიტანეთ n:"));  
let arr = prompt("შეიტანეთ მასივი:").split(' ').map(Number); 

let frequency = {};

arr.forEach(num => {
  frequency[num] = (frequency[num] || 0) + 1;
});

arr.forEach(num => {
  console.log(frequency[num]);
});
