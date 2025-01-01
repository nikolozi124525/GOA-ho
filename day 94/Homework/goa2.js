function processArrayWithDelay(numbers, callback) {
    const results = [];
    numbers.forEach(function(number, index) {
        setTimeout(function() {
            results.push(number * number);
            if (results.length === numbers.length) {
                callback(results); 
            }
        }, index * 2000); 
    });
}

processArrayWithDelay([1, 2, 3, 4], function(resultArray) {
    console.log("Processed Array:", resultArray);
});
