function რუკა(map) {
    const invertedMap = new Map();
  
    map.forEach((value, key) => {
      invertedMap.set(value, key);
    });
  
    return invertedMap;
  }
  
const result = რუკა(new Map([['a', 1], ['b', 2], ['c', 1]]));
console.log(result); 
  