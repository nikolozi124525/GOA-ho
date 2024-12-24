function გასაღებები(map) {
    const maxValue = Math.max(...[...map.values()]);
    const result = [];
    for (const [key, value] of map.entries()) {
        if (value === maxValue) {
            result.push(key);
        }
    }
    return result;
}
