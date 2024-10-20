class Human {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    static speciesInfo() {
        return "Humans are intelligent beings!";
    }
}

class Student extends Human {
    study() {
        return `${this.name} is studying.`;
    }
}

class Teacher extends Human {
    teach() {
        return `${this.name} is teaching.`;
    }
}

class Engineer extends Human {
    design() {
        return `${this.name} is designing.`;
    }
}

class Doctor extends Human {
    treat() {
        return `${this.name} is treating patients.`;
    }
}

class Artist extends Human {
    create() {
        return `${this.name} is creating art.`;
    }
}

// Testing Human classes
const student = new Student("Alice", 20);
const teacher = new Teacher("Mr. Smith", 45);
const engineer = new Engineer("Bob", 30);
const doctor = new Doctor("Dr. Jane", 50);
const artist = new Artist("Charlie", 35);

console.log(`${student.name}, Age: ${student.age} - ${student.study()}`);
console.log(`${teacher.name}, Age: ${teacher.age} - ${teacher.teach()}`);
console.log(`${engineer.name}, Age: ${engineer.age} - ${engineer.design()}`);
console.log(`${doctor.name}, Age: ${doctor.age} - ${doctor.treat()}`);
console.log(`${artist.name}, Age: ${artist.age} - ${artist.create()}`);
console.log(Human.speciesInfo());
