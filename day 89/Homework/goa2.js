function increaseScores(studentMap) {
    const updatedMap = new Map(studentMap);
    studentMap.forEach((score, name) => {
        updatedMap.set(name, score + 5); 
    });
    return updatedMap;
}


const scores = new Map([
    ['მარიამი', 85],
    ['გიორგი', 90],
    ['თამარი', 78]
]);

const updatedScores = increaseScores(scores);
console.log(updatedScores);  

