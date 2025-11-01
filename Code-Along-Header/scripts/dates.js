const yearSpan = document.querySelector("#currentyear");
const today = new Date();
yearSpan.textContent = today.getFullYear();

document.querySelector("#lastModified").textContent = `Last modified: ${document.lastModified}`;