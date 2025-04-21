// 1. 
let doubled = [1, 2, 3].map(num => num * 2);
console.log(doubled); 


let lengths = ['Luka', 'Anna'].map(name => name.length);
console.log(lengths); 

// 3. 
let people = [{name: 'Luka'}, {name: 'Nino'}];
let names = people.map(p => p.name);
console.log(names); 

// 4.
let numbered = ['a', 'b'].map((ch, i) => `${i + 1}) ${ch}`);
console.log(numbered); 

// 5.
let mixed = [1, 'hello', true];
let types = mixed.map(item => typeof item);
console.log(types); 
