//1
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
//2
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
//3
const ages = [30, 33, 16, 19];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}