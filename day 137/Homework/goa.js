//"მომცემის (Producer) და მნახველის (Consumer) მოდელის ახსნა და რას წარმოადგენს 
// აღნიშნული კონცეფცია პროგრამირებაში?"
let queue = [];
let MAX_SIZE = 5;

function producer() {
    if (queue.length < MAX_SIZE) {
        queue.push('item');
        console.log('Produced item:', queue.length);
    }
}

function consumer() {
    if (queue.length > 0) {
        queue.pop();
        console.log('Consumed item');
    }
}

setInterval(producer, 1000);
setInterval(consumer, 2000);
