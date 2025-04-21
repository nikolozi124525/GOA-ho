function matrixMultiply(A, B) {
    return [
        [A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]],
        [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]],
    ];
}

function matrixPow(M, power) {
    let result = [[1, 0], [0, 1]]; 
    let base = M;

    while (power > 0) {
        if (power % 2 === 1) {
            result = matrixMultiply(result, base);
        }
        base = matrixMultiply(base, base);
        power = Math.floor(power / 2);
    }

    return result;
}

function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    const F = [[1, 1], [1, 0]]; 
    const resultMatrix = matrixPow(F, Math.abs(n) - 1);

    if (n > 0) {
        return resultMatrix[0][0]; 
    } else {
    
        return (n % 2 === 0 ? -1 : 1) * resultMatrix[0][0];
    }
}

console.log(fib(0));      
console.log(fib(1));        
console.log(fib(10));    
console.log(fib(1000));       
console.log(fib(2000000));   
console.log(fib(-10));        
console.log(fib(-1000));      
