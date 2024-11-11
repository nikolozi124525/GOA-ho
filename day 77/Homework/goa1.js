function multiplicationTable() {
    const table = [];
    for (let i = 1; i <= 10; i++) {
        const row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}

// მაგალითი:
const table = multiplicationTable();
table.forEach(row => console.log(row));

