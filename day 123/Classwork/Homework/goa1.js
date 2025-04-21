function task1RandomDelay() {
    const delay = Math.floor(Math.random() * 5000) + 1000;
    return new Promise(resolve => {
      setTimeout(() => resolve("Task 1 complete"), delay);
    });
  }
  
  task1RandomDelay().then(console.log);
  