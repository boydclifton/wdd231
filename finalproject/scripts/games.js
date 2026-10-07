const gamesContainer = document.querySelector('#games-container');
const modal = document.querySelector('#game-modal');
const modalContent = document.querySelector('#modal-content');
const closeModalBtn = document.querySelector('#close-modal');
closeModalBtn.addEventListener('click', () => {
    modal.close();
});

    
   

    


async function fetchGames() {
    try {
        const response = await fetch('data/games.json');

        
        if (!response.ok) {
            throw new Error('Network response was not ok');
           
        }
        const data = await response.json();
        displayGames(data);
        
        
    } catch (error) {
    
        
        console.error('Error fetching data:', error);
        
        gamesContainer.innerHTML = '<p>Sorry, the game data could not be loaded.</p>';
    }
}


function displayGames(games) {

    
    gamesContainer.innerHTML = '';
    
    
    games.forEach(game => {
    
        
        const card = document.createElement('article');
        
        
        card.className = 'game-card';
        
        
        card.innerHTML = `
            <h3>${game.title}</h3>
            <p><strong>Year:</strong> ${game.year}</p>
            <button class="details-btn">View Details</button>
        `;
        
        
        const detailsBtn = card.querySelector('.details-btn');
       
        
        detailsBtn.addEventListener('click', () => {
        
            
            modalContent.innerHTML = `
                <h2>${game.title}</h2>
                <p><strong>Released:</strong> ${game.year}</p>
                <p><strong>Role:</strong> ${game.role}</p>
                <p class="modal-desc"><em>${game.description}</em></p>
            `;
            
            
            modal.showModal();
            
            
        });
       
        gamesContainer.appendChild(card);
       
        
    });
   
    
}


fetchGames();
