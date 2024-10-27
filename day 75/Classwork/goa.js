class Animal {
    constructor(species) {
        this.species = species;
    }

    makeSound() {
        return 
    }
}

class Mammal extends Animal {
    constructor(species, furColor) {
        super(species); 
        this.furColor = furColor;
    }

    makeSound() {
        return 
    }
}


class Dog extends Mammal {
    constructor(name, breed, furColor) {
        super("Dog", furColor);
        this.name = name;
        this.breed = breed;
    }

    makeSound() {
        return 
    }

    toString() {
        return `${this.name} არის ${this.breed} და აქვს ${this.furColor} ფერი.`;
    }
}


const dog = new Dog("Buddy", "Golden Retriever", "ოქროსფერი");
console.log(dog.toString());  
console.log(dog.makeSound());  