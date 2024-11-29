// botón que cambia el color de la web según el personaje clickeado

let imgMario = document.querySelector('#imgMario');
let imgLuigi = document.querySelector('#imgLuigi');
let imgPeach = document.querySelector('#imgPeach');
let imgBowser = document.querySelector('#imgBowser');
let imgToad = document.querySelector('#imgToad');
let imgYoshi = document.querySelector('#imgYoshi');


imgMario.addEventListener('click', function (e) {
  e.preventDefault();
  document.body.style.backgroundColor = '#0091ff';

  document.querySelectorAll('header, main, footer').forEach(function (element) {
    element.style.backgroundColor = '#bf0006';
  });

  document.querySelectorAll('aside, section').forEach(function (element) {
    element.style.backgroundColor = '#1136bd';
  });
});

imgLuigi.addEventListener('click', function (e) {
  e.preventDefault();
  document.body.style.backgroundColor = '#06bf00';

  document.querySelectorAll('header, main, footer').forEach(function (element) {
   element.style.backgroundColor = '#55c425';
 });

  document.querySelectorAll('aside, section').forEach(function (element) {
    element.style.backgroundColor = '#90e36c';
 });
});

imgPeach.addEventListener('click', function (e) {
  e.preventDefault();
  document.body.style.backgroundColor = '#ffa3d0';
  
  document.querySelectorAll('header, main, footer').forEach(function (element) {
    element.style.backgroundColor = '#25a5c4';
  });
 
  document.querySelectorAll('aside, section').forEach(function (element) {
    element.style.backgroundColor = '#c42555';
  });
});

  
imgBowser.addEventListener('click', function (e) {
  e.preventDefault();
  document.body.style.backgroundColor = '#000000';

  document.querySelectorAll('header, main, footer').forEach(function (element) {
    element.style.backgroundColor = '#fff700';
  });
   
  document.querySelectorAll('aside, section').forEach(function (element) {
    element.style.backgroundColor = '#ffa200';
  });
});
  
  
imgToad.addEventListener('click', function (e) {
  e.preventDefault();
  document.body.style.backgroundColor = '#ff0000';

  document.querySelectorAll('header, main, footer').forEach(function (element) {
    element.style.backgroundColor = '#ffffff';
  });
   
  document.querySelectorAll('aside, section').forEach(function (element) {
    element.style.backgroundColor = '#0000d6';
  });
});

imgYoshi.addEventListener('click', function (e) {
  e.preventDefault();
  document.body.style.backgroundColor = '#cb0b0b';

  document.querySelectorAll('header, main, footer').forEach(function (element) {
    element.style.backgroundColor = '#55c425';
  });
   
  document.querySelectorAll('aside, section').forEach(function (element) {
    element.style.backgroundColor = '#ffffff';
  });
});