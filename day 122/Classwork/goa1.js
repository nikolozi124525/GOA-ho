function uniqueInOrder(iterable) {
    const result = [];
    let previous;
  
    for (let item of iterable) {
      if (item !== previous) {
        result.push(item);
        previous = item;
      }
    }
  
    return result;
  }
  