
let bestStudents = {
    "გუშინ": "ნინო",
    "პროგრამირება": "გიორგი",
    "მათემატიკა": "ანა",
    "ფიზიკა": "ლუკა",
    "ქართული": "თამაზ"
};


console.log("მაპის ზომა:", Object.keys(bestStudents).length);


for (let group in bestStudents) {
    console.log(`${group} ჯგუფის საუკეთესო მოსწავლე: ${bestStudents[group]}`);
}

