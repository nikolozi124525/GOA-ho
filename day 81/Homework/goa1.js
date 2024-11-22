function countOddDigits(number) {
    let count = 0;
    for (let digit of String(number)) {
        if (Number(digit) % 2 === 1) {
            count++;
        }
    }
    return count;
}


console.log(countOddDigits(12544)); 
console.log(countOddDigits(311));   
