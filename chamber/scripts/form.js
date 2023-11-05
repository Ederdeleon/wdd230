// Function to get the current date and time as a string
function getCurrentDateTime() {
    const now = new Date();
    return now.toISOString(); // You can format this string as needed
  }

  // Set the input field value when the form is loaded
  window.onload = function () {
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
      timestampField.value = getCurrentDateTime();
    }
  };