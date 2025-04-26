function formatDuration(seconds) {
    if (seconds === 0) return "now";
  
    const timeUnits = [
      { name: 'year', value: 365 * 24 * 60 * 60 },
      { name: 'day', value: 24 * 60 * 60 },
      { name: 'hour', value: 60 * 60 },
      { name: 'minute', value: 60 },
      { name: 'second', value: 1 }
    ];
  
    const result = [];

    for (let { name, value } of timeUnits) {
      const count = Math.floor(seconds / value);
      if (count > 0) {
        result.push(`${count} ${name}${count > 1 ? 's' : ''}`);
        seconds -= count * value; 
      }
    }
  
    if (result.length === 1) {
      return result[0]; 
    }
    const lastUnit = result.pop();
    return result.join(', ') + ' and ' + lastUnit; 
  }
  