function task9() {
    const delay = Math.random() * 4000 + 1000;
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
          resolve("Task 1 complete");
        } else {
          resolve("Task 1 was quick");
        }
      }, delay);
    });
  }
  
  task9().then(message => console.log(message));
  