const input = document.querySelector("#gavchap");
const button = document.querySelector("button");
const ul = document.querySelector("#list");

button.addEventListener("click", () => {
  if (input.value) {
      console.log("clicked");

  } else {
    input.focus();

    Feedback.textContent = ' ';
  }
});
