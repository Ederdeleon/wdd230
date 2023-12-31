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

// dark mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});

// number of visits- local storage 
// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.


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
