

let matrix = [];
for (let i = 0; i < 7; i++) {
    let row = prompt(`შეიყვანეთ ${i + 1}-ე სტრიქონი 6 რიცხვი (space-ით განყოფილი):`).split(' ').map(Number);
    matrix.push(row);
}

console.log("\nსტრიქონების საშუალო არითმეტიკები:");
for (let i = 0; i < 7; i++) {
    let rowSum = matrix[i].reduce((a, b) => a + b, 0);
    let rowAvg = rowSum / matrix[i].length;
    console.log(`სტრიქონი ${i + 1}: ${rowAvg.toFixed(2)}`);
}

console.log("\nსვეტების საშუალო არითმეტიკები:");
for (let j = 0; j < 6; j++) {
    let columnSum = 0;
    for (let i = 0; i < 7; i++) {
        columnSum += matrix[i][j];
    }
    let columnAvg = columnSum / 7;
    console.log(`სვეტი ${j + 1}: ${columnAvg.toFixed(2)}`);
}


