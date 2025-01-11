const task3 = new Promise((resolve) => {
    resolve(5);
  });
  
  task3
    .then(num => num * 2)
    .then(doubled => console.log(doubled));
  