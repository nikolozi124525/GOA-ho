function countLeftSymbols(n, symbols) {
    let symbolCount = {};
    let result = [];
  
    for (let i = 0; i < n; i++) {
      let char = symbols[i];
      result.push(symbolCount[char] || 0); 
      symbolCount[char] = (symbolCount[char] || 0) + 1;
    }
  
    return result;
  }
  
  const n = parseInt(prompt("შეიყვანეთ სიმბოლოთა რაოდენობა:"));
  const symbols = prompt("შეიყვანეთ სიმბოლოები:");
  console.log(countLeftSymbols(n, symbols));
  