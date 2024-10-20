class Animal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    static animalCount() {
        return "Animals are amazing!";
    }
}

class Dog extends Animal {
    bark() {
        return "Woof!";
    }
}

class Cat extends Animal {
    meow() {
        return "Meow!";
    }
}

class Bird extends Animal {
    chirp() {
        return "Chirp!";
    }
}

class Fish extends Animal {
    swim() {
        return "Swish!";
    }
}

class Lion extends Animal {
    roar() {
        return "Roar!";
    }
}


const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
const bird = new Bird("Tweetie");
const fish = new Fish("Nemo");
const lion = new Lion("Simba");

console.log(`${dog.name}: ${dog.bark()}`);
console.log(`${cat.name}: ${cat.meow()}`);
console.log(`${bird.name}: ${bird.chirp()}`);
console.log(`${fish.name}: ${fish.swim()}`);
console.log(`${lion.name}: ${lion.roar()}`);
console.log(Animal.animalCount());
