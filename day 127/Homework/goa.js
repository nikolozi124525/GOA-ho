function smallestMissingNumber(matrix) {
    const numbers = matrix.flat();

    const numberSet = new Set(numbers);

    let i = 0;
    while (numberSet.has(i)) {
        i++;
    }

    return i;
}
