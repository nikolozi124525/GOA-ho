function countLeftOccurrences(n, symbols) {
    let counts = [];
    let seen = {};
    for (let symbol of symbols) {
        counts.push(seen[symbol] || 0);
        seen[symbol] = (seen[symbol] || 0) + 1;
    }
    return counts;
}


let symbols = ['a', 'b', '#', '#', 'b', '#', '#', 'a', 'b'];
console.log(countLeftOccurrences(9, symbols)); 
