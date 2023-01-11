// get element by  id #menu
// onclick toggle class of all siblings ul.collapse

let menu = document.getElementById('menu');
let menuList = document.getElementById('menu-list');

menu.addEventListener('click', () =>{
    menuList.classList.toggle('collapse');
});