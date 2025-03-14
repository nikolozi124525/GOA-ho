function manualLstrip(str) {
    while (str.charAt(0) === ' ') {
      str = str.slice(1);
    }
    return str;
  } 
