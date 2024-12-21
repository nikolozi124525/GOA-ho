function გაერთიანება(sets) {

  const unionSet = new Set();
  sets.forEach(set => {
    set.forEach(item => unionSet.add(item));  
  });

  return unionSet;
}
const result = გაერთიანება([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]);
console.log(result); 

  