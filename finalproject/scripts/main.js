const menuButton = document.querySelector('#menu-toggle')

const navList = document.querySelector('#primary-nav');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('hidden');
    if (navList.classList.contains('hidden')) {
        menuButton.innerHTML = '&#9776;';
    } else {
        menuButton.innerHTML = '&times;';
    }
}
);

const yearSpan = document.querySelector('#currentyear');
const today = new Date();
yearSpan.textContent = today.getFullYear();
const modifiedParagraph = document.querySelector('#lastModified');
modifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;