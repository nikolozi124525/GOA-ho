function countSpecialNumbers(n, numbers) {
    let result = numbers.filter(x => x < 100 && ((x % 3 === 0 && x % 6 !== 0) || (x % 5 === 0 && x % 10 !== 0)));
    return [result.length, result];
}


let numbers = [30, 135, 15, 9, 5];
let [count, filteredNumbers] = countSpecialNumbers(5, numbers);
console.log(count);          
console.log(filteredNumbers); 
