class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        console.log(`Car details: ${this.year} ${this.brand} ${this.model}`);
    }

    startCar() {
        console.log(`The ${this.brand} ${this.model} is starting... Vroom Vroom!`);
    }
}

const myCar = new Car('Toyota', 'Corolla', 2020);

myCar.displayDetails();
myCar.startCar();
