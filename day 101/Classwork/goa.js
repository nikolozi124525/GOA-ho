document.getElementById('dogBtn').addEventListener('click', fetchDogImage);

async function fetchDogImage() {
    const errorMessageElement = document.getElementById('errorMessage');
    const dogImageElement = document.getElementById('dogImage');

    
    errorMessageElement.textContent = '';
    dogImageElement.src = ''; 

    try {
        
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        
        if (!response.ok) {
            throw new Error('ვერ დავამატეთ ფოტო. სცადეთ მოგვიანებით.');
        }
        const data = await response.json();

        dogImageElement.src = data.message;

    } catch (error) {
        errorMessageElement.textContent = `შეცდომა: ${error.message}`;
    }
}
