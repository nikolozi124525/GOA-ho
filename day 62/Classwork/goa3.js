function manualreverse(arr){
   const reverseydArr=[];

  for  (let i = arr. length - 1; i>= 0; i--){
    reverseydArr.push(arr[i]);
  }

return reverseydArr;
}

console.log(manualreverse([1,2,3,4,5,6,7,8]))
