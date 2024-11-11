function addMatrices(matrix1, matrix2) {
    const rows = matrix1.length;
    const cols = matrix1[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
}

// მაგალითი:
const matrix1 = [
    [1, 3],
    [1, 4]
];
const matrix2 = [
    [4, 1],
    [2, 2]
];

const sumMatrix = addMatrices(matrix1, matrix2);
console.log(sumMatrix);
