// Get the last modified date/time of the current document
var lastModifiedDate = document.lastModified;
    
// Display the last modified date/time
document.getElementById("lastModified").textContent = lastModifiedDate;


document.getElementById("year").textContent = new Date().getFullYear();