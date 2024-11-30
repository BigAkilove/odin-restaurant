export function createMenu (numberOfMenus) {
    const content = document.querySelector('#content');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuName = document.createElement('div');
    menuName.classList.add('menu-name');
    const menuNameTextNode = document.createTextNode('Menu name');
    menuName.appendChild(menuNameTextNode);

    const menuDescription = document.createElement('div');
    menuDescription.classList.add('menu-description');
    const menuDescriptionTextNode = document.createTextNode('Menu description')
    menuDescription.appendChild(menuDescriptionTextNode);

    menuContainer.appendChild(menuName);
    menuContainer.appendChild(menuDescription);

    for(let i=0 ; i<numberOfMenus; i++) {
        console.log(i)
        content.appendChild(menuContainer.cloneNode(true))
    }
}