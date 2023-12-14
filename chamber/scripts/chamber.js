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

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.52&lon=-111.86&units=imperial&appid=87bb23583624ad10081b33f2619bef62';

async function apiFetch(){
    try {
        const response =  await fetch(url);
       
        if (response.ok){
            const data = await response.json();
            console.log (data);
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
        
    } catch(error){
        console.log (error);
    }
     
}
apiFetch();

// display results
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute(`src`, iconsrc);
    weatherIcon.setAttribute(`alt`, desc);
    captionDesc.textContent = `${desc}`;
    console.log(data.main.feels_like);
}

