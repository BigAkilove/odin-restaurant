import './styles.css'
import { createHomePage } from './home';
import {createMenu} from './menu'
import {createAbout} from './about'

createHomePage();

document.addEventListener('click', (event) => {
    const content = document.querySelector('#content');
    console.log(event.target.innerText);

    switch(event.target.innerText) {
        case('Home') :
            content.innerHTML= '';
            createHomePage();
            break;
        case('Menu') :
            content.innerHTML= '';
            createMenu(4);
            break;
        case('About') :
            content.innerHTML= '';
            createAbout();
            break;
        default:
            break;
    }
})