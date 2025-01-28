function task10() {
    const delay = Math.random() * 3000 + 1000;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue < 0.3) {
          reject("Task 3 failed");
        } else {
          resolve("Task 3 complete");
        }
      }, delay);
    });
  }
  
  task10()
    .then(message => console.log(message))
    .catch(error => console.log(error));
  