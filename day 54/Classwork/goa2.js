let x = 55
let y = 60

console.log(x > y && x < y )
console.log(x > y && x > y)
console.log(x < y && x < y)
console.log(x < y && x > y)

console.log(x > y || x < y )
console.log(x > y || x > y )
console.log(x < y || x < y )
console.log(x < y || x > y )

console.log(x === y && x < y)
console.log(x > y || x === y)