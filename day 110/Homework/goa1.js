let matrix = [];
for (let i = 0; i < 7; i++) {
    let row = prompt(`შეიყვანეთ ${i + 1}-ე სტრიქონი 6 რიცხვი (space-ით განყოფილი):`).split(' ').map(Number);
    matrix.push(row);
}


for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 6; j++) {
        if (j % 2 === 0) {  
            matrix[i][j] = Math.floor(matrix[i][j] / 2);
        } else {  
            matrix[i][j] = matrix[i][j] % 13;
        }
    }
}

console.log("\nგადამუშავებული მასივი:");
matrix.forEach(row => console.log(row.join(' ')));
