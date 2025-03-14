class MathHelper {
    static PI = Math.PI;
    static E = Math.E;
    static DEFAULT_PRECISION = 3;
  
    static factorial(n) {
      if (n < 0) {
        throw new Error("Negative numbers are not allowed");
      }
      let result = 1;
      for (let i = 1; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  
    static endsWith5Or0(n) {
      return n % 10 === 0 || n % 10 === 5;
    }
  
    static roundToNearest5Or0(n) {
      return Math.round(n / 5) * 5;
    }
  
    static roundToDecimalPlaces(n, precision = MathHelper.DEFAULT_PRECISION) {
      return n.toFixed(precision);
    }
  }
  