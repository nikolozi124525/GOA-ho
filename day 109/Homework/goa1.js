function bonusTime(salary, bonus) {
    
    let total = bonus ? salary * 10 : salary;
  
    return "$" + total;
  }
  
  console.log(bonusTime(10000, true));  
  console.log(bonusTime(10000, false));
  