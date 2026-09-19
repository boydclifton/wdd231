const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

const hamBtn = document.getElementById('menu-button');
const menuLinks = document.querySelector('.menu-links');

hamBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('open');

    if (menuLinks.classList.contains('open')) {
        hamBtn.innerHTML = '&#10006;';
    } else {
        hamBtn.innerHTML = '&#9776;';
    }
});

const membersURL = "data/members.json";

async function getMembers() {
    try {
        const response = await fetch(membersURL);

        if (response.ok) {
            const members = await response.json();
            displayMembers(members);
        } else {
            console.error("Was unable to fetch data");
        }
    } catch (error) {
        console.error("There was an error fetching data:", error);
    }
}

const displayMembers = (members) => {
    const grid = document.querySelector('#directory-grid');

    members.forEach((member) => {
        let card = document.createElement('section');
        card.classList.add('business-card');

        let image = document.createElement('img');
        let name = document.createElement('h3');
        let description = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        name.textContent = member.name;
        description.textContent = member.description;
        address.textContent = member.address;
        phone.textContent = member.phone;


        website.textContent = "Visit Website";
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');

        image.setAttribute('src', `images/${member.image}`);
        image.setAttribute('alt', 'Business photo/logo');
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '400');
        image.setAttribute('height', 'auto');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        grid.appendChild(card);
    });
}



const display = document.querySelector('#directory-grid');

if (display) {
    getMembers();
    const gridButton = document.querySelector('#grid-btn');
    const listbutton = document.querySelector('#list-btn');


    listbutton.addEventListener('click', () => {
        display.classList.add('list');
    });

    gridButton.addEventListener('click', () => {
        display.classList.remove('list');
    });

}















