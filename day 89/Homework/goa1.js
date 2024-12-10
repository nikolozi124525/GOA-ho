function removeDuplicates(arr) {
    return [...new Set(arr)];
}


const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);  // [1, 2, 3, 4, 5]
