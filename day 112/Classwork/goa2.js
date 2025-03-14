function manualStrip(str) {
    let start = 0;
    let end = str.length - 1;
  
    
    while (start <= end && str[start] === ' ') {
      start++;
    }
  
  
    while (end >= start && str[end] === ' ') {
      end--;
    }
  
    
    return str.slice(start, end + 1);
  }
  

  const text = "   ეს არის მაგალითი   ";
  const cleanedText = manualStrip(text);
  console.log(`'${cleanedText}'`);
  