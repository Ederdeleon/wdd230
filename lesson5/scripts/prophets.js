// Declare a const variable named "url" that contains the URL string of the JSON resource provided.
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Declare a const variable name "cards" that selects the HTML div element from the document with an id value of "cards".
const cards = document.querySelector('#cards');




  async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
  }
  
  getProphetData(url);


  

  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
  card = document.createElement("section")
  fullname = document.createElement("h2")
  portrait = document.createElement("img")
  birthplace = document.createElement("p")
  birthdate = document.createElement("p")
  
  console.log(prophet)
  fullname.innerHTML = `${prophet.name} ${prophet.lastname}`
  birthplace.innerHTML = `${prophet.birthplace}`
  birthdate.innerHTML = `${prophet.birthdate}`

  portrait.setAttribute("src",prophet.imageurl)
  portrait.setAttribute("alt",`Portrait of ${prophet.name} ${prophet.lastname}`);
  portrait.setAttribute('loading', 'lazy');
  portrait.setAttribute('width', '340');
  portrait.setAttribute('height', '440');


  card.appendChild(fullname);
  card.appendChild(birthplace);
  card.appendChild(birthdate);
  card.appendChild(portrait);
  cards.appendChild(card)

    });

  }

