function Car(name, createAt) {
  
  // კონსტრუქტორის გამოყენებით ობიექტში მოვახდინეთ კუთვნილებების შექმნა და ინიციალიზება
  this.name = name;
  this.createAt = createAt;
  
  // კონსტრუქტორის გამოყენებით ობიექტში დავამატეთ მეთოდი
  this.printInfo = function() {
    console.log(this.name, this.createAt)
  }
  
}

// კონსტრუქტორი არის ფუნქცია რომელიც ქმნის ობიექტს

// new შექმნის ახალ ცარიელ ობიექტს რომელსაც გადაცემს კონსტრუქტორს შემდეგ კი კონსტრუქტორი ამ ცარიელი ობიექტის ინიც ინიციალიზებას ანუ კუთვნილებების მინიჭებას აკეთებს

const car1 = new Car("BMW", 2014);
const car2 = new Car("Mercedes", 2010);


car2.printInfo()