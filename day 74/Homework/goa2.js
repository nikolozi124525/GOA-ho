
class Human {
    static population = 0; 

    constructor(name, age) {
        this.name = name;
        this.age = age;
        Human.population++;
    }

    greet() {
        return `Hello, my name is ${this.name}.`;
    }

    static getPopulation() {
        return Human.population;
    }
}


class Student extends Human {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    study() {
        return `${this.name} is studying.`;
    }

    greet() {
        return `${super.greet()} I am a student with ID ${this.studentId}.`;
    }
}

class Teacher extends Human {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    teach() {
        return `${this.name} is teaching ${this.subject}.`;
    }

    greet() {
        return `${super.greet()} I teach ${this.subject}.`;
    }
}

class Doctor extends Human {
    constructor(name, age, specialty) {
        super(name, age);
        this.specialty = specialty;
    }

    treatPatient() {
        return `Dr. ${this.name} is treating a patient.`;
    }

    greet() {
        return `${super.greet()} I am a doctor specializing in ${this.specialty}.`;
    }
}
function testHuman() {
    const student = new Student("Alice", 20, "S123");
    const teacher = new Teacher("Mr. Smith", 35, "Math");
    const doctor = new Doctor("Dr. John", 45, "Cardiology");

    console.log(student.greet());
    console.log(teacher.teach());
    console.log(doctor.treatPatient());
    console.log(`Total human population: ${Human.getPopulation()}`);
}

testHuman();

