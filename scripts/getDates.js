// Get the last modified date/time of the current document
var lastModifiedDate = document.lastModified;
    
// Display the last modified date/time
document.getElementById("lastModified").textContent = lastModifiedDate;


document.getElementById("year").textContent = new Date().getFullYear();

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