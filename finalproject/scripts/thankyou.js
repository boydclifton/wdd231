const currentUrl = window.location.href;
const formData = new URL(currentUrl).searchParams;
const resultsContainer = document.querySelector('#results');
const firstName = formData.get('fname');
const email = formData.get('email');
const favGame = formData.get('favgame');
resultsContainer.innerHTML = `
<p><strong>Operative Name:</strong> ${firstName}</p>
    <p><strong>Contact Email:</strong> ${email}</p>
    <p><strong>Favorite Title:</strong> ${favGame}</p>
`;

const savedName = localStorage.getItem('kojimaOperativeName');
if (savedName) {
    const greetingMessage = document.createElement('p');
    greetingMessage.style.marginTop = '1.5rem';
    greetingMessage.style.color = 'var(--accent-gold)';
    greetingMessage.textContent = `Local Storage verified. Welcome back to the espionage network, ${savedName}`;
    resultsContainer.appendChild(greetingMessage);
}