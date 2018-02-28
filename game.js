// function test() {
//   alert("Test");
// }

var menu = document.getElementById("menu");
var playButton = document.getElementById("playButton");
playButton.addEventListener("click", function() {
  menu.innerHTML = "";
  var nameForm = document.createElement("form");
  nameForm.style.margin = "0 auto";
  var nameLabel = document.createElement("label");
  nameLabel.for = "name";
  nameLabel.textContent = "Username";
  nameForm.appendChild(nameLabel);
  var nameInput = document.createElement("input");
  nameInput.id = "name";
  nameInput.width = "50%";
  nameForm.appendChild(nameInput);
  menu.appendChild(nameForm);
});
