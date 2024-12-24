function რუკა(map) {
    const invertedMap = new Map();
    for (const [key, value] of map.entries()) {
        invertedMap.set(value, key);
    }
    return invertedMap;
}
