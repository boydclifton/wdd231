
import { places as manheimLocations } from '../data/places.mjs';
const gridWrapper = document.querySelector('.discover-layout');
manheimLocations.forEach((location, index) => {
    const poiCard = document.createElement('article');
    poiCard.classList.add('discover-card', `card-${index + 1}`);
    const locationTitle = document.createElement('h2');

    locationTitle.textContent = location.name;
    const photoBox = document.createElement('figure');
    const siteImage = document.createElement('img');
    siteImage.src = location.image;
    siteImage.alt = `Photo of ${location.name}`;
    siteImage.width = 300;
    siteImage.height = 200;
    siteImage.setAttribute('loading', 'lazy');
    photoBox.appendChild(siteImage);

    const streetInfo = document.createElement('address');
    streetInfo.textContent = location.address;
    const detailsText = document.createElement('p');
    detailsText.textContent = location.description;
    const actionBtn = document.createElement('button');
    actionBtn.type = 'button';
    actionBtn.className = 'learn-more-btn';
    actionBtn.textContent = 'Learn More';
    actionBtn.addEventListener('click', () => {
        window.open(location.website, '_blank');
    });


    poiCard.appendChild(locationTitle);
    poiCard.appendChild(photoBox);
    poiCard.appendChild(streetInfo);
    poiCard.appendChild(detailsText);
    poiCard.appendChild(actionBtn);
    gridWrapper.appendChild(poiCard);

});


const millisecondsPerDay = 84600000;
const currentDateMs = Date.now();


const welcomeDisplay = document.getElementById('visitor-message');


let previousVisitTime = Number(window.localStorage.getItem('chamberLastVisit')) || 0;


if (previousVisitTime === 0) {
    welcomeDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const timeElapsed = currentDateMs - previousVisitTime;
    const daysSinceLastVisit = Math.floor(timeElapsed / millisecondsPerDay);

    if (daysSinceLastVisit < 1) {
        welcomeDisplay.textContent = "Glad to see you back so soon!";
    } else if (daysSinceLastVisit === 1) {
        welcomeDisplay.textContent = "You last visited 1 day ago.";
    } else {
        welcomeDisplay.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
    }
}

localStorage.setItem('chamberLastVisit', currentDateMs);

