import './style.css';

import navigationBar from './header.js';
import { homeContent,menuContent,contactContent } from './content.js';


const nav = navigationBar();
const header = document.getElementById('header');
header.appendChild(nav);


const content = document.getElementById('cnt');
const navBar = document.querySelector('.navBar');

const btn1 = navBar.querySelector('.btn1');
const btn2 = navBar.querySelector('.btn2');
const btn3 = navBar.querySelector('.btn3');

btn1.addEventListener('click',function() {
    const home = homeContent();
    content.innerHTML='';
    content.appendChild(home);

    btn1.classList.remove('button-clicked');
    btn2.classList.remove('button-clicked');
    btn3.classList.remove('button-clicked');

    btn1.classList.add('button-clicked');
});

btn2.addEventListener('click',function() {
    const menu = menuContent();
    content.innerHTML='';
    content.appendChild(menu);

    btn1.classList.remove('button-clicked');
    btn2.classList.remove('button-clicked');
    btn3.classList.remove('button-clicked');

    btn2.classList.add('button-clicked');
});

btn3.addEventListener('click',function() {
    const contact = contactContent();
    content.innerHTML='';
    content.appendChild(contact);

    btn1.classList.remove('button-clicked');
    btn2.classList.remove('button-clicked');
    btn3.classList.remove('button-clicked');

    btn3.classList.add('button-clicked');
});

btn1.click();

const foot = document.getElementById('footer');
foot.classList.add('foot');
const listOfHelpers = document.createElement('ul');
listOfHelpers.classList.add('listOfHelpers');
const listItem1 = document.createElement('li');
listItem1.textContent = 'Bee images by Gemini';
listOfHelpers.appendChild(listItem1);
const listItem2  = document.createElement('li');
listItem2.textContent = 'Dishes pictures by Bard';
listOfHelpers.appendChild(listItem2);
const listItem3 = document.createElement('li');
listItem3.textContent = 'All other images DAlle';
listOfHelpers.appendChild(listItem3);

foot.appendChild(listOfHelpers);
