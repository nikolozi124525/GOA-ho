let n = parseInt(prompt("შეიყვანეთ მასივის სტრიქონების რაოდენობა (n):"));
let m = parseInt(prompt("შეიყვანეთ მასივის სვეტების რაოდენობა (m):"));

let matrix = [];
for (let i = 0; i < n; i++) {
    let row = prompt(`შეიყვანეთ ${i + 1}-ე სტრიქონი ${m} რიცხვი:`).split(' ').map(Number);
    matrix.push(row);
}

let max_value = matrix[0][0];
let max_row = 0, max_col = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (matrix[i][j] > max_value) {
            max_value = matrix[i][j];
            max_row = i;
            max_col = j;
        }
    }
}

console.log(`ყველაზე დიდი ელემენტი: ${max_value} (სტრიქონი: ${max_row + 1}, სვეტი: ${max_col + 1})`);
