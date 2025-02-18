function findMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }
  
  console.log(findMinMax([1, 2, 3, 4, 5])); 
  console.log(findMinMax([2334454, 5]));    
  console.log(findMinMax([1]));             
  