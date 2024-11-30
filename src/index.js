import './styles.css'
import { createHomePage } from './home'

createHomePage();

document.addEventListener('click', (event) => {
    console.log(event.target.innerText);
    const content = document.querySelector('#content')
    content.innerHTML= ''
    switch(event.target.innerText) {
        case('Home') :
            console.log(1);
            createHomePage();
            break;
        case('Menu') :
            console.log(2);
            break;
        case('About') :
            console.log(3);
    }
})