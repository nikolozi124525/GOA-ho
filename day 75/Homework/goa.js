// ბაზისური კლასი
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        throw new Error("Subclasses must implement this method");
    }
}

// წარმოდგენილი კლასი: Dog
class Dog extends Animal {
    speak() {
        return `${this.name} says Woof!`;
    }
}

// კიდევ ერთი წარმოდგენილი კლასი: Cat
class Cat extends Animal {
    speak() {
        return `${this.name} says Meow!`;
    }
}

// გამოყენება
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

console.log(dog.speak()); 
console.log(cat.speak()); 
