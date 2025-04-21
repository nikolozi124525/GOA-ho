
function toRoman(n) {
    
    const romanMapping = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

   
    for (const { value, symbol } of romanMapping) {
    
        while (n >= value) {
            result += symbol; 
            n -= value;        
        }
    }

    return result;
}


function fromRoman(roman) {
    const romanToInt = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000,
        'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90,
        'CD': 400, 'CM': 900
    };

    let total = 0;
    let i = 0;

    while (i < roman.length) {
       
        if (i + 1 < roman.length && romanToInt[roman.substring(i, i + 2)]) {
            total += romanToInt[roman.substring(i, i + 2)];
            i += 2; 
        } else {
       
            total += romanToInt[roman[i]];
            i++;
        }
    }

    return total;
}

console.log(toRoman(2000));  
console.log(toRoman(1666));  
console.log(toRoman(86));    
console.log(toRoman(1));     

console.log(fromRoman("MM"));        
console.log(fromRoman("MDCLXVI"));   
console.log(fromRoman("LXXXVI"));    
console.log(fromRoman("I"));        
