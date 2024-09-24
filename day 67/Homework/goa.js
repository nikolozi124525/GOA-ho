const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const img = document.querySelector('img');

const imgArr = ['car1.png', 'car2.png', 'car3.png'];
let index = 0;

next.addEventListener('click', function() {
    index++;
    if(index >= imgArr.length) {
        index = 0;
    }
    img.src = imgArr[index];
})

prev.addEventListener('click', function() {
    index--;
    if(index < 0) {
        index = 2;
    }
    img.src = imgArr[index];
})