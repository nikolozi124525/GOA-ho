let matrix = [];
for (let i = 0; i < 6; i++) {
    let row = prompt(`შეიყვანეთ ${i + 1}-ე სტრიქონი 5 ცალი bool (0/1):`).split(' ').map(Number);
    matrix.push(row);
}


let temp = matrix[1];
matrix[1] = matrix[4];
matrix[4] = temp;


console.log("\nგადამუშავებული მასივი:");
matrix.forEach(row => console.log(row.join(' ')));
