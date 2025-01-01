function showMessageWithDelay(message, callback) {
    setTimeout(function() {
        console.log(message);
        callback();
    }, 2000);
}

showMessageWithDelay("Processing your request...", function() {
    console.log("Process completed!");
});
