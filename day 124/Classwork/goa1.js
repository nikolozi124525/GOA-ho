function createRandomPromise(id) {
    return new Promise(resolve => {
      const rand = Math.random();
      if (rand > 0.5) {
        resolve(`Promise ${id} resolved immediately! 🎉`);
      } else {
        setTimeout(() => {
          resolve(`Promise ${id} resolved after 2 seconds ⏳`);
        }, 2000);
      }
    });
  }
  

  Promise.all([
    createRandomPromise(1),
    createRandomPromise(2),
    createRandomPromise(3)
  ]).then(results => {
    results.forEach(result => console.log(result));
  });
  