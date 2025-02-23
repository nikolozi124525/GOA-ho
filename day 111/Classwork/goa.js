function shiftString(input) {
    let result = Array(26).fill(' ');  
    
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let shiftPosition = char.charCodeAt(0) - 'A'.charCodeAt(0); 
        result[shiftPosition] = char;  
    }

    return result.join('');  
}

console.log(shiftString("AZ"));                  
console.log(shiftString("ABC")); 
console.log(shiftString("ACE"));
console.log(shiftString("CBA")); 
console.log(shiftString("HELLOWORLD"));
