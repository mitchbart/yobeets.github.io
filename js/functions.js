
//for unneccessary loading text(nothing is loading)
var loadObj = { loading: '0%' };

var JSobject = anime({
  targets: loadObj,
  loading: '1000%',
  round: 1,
  easing: 'linear',
  duration: 200000,
  update: function() {
    var el = document.querySelector('#loading pre');
    el.innerHTML = JSON.stringify(loadObj);
  },
  loop: true
});

//fancy word thing
var element = document.querySelector("h2")
charming(element)
