import akiImage from './aki-image.jpeg'
export function createAbout() {

const content = document.querySelector('#content');

const aboutContainer = document.createElement('div');
aboutContainer.classList.add('about-container');

const aboutImageContainer = document.createElement('div');
aboutImageContainer.classList.add('about-image-container');

const aboutImage = document.createElement('img');
aboutImage.src = akiImage;
aboutImage.classList.add('about-image'); 

const aboutDescription = document.createElement('div');
aboutDescription.classList.add('about-description');
const aboutDescriptionTextNode = document.createTextNode('This restaurant was founded in 2024 by Aki poster while doing an Odin project exercise, it is unlikely that it will be updated much more from now on.');
aboutDescription.appendChild(aboutDescriptionTextNode);
 
content.appendChild(aboutContainer);
aboutContainer.appendChild(aboutImageContainer);
aboutContainer.appendChild(aboutDescription);
aboutImageContainer.appendChild(aboutImage);
}