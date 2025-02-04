function countFirstLetter(str) {
    if (str.length === 0) {
        return 0; 
    }

    let firstChar = str[0];  
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === firstChar) {
            count++;
        }
    }

    return count;
}

console.log(countFirstLetter("banana"));  
console.log(countFirstLetter("apple"));   
console.log(countFirstLetter(""));       
