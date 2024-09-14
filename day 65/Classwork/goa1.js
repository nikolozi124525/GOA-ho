function manualGetElementById(id) {
    const elements = document.all;

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].id === id) {
            return elements[i];
        }
    }
}