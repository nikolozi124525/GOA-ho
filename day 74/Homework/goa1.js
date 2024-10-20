
class Car {
    static carCount = 0; 

    constructor(make, model) {
        this.make = make;
        this.model = model;
        Car.carCount++;
    }

    startEngine() {
        return `The ${this.make} ${this.model}'s engine starts.`;
    }

    static getCarCount() {
        return Car.carCount;
    }
}

class Sedan extends Car {
    constructor(make, model) {
        super(make, model);
    }

    startEngine() {
        return `${super.startEngine()} (this is a sedan)`;
    }
}

class SUV extends Car {
    constructor(make, model) {
        super(make, model);
    }

    startEngine() {
        return `${super.startEngine()} (this is an SUV)`;
    }
}

class Truck extends Car {
    constructor(make, model) {
        super(make, model);
    }

    startEngine() {
        return `${super.startEngine()} (this is a truck)`;
    }
}


function testCar() {
    const sedan = new Sedan("Toyota", "Camry");
    const suv = new SUV("Ford", "Explorer");
    const truck = new Truck("Ram", "1500");

    console.log(sedan.startEngine());
    console.log(suv.startEngine());
    console.log(truck.startEngine());
    console.log(`Total cars created: ${Car.getCarCount()}`);
}

testCar();
