function uniqueInOrder(iterable) {
    return iterable.split('').filter((v, i, arr) => v !== arr[i - 1]);
  }
  