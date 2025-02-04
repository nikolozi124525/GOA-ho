function firstLetterCount(str) {
    if (str.length === 0) return 0; 

    const firstLetter = str[0]; 
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === firstLetter) {
            count++; 
        }
    }

    return count;
}
