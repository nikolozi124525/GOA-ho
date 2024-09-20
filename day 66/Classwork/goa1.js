const div = document.querySelector('#parent');
const button = document.querySelector('button');

let counter = 0;

button.addEventListener('click', function(){
    const p = document.createElement('p');
    p.textContent = 'Paaragraph ' + counter;
    p.id = counter;

    div.appendChild(p);

    counter++;
})