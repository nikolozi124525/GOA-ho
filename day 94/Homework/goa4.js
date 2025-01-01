function askNameWithDelay(callback) {
    let name = prompt("Please enter your name:");
    setTimeout(function() {
        console.log(`Hello, ${name}!`);
        callback(); 
    }, 3000);
}

askNameWithDelay(function() {
    console.log("Thank you for your input!");
});
