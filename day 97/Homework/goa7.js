function task8() {
    const delay = Math.random() * 3000 + 1000; 
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Task 3 failed");
      }, delay);
    });
  }
  
  task8().catch(error => console.log(error));
  