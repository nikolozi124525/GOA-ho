function greetUser(name, callback) {
    setTimeout(() => {
      console.log(`გამარჯობა, ${name}!`);
      callback();
    }, 2000);
  }
  
 
  greetUser("ნიკოლოზი", () => {
    console.log("მისასალმებელი დასრულდა ");
  });
  