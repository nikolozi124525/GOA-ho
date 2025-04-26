function listPosition(word) {
    const factorial = (n) => {
      let res = 1n;
      for (let i = 2n; i <= n; i++) res *= i;
      return res;
    };
  
    const permutationsCount = (freq) => {
      let total = 0n;
      let denom = 1n;
  
      for (let count of freq.values()) {
        total += BigInt(count);
      }
  
      let num = factorial(total);
  
      for (let count of freq.values()) {
        denom *= factorial(BigInt(count));
      }
  
      return num / denom;
    };
  
    const freq = new Map();
    for (let ch of word) {
      freq.set(ch, (freq.get(ch) || 0) + 1);
    }
  
    let rank = 1n;
  
    for (let i = 0; i < word.length; i++) {
      for (let ch of [...freq.keys()].sort()) {
        if (ch >= word[i]) break;
        if (freq.get(ch) > 0) {
          freq.set(ch, freq.get(ch) - 1);
          rank += permutationsCount(freq);
          freq.set(ch, freq.get(ch) + 1);
        }
      }
      freq.set(word[i], freq.get(word[i]) - 1);
    }
  
    return Number(rank);
  }
  