 
const navButton = document.querySelector("#ham-nav");
const navLinks = document.querySelector("#nav-bar");


navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navLinks.classList.toggle("show");

});

const response = await fetch("https://jsonplaceholder.typicode.com/todos/");