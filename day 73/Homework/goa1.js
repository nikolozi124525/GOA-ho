class Car {
    constructor(make, model) {
        this._make = make;
        this._model = model;
    }

    get make() {
        return this._make;
    }

    get model() {
        return this._model;
    }

    static carInfo() {
        return "Cars are essential for transport!";
    }
}

class Sedan extends Car {
    features() {
        return "Comfortable and spacious.";
    }
}

class SUV extends Car {
    features() {
        return "Great for off-road driving.";
    }
}

class Coupe extends Car {
    features() {
        return "Sporty and stylish.";
    }
}

class Truck extends Car {
    features() {
        return "Ideal for heavy loads.";
    }
}

class Convertible extends Car {
    features() {
        return "Enjoy the open air.";
    }
}


const sedan = new Sedan("Toyota", "Camry");
const suv = new SUV("Jeep", "Wrangler");
const coupe = new Coupe("Ford", "Mustang");
const truck = new Truck("Ram", "1500");
const convertible = new Convertible("Mazda", "MX-5");

console.log(`${sedan.make} ${sedan.model}: ${sedan.features()}`);
console.log(`${suv.make} ${suv.model}: ${suv.features()}`);
console.log(`${coupe.make} ${coupe.model}: ${coupe.features()}`);
console.log(`${truck.make} ${truck.model}: ${truck.features()}`);
console.log(`${convertible.make} ${convertible.model}: ${convertible.features()}`);
console.log(Car.carInfo());
