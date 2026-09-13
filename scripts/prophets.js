// 1. Define the URL containing the JSON data
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// 2. Select the HTML container where the cards will go
const cards = document.querySelector('#cards');

// 3. Fetch the data from the API
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  
  // Pass the array of prophets to our display function
  displayProphets(data.prophets);
}

// 4. Build the HTML cards for each prophet
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    
    // Create all the HTML elements for a single card
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const birthDate = document.createElement('p');
    const birthPlace = document.createElement('p');
    const portrait = document.createElement('img');

    // Add the text content using the JSON data
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

    // Set the image attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy'); 
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Attach all the pieces to the section card
    card.appendChild(fullName);
    card.appendChild(birthDate);   
    card.appendChild(birthPlace);  
    card.appendChild(portrait);    

    // Attach the completed section card to the main #cards container
    cards.appendChild(card);
  });
};

// 5. Run the fetch function to start the entire process
getProphetData();