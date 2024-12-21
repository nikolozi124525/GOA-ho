function სიხშირე(str) {
    const frequencyMap = new Map();
    
    for (let char of str) {
      if (frequencyMap.has(char)) {
        frequencyMap.set(char, frequencyMap.get(char) + 1);
      } else {
        frequencyMap.set(char, 1);
      }
    }
  
    return frequencyMap;
  }
  const result = სიხშირე("hello");
  console.log(result); 
  