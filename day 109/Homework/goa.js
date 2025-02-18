function number(arr) {
    return arr.map((item, index) => `${index + 1}: ${item}`);
  }
  
  console.log(number([]));  
  console.log(number(["a", "b", "c"])); 
  