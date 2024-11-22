function analyzeNumbers(n, numbers) {
  let count = 0;
  let filteredNumbers = [];
  
  for (let num of numbers) {
    if ((num < 100 && num % 3 === 0 && num % 6 !== 0) ||
        (num % 5 === 0 && num % 10 !== 0)) {
      count++;
      filteredNumbers.push(num);
    }
  }

  return { count, filteredNumbers };
}


let n = parseInt(prompt("შეიყვანეთ რიცხვების რაოდენობა:"));
let numbers = [];
for (let i = 0; i < n; i++) {
  numbers.push(parseInt(prompt("შეიყვანეთ რიცხვი:")));
}
let result = analyzeNumbers(n, numbers);
console.log(`რიცხვების რაოდენობა: ${result.count}`);
console.log(`რიცხვები: ${result.filteredNumbers}`);

 
  