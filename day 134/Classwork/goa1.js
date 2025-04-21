const words = ['level', 'hello', 'radar', 'world', 'madam', 'car'];
const palindromes = words.filter(word => word === word.split('').reverse().join(''));
console.log(palindromes);
