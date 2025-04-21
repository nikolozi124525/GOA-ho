function decodeMorse(morseCode) {
    return morseCode
      .trim()
      .split('   ') 
      .map(word =>
        word
          .split(' ') 
          .map(char => MORSE_CODE[char]) 
          .join('')
      )
      .join(' ');
  }
  