function isSingleAsciiLetter(obj) {
    return typeof obj === 'string' &&
           obj.length === 1 &&
           ((obj >= 'A' && obj <= 'Z') || (obj >= 'a' && obj <= 'z'));
  }
  