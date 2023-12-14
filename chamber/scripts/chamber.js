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

// visits
let visitelement=document.getElementById("lastvisit")
if (!localStorage.getItem("visits")){
 visitelement.innerHTML="Welcome! Let us know if you have any questions."
localStorage.setItem("visits",Date.now())
}
else if (localStorage.getItem("visits")){
    let lastvisit=localStorage.getItem("visits")
        let now=Date.now()
        let difference=now-lastvisit
        let days=difference/1000/60/60/24
        if (days<1){
            visitelement.innerHTML="Back so soon! Awesome!"
            localStorage.setItem("visits",Date.now())
        }
        else {
            visitelement.innerHTML=`You last visited ${days} days ago.`
            localStorage.setItem("visits",Date.now())
        }
    }

// Weather code



