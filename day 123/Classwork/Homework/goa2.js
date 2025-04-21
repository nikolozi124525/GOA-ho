function firstThenSecondRandom() {
    const delay1 = Math.floor(Math.random() * 3000) + 1000;
    const delay2 = Math.floor(Math.random() * 3000) + 1000;
  
    return new Promise(resolve => {
      setTimeout(() => resolve("First"), delay1);
    }).then(msg => {
      console.log(msg);
      return new Promise(res => {
        setTimeout(() => {
          console.log("Second");
          res();
        }, delay2);
      });
    });
  }
  
  firstThenSecondRandom();
  