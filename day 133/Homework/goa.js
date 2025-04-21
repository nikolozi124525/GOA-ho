// 1. 
[1, 2, 3].forEach(num => console.log(num));

// 2. 
['a', 'b', 'c'].forEach((char, index) => console.log(index, char));

// 3. 
let sum = 0;
[1, 2, 3, 4].forEach(num => sum += num);
console.log("Sum:", sum);

// 4. 
const users = [{name: 'Luka'}, {name: 'Nino'}];
users.forEach(user => console.log(user.name));

// 5. 
let newArr = [];
[1, 2, 3].forEach(n => newArr.push(n));
console.log(newArr);
