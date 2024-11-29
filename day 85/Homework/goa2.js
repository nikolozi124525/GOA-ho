
const numbers = [];
const prompt = require('prompt-sync')();

for (let i = 0; i < 4; i++) {
    const num = parseInt(prompt(`შეიყვანეთ ${i + 1}-ე რიცხვი: `), 10);
    numbers.push(num);
}

let maxProduct = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        const product = numbers[i] * numbers[j];
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
}

console.log(`მაქსიმალური ნამრავლია: ${maxProduct}`);
