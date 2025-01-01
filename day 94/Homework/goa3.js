function changeColorWithDelay(color, callback) {
    setTimeout(function() {
        let element = document.getElementById("text");
        element.style.color = color;
        callback(element); 
    }, 2000);
}

changeColorWithDelay("red", function(element) {
    console.log(`The color of the text is now ${element.style.color}`);
});
