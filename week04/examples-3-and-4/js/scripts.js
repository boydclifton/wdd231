import { temples } from '../data/temples.js'


import { url } from '../data/temples.js'

const showHere = document.querySelector('#showHere');
const myDialog = document.querySelector('#mydialog')
const myTitle = document.querySelector('#mydialog h2')
const myClose = document.querySelector('#mydialog button')
const myInfo = document.querySelector('#mydialog p')

myClose.addEventListener('click', () => myDialog.closest())

function displayItems(data) {
    console.log(data);
    data.forEach(item => {
        console.log(item)
        const photo = document.createElement('img')
        photo.src = `${url}${item.path}`
        photo.alt = item.name
        photo.addEventListener('click', () => showStuff(item));
    })
}

displayItems(temples)

function showStuff(item) {
    myTitle.innerHTML = item.name;
    myDialog.showModal();
}