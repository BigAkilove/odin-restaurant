import './styles.css'
import { createHomePage } from './home';
import {createMenu} from './menu'
import {createAbout} from './about'

createHomePage();

document.addEventListener('click', (event) => {
    const content = document.querySelector('#content')
    content.innerHTML= ''

    switch(event.target.innerText) {
        case('Home') :
            createHomePage();
            break;
        case('Menu') :
            createMenu(4);
            break;
        case('About') :
            createAbout();
            break;
    }
})