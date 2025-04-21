function digitDegree(n) {
    let count = 0;
  
    while (n >= 10) {
      n = n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
      count++;
    }
  
    return count;
  }
  