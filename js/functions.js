
//for unneccessary loading text(nothing is loading)
var loadObj = { coolnessLevel: '0%' };

var JSobject = anime({
  targets: loadObj,
  coolnessLevel: '9001%',
  round: 1,
  easing: 'linear',
  duration: 20000,
  update: function() {
    var el = document.querySelector('#loading pre');
    el.innerHTML = JSON.stringify(loadObj);
  }
  //loop: true
});






//fancy word thing
let pageTitle = document.querySelector(".title")
charming(pageTitle);

//all for title colour change
var colorArray = ["#FFC312", "#C4E538", "#12CBC4", "#FDA7DF", "#ED4C67", "#ef5777", "#575fcf", "#4bcffa", "#34e7e4", "#34e7e4", "#0be881"];

function getRandomNumber () {
  return Math.floor(Math.random() * pageTitle.innerText.length + 1);
};

function getRandomColor () {
  return colorArray[Math.floor(Math.random()*colorArray.length)];
};

function changeColor () {
  let n = getRandomNumber();
  let c = getRandomColor();
  let x = document.querySelector(".char" + n);
  x.style.color = c;
};

setInterval(changeColor, 10);