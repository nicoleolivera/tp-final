// botón que cambia el color de la web según el personaje clickeado

let imgMario = document.querySelector('#imgMario');
let imgBowser = document.querySelector('#imgBowser');
let imgPeach = document.querySelector('#imgPeach');
let imgLuigi = document.querySelector('#imgLuigi');

imgMario.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'white';
  });
  
  imgBowser.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'yellow';
  });
  
  imgPeach.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.style.backgroundColor = 'pink';
    document.body.style.color = 'white';
  });
  
  imgLuigi.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'white';
  });
  