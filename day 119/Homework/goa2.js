function increaseScores(studentMap) {
    const newMap = new Map();
    for (let [name, score] of studentMap) {
      newMap.set(name, score + 5);
    }
    return newMap;
  }
  