function createStudentMap(students) {
    const studentMap = new Map();
    students.forEach(student => {
        studentMap.set(student.name, student.score);
    });
    return studentMap;
}

const students = [
    { name: 'მარიამი', score: 85 },
    { name: 'გიორგი', score: 90 },
    { name: 'თამარი', score: 78 }
];

const studentMap = createStudentMap(students);
console.log(studentMap);  
