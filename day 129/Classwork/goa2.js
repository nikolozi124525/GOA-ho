function getPins(observed) {
    const adjacentDigits = {
      '1': ['1', '2', '4'],
      '2': ['1', '2', '3', '5'],
      '3': ['2', '3', '6'],
      '4': ['1', '4', '5', '7'],
      '5': ['2', '4', '5', '6', '8'],
      '6': ['3', '5', '6', '9'],
      '7': ['4', '7', '8'],
      '8': ['5', '7', '8', '9', '0'],
      '9': ['6', '8', '9'],
      '0': ['0', '8']
    };
  
    
    const possibleDigits = observed.split('').map(digit => adjacentDigits[digit]);
 
    const allCombinations = cartesianProduct(...possibleDigits);

    return allCombinations.map(combination => combination.join(''));
  }

  function cartesianProduct(...arrays) {
    return arrays.reduce((acc, curr) => {
      const result = [];
      acc.forEach(a => {
        curr.forEach(c => {
          result.push([...a, c]);
        });
      });
      return result;
    }, [[]]);
  }
  
  // Test cases
  console.log(getPins("1357"));
  