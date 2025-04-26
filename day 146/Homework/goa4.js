function countPositivesSumNegatives(input) {
    if (input == null || input.length === 0) return [];
    let count = 0;
    let sum = 0;
    input.forEach(num => {
      if (num > 0) count++;
      if (num < 0) sum += num;
    });
    return [count, sum];
  }
  