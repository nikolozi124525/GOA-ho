function generateRota(seatingPlan) {
    let rota = [];

    for (let i = 0; i < seatingPlan.length; i++) {
        let row = seatingPlan[i];
        
        if (i % 2 === 0) {
           
            for (let j = 0; j < row.length; j++) {
                rota.push(row[j]);
            }
        } else {
            
            for (let j = row.length - 1; j >= 0; j--) {
                rota.push(row[j]);
            }
        }
    }

    return rota;
}

const seatingPlan = [
    ["Stefan", "Raj", "Marie"],
    ["Alexa", "Amy", "Edward"],
    ["Liz", "Claire", "Juan"],
    ["Dee", "Luke", "Katie"]
];

const rota = generateRota(seatingPlan);
console.log(rota);

