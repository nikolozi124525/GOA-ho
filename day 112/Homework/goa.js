class StringHelper {
  
    // სტრინგის შეტრიალება
    static reverseString(s) {
      return s.split('').reverse().join('');
    }
  
    // სტრინგების შედარება 
    static compareStrings(s1, s2) {
      let matchCount = 0;
      const length = Math.min(s1.length, s2.length);
      for (let i = 0; i < length; i++) {
        if (s1[i] === s2[i]) {
          matchCount++;
        }
      }
      return matchCount;
    }
  
    // სტრინგის შემოწმება 
    static validateString(s) {
      return /^[a-zA-Z0-9_]+$/.test(s);
    }
  }
  