
//for unneccessary loading text(nothing is loading)
var loadObj = { coolnessLevel: '0%' };

var JSobject = anime({
  targets: loadObj,
  coolnessLevel: '1000%',
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
charming(pageTitle)

console.log(pageTitle);

//get random letter
var randomChar = pageTitle.innerText[Math.floor(Math.random()*pageTitle.innerText.length)];

console.log(randomChar);

//array of colours 
var colorArray = ["#FFC312", "#C4E538", "#12CBC4", "#FDA7DF", "#ED4C67"];
//var randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];

function getRandomColor () {
  return colorArray[Math.floor(Math.random()*colorArray.length)];
};

//need to get rnadom span element in page title

function getRandomNumber () {
  return Math.floor(Math.random()*pageTitle.length);
};
console.log(getRandomNumber());


//some code
function color (heading) {
  heading.style.color = getRandomColor();
};

setInterval(color, 300, pageTitle);

//console.log(randomColor);