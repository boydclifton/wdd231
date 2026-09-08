// shared behavior for all chamber pages // 

// -------------------------------- MOBILE MENU TOGGLE ------------------------------- // 



const menuButton = document.querySelector("#menuButton");
const primaryNav = document.querySelector("#primaryNav");

if (menuButton && primaryNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });


 // Close menu with Escape (accessibility nicety)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && primaryNav.classList.contains('open')) {
      primaryNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.focus();
    }
  });
}



// ------------------------ FOOTER DATES ------------------ // 



const yearSpan = document.querySelector("#currentYear");
const today = new Date();
if (yearSpan) {
    yearSpan.textContent = today.getFullYear();
}

const lastModifiedE1 = document.querySelector("#lastModified");
if (lastModifiedE1) {
    lastModifiedE1.textContent = `Last modified: ${document.lastModified}`;
}

