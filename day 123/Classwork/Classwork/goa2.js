const numberPromise = Promise.resolve(5);

numberPromise
  .then(num => num * 2)
  .then(doubled => console.log("Doubled:", doubled));
