function task6() {
    const delay = Math.random() * 4000 + 1000; 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 1 complete");
      }, delay);
    });
  }
  
  task6().then(message => console.log(message));
  