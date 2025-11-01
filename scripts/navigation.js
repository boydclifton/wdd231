// Store the selected elements that we are going to use // 
const navButton = document.querySelector("#ham-nav");
const navLinks = document.querySelector("#nav-bar");


navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navLinks.classList.toggle("show");

});