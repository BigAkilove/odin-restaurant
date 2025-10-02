import hajimeImage from './summer-hajime.png';
export function createHomePage() {
    const content = document.querySelector('#content');

    const descriptionAndImagesContainer = document.createElement('div');
    descriptionAndImagesContainer.classList.add('description-and-images');

    content.appendChild(descriptionAndImagesContainer);

    const paragraph = document.createElement('p');
    const paragraphTextNode = document.createTextNode("Hello, this is my epic restaurant");

    paragraph.appendChild(paragraphTextNode);
    descriptionAndImagesContainer.appendChild(paragraph)

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('example-images-container');

    const exampleImage = document.createElement('img');
    exampleImage.src = hajimeImage;
    exampleImage.classList.add('example-image');

    descriptionAndImagesContainer.appendChild(imageContainer);

    for(let i=0;i<4;i++) imageContainer.appendChild(exampleImage.cloneNode());

    const quoteParagraph = document.createElement('div');
    const quoteParagraphTextNode = document.createTextNode('This restaurant was created in 2024 and already received 30 recommendations from world famous chiefs.')
    quoteParagraph.classList.add('restaurant-quote');
    quoteParagraph.appendChild(quoteParagraphTextNode);

    content.appendChild(quoteParagraph);
}

