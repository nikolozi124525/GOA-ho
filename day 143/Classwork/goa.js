function calculator(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return "unknown value";
    }
  
    switch (operation) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return b !== 0 ? a / b : "unknown value";
      default:
        return "unknown value";
    }
  }
  