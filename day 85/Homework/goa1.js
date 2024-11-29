
const prompt = require('prompt-sync')();
const ch = prompt("შეიყვანეთ სიმბოლო: ").toLowerCase(); 

if (['a', 'e', 'i', 'o', 'u'].includes(ch)) {
    console.log(`${ch} არის ხმოვანი.`);
} else if (ch >= 'a' && ch <= 'z') {
    console.log(`${ch} არის თანხმოვანი.`);
} else {
    console.log(`${ch} არ არის ანბანის სიმბოლო.`);
}
