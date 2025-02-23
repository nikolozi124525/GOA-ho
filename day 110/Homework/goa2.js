let matrix = [];
for (let i = 0; i < 5; i++) {
    let row = prompt(`შეიყვანეთ ${i + 1}-ე სტრიქონი 6 სიმბოლო:`);
    matrix.push(row.split(''));
}

let temp = matrix[0][0];
matrix[0][0] = matrix[4][5];
matrix[4][5] = temp;


console.log("\nგადამუშავებული მასივი:");
matrix.forEach(row => console.log(row.join('')));
