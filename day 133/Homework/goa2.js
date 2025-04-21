// 1. 
let total = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
console.log("Total:", total);

// 2. 
let words = ['apple', 'banana', 'pear'];
let longest = words.reduce((a, b) => a.length > b.length ? a : b);
console.log("Longest word:", longest);

// 3. 
let sentence = ['hello', 'world'].reduce((acc, word) => acc + ' ' + word);
console.log(sentence);

// 4. 
let groupByLength = ['a', 'bb', 'ccc'].reduce((acc, val) => {
  let len = val.length;
  if (!acc[len]) acc[len] = [];
  acc[len].push(val);
  return acc;
}, {});
console.log(groupByLength);

// 5. 
let dupes = [1, 2, 2, 3];
let unique = dupes.reduce((acc, num) => acc.includes(num) ? acc : [...acc, num], []);
console.log(unique); 
