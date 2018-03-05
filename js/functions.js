
//for unneccessary loading text(nothing is loading)
var loadObj = { coolnessLevel: '0%' };

var JSobject = anime({
  targets: loadObj,
  coolnessLevel: '9001%',
  round: 1,
  easing: 'linear',
  duration: 800000,
  update: function() {
    var el = document.querySelector('#loading');
    el.innerHTML = JSON.stringify(loadObj);
  }
  //loop: true
});

//special drip effect whatever that is?
//var dripping = document.querySelector('.drip');

//var domNode = anime({
 // targets: dripping,
//  translateY: -25
//});



//fancy word thing
let pageTitle = document.querySelector(".party-mode");
//charming(pageTitle);
charming(pageTitle, {
  classPrefix: 'drip char'
})


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

/**function drip() {
  let n = getRandomNumber();
  let x = document.querySelector(".char" + n);
  x.classList.toggle('drip');
  var dripping = document.querySelector('.drip');

  var domNode = anime({
    targets: dripping,
    translateY: 20,
    direction: 'alternate'
});
  console.log("wooo ladd");
}**/


/**var dripping = document.querySelector('.drip');

  var domNode = anime({
    targets: dripping,
    translateY: 20,
    direction: 'alternate'
  });
**/

setInterval(changeColor, 10);
//setInterval(drip, 100);

/**var dripping = document.querySelectorAll('.drip');

  var domNode = anime.timeline({
    targets: dripping,
    translateY: 20,
    loop: true
  });**/

/**var functionBasedDelay = anime({
  targets: '.drip',
  translateY: 20,
  direction: 'alternate',
  loop: true,
  delay: function(el, i, l) {
    return i * 100;
  }
});**/


var els = document.querySelectorAll('#nodeList .el');

var nodeList = anime({
  targets: els,
  translateY: 250,
  delay: () => { return anime.random(0, 1000); },
  rotate: function() { return anime.random(-360, 360); },
  direction: 'alternate',
  duration: 30,
  loop: true

});

