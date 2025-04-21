const task2 = new Promise((_, reject) => {
    reject("Task 2 failed");
  });
  
  task2.catch(console.error);
  