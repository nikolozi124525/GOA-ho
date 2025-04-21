function keysWithMaxValue(map) {
    let max = -Infinity;
    for (let value of map.values()) {
      if (value > max) max = value;
    }
  
    const result = [];
    for (let [key, value] of map) {
      if (value === max) result.push(key);
    }
  
    return result;
  }
  