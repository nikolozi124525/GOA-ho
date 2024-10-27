function findCommonElements(array1, array2) {
    return array1.filter(element => array2.includes(element));
  }
  
  // მაგალითი გამოყენება:
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [4, 5, 6, 7, 8];
  const commonElements = findCommonElements(array1, array2);
  
  console.log(commonElements); 
  