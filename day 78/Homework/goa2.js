function sumDiagonals(matrix) {
    const n = matrix.length;
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < n; i++) {
        mainDiagonalSum += matrix[i][i]; 
        secondaryDiagonalSum += matrix[i][n - 1 - i]; 
    }

    return [mainDiagonalSum, secondaryDiagonalSum];
}

// მაგალითი:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const diagonalsSum = sumDiagonals(matrix);
console.log(diagonalsSum); 
