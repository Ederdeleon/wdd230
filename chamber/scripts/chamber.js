// hamburger menu
const hamburgerButton = document.querySelector('.hamburger-button');
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('show');
    }
});