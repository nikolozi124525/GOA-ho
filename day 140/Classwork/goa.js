function permute(s) {
    let result = [];
    
    function generatePermutations(str, current) {
      if (str.length === 0) {
        result.push(current);
      } else {
        for (let i = 0; i < str.length; i++) {
          let newStr = str.substring(0, i) + str.substring(i + 1);
          generatePermutations(newStr, current + str[i]);
        }
      }
    }
    
    generatePermutations(s, "");
    return [...new Set(result)]; 
  }
  