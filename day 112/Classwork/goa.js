function manualRstrip(str) {
    while (str.charAt(str.length - 1) === ' ') {
      str = str.slice(0, -1);
    }
    return str;
  }
  