function symmetricDifference(setA, setB) {
    const result = new Set();
  
    for (let val of setA) {
      if (!setB.has(val)) result.add(val);
    }
  
    for (let val of setB) {
      if (!setA.has(val)) result.add(val);
    }
  
    return result;
  }
  