const hero = document.querySelector('.hero');
const text = hero.querySelector('.logo-large');
const walk = 30;

function shadow(e) {
    //console.log(e);
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
      //console.log(this.offsetLeft);
      //console.log(this, e.target.getBoundingClientRect().left);
      //console.log(e.target);
      //console.log(x + e.target.offsetLeft);
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
        //x = e.target.getBoundingClientRect();
        //y = e.target.getBoundingClientRect();
    }


    const xWalk = Math.round(x / width * walk) - (walk / 2);
    const yWalk = Math.round(y / height * walk) - (walk / 2);

    text.style.filter = `drop-shadow(${xWalk}px ${yWalk}px 1px #444)`;

    //text.style.transform = `perspective( 0 ) rotateX( ${xWalk}deg ) rotateY( ${yWalk}deg )`

    //console.log(xWalk, yWalk);
    console.log(x, y);

}

hero.addEventListener('mousemove', shadow);
