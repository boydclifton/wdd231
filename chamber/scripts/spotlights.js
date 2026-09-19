const spotlightWrapper = document.querySelector('#spotlight-div');
const directoryJsonPath = 'data/members.json';

async function loadBusinessProfiles() {
    try {
        const directoryResponse = await fetch(directoryJsonPath);
        if (directoryResponse.ok) {
            const parsedDictionary = await directoryResponse.json();
            selectFeatureMembers(parsedDictionary);
        }
        else {
            throw Error(directoryResponse.text());
        }
    }
    catch (fileLoadError) {
        console.log('There was an error while attempting to load the member data:', fileLoadError)
    }
}

function selectFeatureMembers(fullMembersList) {
    const goldAndSilverMembers = fullMembersList.filter(company => company.membershipLevel === 3 || company.membershipLevel === 2);
    const randomizedPrem = goldAndSilverMembers.sort(() => 0.5 - Math.random());
    const finalSpotlights = randomizedPrem.slice(0, 2);
    generateSpotlightCards(finalSpotlights);
}


function generateSpotlightCards(spotlightArray) {
    spotlightArray.forEach(companyInfo => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('spotlight-card');
        memberCard.innerHTML = `<img src='images/${companyInfo.image}' alt='photo for ${companyInfo.name}'>
        <h3>${companyInfo.name}</h3>
        <p>Phone: ${companyInfo.phone}</p>
        <p><a href='${companyInfo.website}' target='_blank'>${companyInfo.website}</a></p>
        <p>${companyInfo.membershipLevel} Membership Level:</p>`;

        spotlightWrapper.appendChild(memberCard);
    });
}

loadBusinessProfiles();