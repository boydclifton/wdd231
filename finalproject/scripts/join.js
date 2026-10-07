const form = document.querySelector('.newsletter-form');

form.addEventListener('submit', () => {
    const nameInput = document.querySelector('#fname');

    if (nameInput) {
        localStorage.setItem('kojimaOperativeName', nameInput.value);
        console.log("Successfully saved to Local Storage:", nameInput.value);
    } else {
        console.error("CRITICAL ERROR: Could not find the HTML element with the ID of 'fname'. Check your spelling in join.html!");
    }
});