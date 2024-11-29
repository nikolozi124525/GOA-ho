
const numbers = [5, 15, 25, 35, 45]; 
const N = numbers.length;

console.log(numbers);

[numbers[0], numbers[N - 1]] = [numbers[N - 1], numbers[0]];

console.log(numbers);


