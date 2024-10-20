
class Animal {
    static speciesCount = 0; 

    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
        Animal.speciesCount++;
    }

    makeSound() {
        return `${this.name} says ${this.sound}`;
    }

    static getSpeciesCount() {
        return Animal.speciesCount;
    }
}


class Dog extends Animal {
    constructor(name) {
        super(name, "Woof!");
    }

    makeSound() {
        return `${super.makeSound()} (the dog)`;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name, "Meow!");
    }

    makeSound() {
        return `${super.makeSound()} (the cat)`;
    }
}

class Cow extends Animal {
    constructor(name) {
        super(name, "Moo!");
    }
}


function testAnimal() {
    const dog = new Dog("Buddy");
    const cat = new Cat("Whiskers");
    const cow = new Cow("Bessie");

    console.log(dog.makeSound());
    console.log(cat.makeSound());
    console.log(cow.makeSound());
    console.log(`Total species of animals: ${Animal.getSpeciesCount()}`);
}

testAnimal();

