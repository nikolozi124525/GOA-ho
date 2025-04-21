function task3Reject() {
    return new Promise((_, reject) => {
      setTimeout(() => reject("Task 3 failed"), 2000);
    });
  }
  
  task3Reject().catch(err => console.error("Error:", err));
  