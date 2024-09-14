function removeDuplicateWords (s) {
    const words = s.split(" ");
    const result = [];
    
    for(let i = 0; i < words.length; i++){
      if(result.indexOf(words[i]) === -1){
        result.push(words[i]);
      }
    }
    
    return result.join(" ")
  }