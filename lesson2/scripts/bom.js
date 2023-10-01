const input = document.querySelector("#favchap");
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
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);

deleteButton.addEventListener('click', function (){
  list.removeChild(li);
  input.focus();
});
input.focus();
input.value = '';


