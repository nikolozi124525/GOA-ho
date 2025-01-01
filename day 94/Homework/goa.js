function greetWithDelay(name, callback) {
    setTimeout(function() {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000);
}

greetWithDelay("John", function() {
    console.log("Callback function executed!");
});
