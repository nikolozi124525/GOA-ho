
const A = 1; // true
const B = 0; // false
const C = 0; // false

const expression1 = (A && !B) || (B && !A);
console.log("1) (A && !B) || (B && !A):", expression1);


const expression2 = (B && C) && (A || B);
console.log("2) (B && C) && (A || B):", expression2); 


const expression3 = (A && !C) || (B && !A) || (B && !C);
console.log("3) (A && !C) || (B && !A) || (B && !C):", expression3); 
