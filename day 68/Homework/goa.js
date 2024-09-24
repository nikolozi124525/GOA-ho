 function duplicateCount(text){
    const lowerText = text.toLowerCase();
    const duplicates = [];
    
    for(let i = 0; i < text.length; i++){
      let count = 0;
      
      for(let x = 0; x < text.length; x++){
        if(lowerText[i] === lowerText[x]) {
          count++;
        }
      }
      
      if(count > 1 && !duplicates.includes(lowerText[i])){
        duplicates.push(lowerText[i])
      }
    }
    
    return duplicates.length;
  }