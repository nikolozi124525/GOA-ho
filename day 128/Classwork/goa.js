function validatePassword(password) {
    const regex = /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d))([A-Za-z\d]{6,})$/;
    

    return regex.test(password);
  }
  
 
  console.log(validatePassword('Password123')); 
  console.log(validatePassword('abc123'));      
  console.log(validatePassword('password'));    
  console.log(validatePassword('Password!'));  
  console.log(validatePassword('12345'));      
  