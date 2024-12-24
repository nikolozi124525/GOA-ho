function გაერთიანება(sets) {
    return sets.reduce((acc, set) => {
        return new Set([...acc, ...set]);
    }, new Set());
}
