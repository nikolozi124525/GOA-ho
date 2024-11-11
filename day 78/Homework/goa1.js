function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let i = 0; i < cols; i++) {
        const row = [];
        for (let j = 0; j < rows; j++) {
            row.push(matrix[j][i]);
        }
        result.push(row);
    }
    return result;
}

// მაგალითი:
const matrix = [
    [1, 3],
    [1, 4]
];

const transposed = transposeMatrix(matrix);
console.log(transposed);
