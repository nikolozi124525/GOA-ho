function sumMix(arr) {
    return arr.reduce((sum, val) => sum + Number(val), 0);
  }
  
  console.log(sumMix([9, "2", "3", 4, 5]));  
  console.log(sumMix(["1", "2", "3"]));      
  console.log(sumMix([1, 2, 3, 4]));         
  