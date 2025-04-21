function invertMap(map) {
    const result = new Map();
    for (let [key, value] of map) {
      result.set(value, key);
    }
    return result;
  }
  