// get element by  id #menu
// onclick toggle class of all siblings ul.collapse

let menu = document.querySelector('.active');
let menuList = document.querySelector('.menu-list');
let links = document.querySelectorAll('.link');

menu.addEventListener('click', () =>{
    menuList.classList.toggle('collapse');

});

links.forEach(link => link.addEventListener('click', () => {
    menu.textContent = `${link.id}`;
    let hidden = document.querySelector('.hidden');
    hidden.classList.toggle('hidden');
    link.classList.toggle('hidden');
    menuList.classList.toggle('collapse');
}))