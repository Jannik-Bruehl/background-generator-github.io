var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient () {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function getRandomHex(){
    var letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColor(){
  var rand1 = getRandomHex();
  var rand2 = getRandomHex();
  color1.value = rand1;
  color2.value = rand2;
  setGradient();
}

function loadInitialColors(){
  color1.value ="#00ff00";
  color2.value = "#ff0000";
  setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor);

window.addEventListener("load", loadInitialColors);