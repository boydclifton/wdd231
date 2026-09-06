const yearSpan = document.querySelector('#currentyear');
const today = new Date();
yearSpan.innerHTML = today.getFullYear();  

const lastModified = document.querySelector('#lastmodified'); 
lastModified.innerHTML = `Last Modified: ${document.lastModified}`;

