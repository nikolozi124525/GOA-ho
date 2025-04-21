function squareArrayWithDelay(arr, callback) {
    setTimeout(() => {
      const result = arr.map(num => num * num);
      callback(result);
    }, 2000);
  }

  squareArrayWithDelay([1, 2, 3, 4], (squared) => {
    console.log("კვადრატში აყვანილი მასივი:", squared);
  });
  