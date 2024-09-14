function gimme (triplet) {
    const minNumber = Math.min(...triplet);
    const maxNumber = Math.max(...triplet);
    
    for(let i = 0; i < 3; i++){
      if(triplet[i] != minNumber && triplet[i] != maxNumber){
        return i
      }
    }
  }