class Animals {
    constructor(animal1, animal2, animal3, animal4, animal5) {
        this.animals = {
            [animal1[0]]: animal1[1],
            [animal2[0]]: animal2[1],
            [animal3[0]]: animal3[1],
            [animal4[0]]: animal4[1],
            [animal5[0]]: animal5[1]
        };
    }

    makeSound() {
        for (let animal in this.animals) {
            console.log(`${animal} makes sound: ${this.animals[animal]}`);
        }
    }
}

const animalsList = new Animals(
    ["Dog", "Woof"],
    ["Cat", "Meow"],
    ["Cow", "Moo"],
    ["Duck", "Quack"],
    ["Lion", "Roar"]
);

animalsList.makeSound();
