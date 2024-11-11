function divideStudents(students, numGroups) {
    const totalStudents = students.length;
    const avgGroupSize = Math.floor(totalStudents / numGroups);
    const remainder = totalStudents % numGroups;

    const groups = [];
    let startIndex = 0;

    for (let i = 0; i < numGroups; i++) {
        
        const groupSize = avgGroupSize + (i < remainder ? 1 : 0);
        const group = students.slice(startIndex, startIndex + groupSize);
        groups.push(group);
        startIndex += groupSize;
    }

    return groups;
}

const students = ["Ana", "Beka", "Davit", "Elene", "Giorgi", "Irakli", "Lika", "Mari", "Nino"];
const numGroups = 3;
const result = divideStudents(students, numGroups);


result.forEach((group, index) => {
    console.log(`Group ${index + 1}:`, group);
});
