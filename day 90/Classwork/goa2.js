
class StudentSystem {
    constructor() {
        this.students = new Map(); 
    }

   
    addOrUpdateStudent(name, subjects) {
        
        this.students.set(name, subjects);
    }


    calculateAverage(name) {
        const subjects = this.students.get(name);
        if (!subjects) {
            console.log(`${name} არ არსებობს სისტემაში.`);
            return;
        }

        const total = Object.values(subjects).reduce((sum, score) => sum + score, 0);
        const average = total / Object.keys(subjects).length;
        return average;
    }

    getRanking() {
        const ranking = [...this.students.entries()]
            .map(([name, subjects]) => ({
                name,
                average: this.calculateAverage(name)
            }))
            .sort((a, b) => b.average - a.average);

        return ranking;
    }
    printStudents() {
        this.students.forEach((subjects, name) => {
            console.log(`${name}:`, subjects);
        });
    }
}


const system = new StudentSystem();


system.addOrUpdateStudent('ლევანი', { 'მათემატიკა': 85, 'ფიზიკა': 90, 'ქიმია': 92 });
system.addOrUpdateStudent('ანა', { 'მათემატიკა': 78, 'ფიზიკა': 88, 'ქიმია': 91 });
system.addOrUpdateStudent('გიო', { 'მათემატიკა': 93, 'ფიზიკა': 94, 'ქიმია': 89 });


console.log(`ლევანის საშუალო ქულა: ${system.calculateAverage('ლევანი')}`);


const ranking = system.getRanking();
console.log('რეიტინგი:', ranking);


system.printStudents();
