// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=87bb23583624ad10081b33f2619bef62'

async function apiFetch(){
    try {
        const response =  await fetch(url)
       
        if (response.ok){
            const data = await response.json()
            console.log (data)
            throw response.text
        }
    } catch(error){
        console.log (error)
    }
}
apiFetch()