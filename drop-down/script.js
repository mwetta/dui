// get element by  id #menu
// onclick toggle class of all siblings ul.collapse

let menu = document.getElementById('menu');
let menuList = document.getElementById('main-menu');

menu.addEventListener('click', () =>{
    collapseMenu();
});

let collapseMenu = () => menuList.classList.toggle('collapse');

let menuItems = document.querySelectorAll('.link');

menuItems.forEach(listItem => listItem.addEventListener('click', () => {
    resetActive();
    listItem.classList.toggle('active');
    collapseMenu();
    triggerContent(listItem.id);
}))

const resetActive = () => {
    let activeItems = document.querySelectorAll('.active'); 
    activeItems.forEach(activeItem => activeItem.classList.toggle('active'));
}

const triggerContent = (id) => {
    console.log(`will trigger content for this page: ${id}`);
}