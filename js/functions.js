
//for loading thing
var loadObj = { loading: '0%' };

var JSobject = anime({
  targets: loadObj,
  loading: '100%',
  round: 1,
  easing: 'linear',
  update: function() {
    var el = document.querySelector('#loading pre');
    el.innerHTML = JSON.stringify(loadObj);
  },
  loop: true
});
