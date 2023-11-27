const links = document.getElementById ("links")

const baseURL = "https://Ederdeleon.github.io/wdd230/";

const linksURL = "https://Ederdeleon.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
    console.log(data);
  }
  
  getLinks();

function displayLinks(weeks){
 weeks.weeks.forEach(week => {
   console.log(week)
  
   const listItem = document.createElement("li")
   const header = document.createElement("h3")
   header.innerHTML= week.week
   listItem.appendChild (header)
   week.links.forEach(link => {
   
  const url = document.createElement ("a")
url.setAttribute("href", link.url)
url.innerHTML=link.title
listItem.appendChild(url)
   })

links.appendChild (listItem)

 });
  
 
  
  // fullname.innerHTML = `${prophet.name} ${prophet.lastname}`
  // birthplace.innerHTML = `${prophet.birthplace}`
  // birthdate.innerHTML = `${prophet.birthdate}`

  // portrait.setAttribute("src",prophet.imageurl)
  // portrait.setAttribute("alt",`Portrait of ${prophet.name} ${prophet.lastname}`);
  // portrait.setAttribute('loading', 'lazy');
  // portrait.setAttribute('width', '340');
  // portrait.setAttribute('height', '440');


  // card.appendChild(fullname);
  // card.appendChild(birthplace);
  // card.appendChild(birthdate);
  // card.appendChild(portrait);
  // cards.appendChild(card)

    ;

  }

