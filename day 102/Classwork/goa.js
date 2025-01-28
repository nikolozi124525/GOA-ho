function checkTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("შევამოწმოთ დავალება");
    }, 1000); 
  });
}


function completeTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("დავალება შესრულდა");
    }, 1000); 
  });
}


function randomTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue > 0.5) {
        resolve(`დავალება შესრულდა წარმატებულად და მივიღე ${Math.round(randomValue * 10)} ქულა`);
      } else {
        reject("ჩავიჭერით");
      }
    }, 1000); 
  });
}