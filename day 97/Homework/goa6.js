function task7() {
    const firstDelay = Math.random() * 2000 + 1000; 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("First");
      }, firstDelay);
    })
    .then(message => {
      console.log(message);
      const secondDelay = Math.random() * 2000 + 1000;
      return new Promise(resolve => setTimeout(() => resolve("Second"), secondDelay));
    })
    .then(secondMessage => console.log(secondMessage));
  }
  
  task7();
  