function isNarcissistic(n) {
    const str = n.toString();
    const power = str.length;
    let sum = 0;
  
    for (let char of str) {
      sum += Math.pow(Number(char), power);
    }
  
    return sum === n;
  }
  