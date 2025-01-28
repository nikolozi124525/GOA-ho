function task4() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("First");
      }, 2000);
    });
  }
  
  task4()
    .then(message => {
      console.log(message);
      return new Promise(resolve => setTimeout(() => resolve("Second"), 1000));
    })
    .then(secondMessage => console.log(secondMessage));
  