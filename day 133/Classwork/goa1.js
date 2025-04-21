function solution(list) {
    let result = [];
    let i = 0;
  
    while (i < list.length) {
      let start = i;
  
      while (i + 1 < list.length && list[i + 1] === list[i] + 1) {
        i++;
      }
  
      if (i - start >= 2) {
      
        result.push(`${list[start]}-${list[i]}`);
      } else if (i - start === 1) {
      
        result.push(list[start], list[i]);
      } else {
        
        result.push(list[start]);
      }
  
      i++;
    }
  
    return result.join(',');
  }
  