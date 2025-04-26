function mostFrequentCount(array) {
    if (array.length === 0) {
      return 0;
    }
  
    const frequencyMap = {};
   
    for (let num of array) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    let maxCount = 0;
    for (let count in frequencyMap) {
      maxCount = Math.max(maxCount, frequencyMap[count]);
    }
  
    return maxCount;
  }
  