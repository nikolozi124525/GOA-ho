function countOddDigits(num) {
  let count = 0;
  let digits = Math.abs(num).toString(); 
  for (let digit of digits) {
    if (parseInt(digit) % 2 !== 0) {
      count++;
    }
  }
  return count;
}

// გამოყენება
const input = parseInt(prompt("შეიყვანეთ მთელი რიცხვი:"));
console.log(`კენტი ციფრების რაოდენობა: ${countOddDigits(input)}`);
