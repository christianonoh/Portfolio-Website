const menuItems = document.querySelector('.menu-items');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const navLinks = document.querySelectorAll('.navbar-links');

openMenu.addEventListener('click', function(){
    menuItems.classList.add('display-mobile-menu');
});
closeMenu.addEventListener('click', function(){
    menuItems.classList.remove('display-mobile-menu');
});

navLinks.forEach(element => {
    element.addEventListener('click', function(){
        menuItems.classList.remove('display-mobile-menu');
    })
});