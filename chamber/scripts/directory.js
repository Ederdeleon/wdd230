 // Assuming you have the JSON data
 var companyData = {
    "companies": [
      {
        "name": "Tech Innovators Inc.",
        "address": "123 Main Street, Cityville, State",
        "phone": "+1 (555) 123-4567",
        "website": "http://www.techinnovators.com",
        "image": "tech_innovators_logo.png",
        "membership_level": "Gold",
        "additional_info": "Leading provider of cutting-edge technology solutions."
      },
      // ... (other company entries)
    ]
  };

  // Function to display company information
  function displayCompanies(data) {
    var companyListElement = document.getElementById('companyList');

    data.companies.forEach(function (company) {
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
  window.onload = function () {
    displayCompanies(companyData);
  };