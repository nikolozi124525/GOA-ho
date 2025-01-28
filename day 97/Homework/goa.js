const task1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 complete");
    }, 2000);
  });
  
  task1.then(message => console.log(message));
  