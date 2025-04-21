function simulateProcess(message, callback) {
    setTimeout(() => {
      console.log(message);
      callback("პროცესი დასრულდა ");
    }, 2000);
  }
  
  
  simulateProcess("მიმდინარეობს დამუშავება...", (status) => {
    console.log(status);
  });
  