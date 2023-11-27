
  function displayCompanies(data) {
    var companyListElement = document.getElementById('companyList');
console.log(data)
    data.companies.forEach(function (company) {
      console.log (company)
      var companyCard = document.createElement('div');
      companyCard.className = 'company-card';

      var companyImage = document.createElement('img');
      companyImage.src = company.image;
      companyImage.alt = company.name + ' Logo';

      var companyName = document.createElement('h2');
      companyName.textContent = company.name;

      var companyInfo = document.createElement('p');
      companyInfo.innerHTML = 'Address: ' + company.address + '<br>Phone: ' + company.phone + '<br>Website: ' + company.website + '<br>Membership Level: ' + company.membership_level;

      companyCard.appendChild(companyImage);
      companyCard.appendChild(companyName);
      companyCard.appendChild(companyInfo);

      companyListElement.appendChild(companyCard);
    });
  }

  // Display the company information when the page loads
   async function getdata (){
    companyData= await fetch("https://raw.githubusercontent.com/Ederdeleon/wdd230/master/chamber/data/members.json")
    data=await companyData.json()
    console.log(data)

    displayCompanies(data);


  };
  getdata()