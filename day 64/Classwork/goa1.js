function solve(s){
    let uCount = 0;
    let lCount = 0;
    
    for(let i = 0; i < s.length; i++){
      if(s[i] === s[i].toUpperCase()){
        uCount++;
      } else {
        lCount++;
      }
    }
    
    if(lCount >= uCount) {
      return s.toLowerCase();
    } else {
      return s.toUpperCase();
    }
  }