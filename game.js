// function test() {
//   alert("Test");
// }

var menu = document.getElementById("menu");
var playButton = document.getElementById("playButton");
var loadCount = 0;

function changeToInput() {
  var five = document.getElementById("five");
  var fivePara = five.removeChild(document.getElementById("fivePara"));
  var fiveInput = document.createElement("input");
  fiveInput.type = "number";
  fiveInput.width = "25px";
  fiveInput.value = "-15";
  five.appendChild(fiveInput);
}

function clearInt(int) {
  clearInterval(int);
  load();
}

function load() {
  menu.innerHTML = "";
}

function loading() {
  menu.innerHTML = "";
  var loadBox = document.createElement("div");
  loadBox.width = "50%";
  loadBox.style.margin = "0 auto";
  var loadPara = document.createElement("p");
  loadPara.textContent = "Loading.";
  loadBox.appendChild(loadPara);
  menu.appendChild(loadBox);
  var count = 1;
  var int = setInterval(function() {
    count++;
    if(count === 4) {
      count = 1;
      loadCount++;
    }
    loadPara.textContent = "Loading";
    for(var i = 1; i <= count; i++) {
      loadPara.textContent += ".";
    }
    if(loadCount === 2) {
      clearInt(int);
    }
  }, 1000);
}

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
  // nameInput.width = "50%";
  nameForm.appendChild(nameInput);
  nameForm.style.display = "flex";
  nameForm.style.flexFlow = "column wrap";
  nameForm.style.alignItems = "center";
  nameForm.action = "index.html";
  $("#nameForm").css({
    "disply":"none"
  });
  nameForm.addEventListener("submit", loading);
  menu.appendChild(nameForm);
});
