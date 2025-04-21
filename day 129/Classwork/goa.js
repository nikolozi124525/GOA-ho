function orderWeight(strng) {

    function weight(n) {
        return n.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    let numbers = strng.split(' ');

    numbers.sort((a, b) => {
        const weightA = weight(a);
        const weightB = weight(b);
        
        if (weightA !== weightB) {
            return weightA - weightB; 
        } else {
            return a.localeCompare(b); 
        }
    });

    return numbers.join(' ');
}


let inputString = "56 65 74 100 99 68 86 180 90";
console.log(orderWeight(inputString));  
