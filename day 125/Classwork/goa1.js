function similarity(a, b) {
    const setA = new Set(a);
    const setB = new Set(b);
  
    let intersectionCount = 0;
    for (let val of setA) {
      if (setB.has(val)) {
        intersectionCount++;
      }
    }
  
    const unionSet = new Set([...a, ...b]);
  
    return intersectionCount / unionSet.size;
  }
  