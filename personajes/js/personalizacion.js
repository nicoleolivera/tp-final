// Selecciono las imágenes de los personajes
let imgMario = document.querySelector('#imgMario');
let imgLuigi = document.querySelector('#imgLuigi');
let imgPeach = document.querySelector('#imgPeach');
let imgBowser = document.querySelector('#imgBowser');
let imgToad = document.querySelector('#imgToad');
let imgYoshi = document.querySelector('#imgYoshi');

// Asigno eventos de clic a cada imagen para cambiar los colores del fondo y secciones de la página

// El orden es:
// Color de background
// Color de las secciones header, main y footer
// Color de las secciones aside y section

// Mario
imgMario.addEventListener('click', function (e) {
  e.preventDefault();
  document.body.style.backgroundColor = '#0091ff';

  document.querySelectorAll('header, main, footer').forEach(function (seccionesPrincipalesMario) {
    seccionesPrincipalesMario.style.backgroundColor = '#bf0006';
  });

  document.querySelectorAll('aside, section').forEach(function (seccionesSecundariasMario) {
    seccionesSecundariasMario.style.backgroundColor = '#1136bd';
  });
});

// Luigi
imgLuigi.addEventListener('click', function (e) {
  e.preventDefault();
  document.body.style.backgroundColor = '#06bf00';

  document.querySelectorAll('header, main, footer').forEach(function (seccionesPrincipalesLuigi) {
    seccionesPrincipalesLuigi.style.backgroundColor = '#55c425';
 });

  document.querySelectorAll('aside, section').forEach(function (seccionesSecundariasLuigi) {
    seccionesSecundariasLuigi.style.backgroundColor = '#90e36c';
 });
});

// Peach
imgPeach.addEventListener('click', function (e) {
  e.preventDefault();
  document.body.style.backgroundColor = '#ffa3d0';
  
  document.querySelectorAll('header, main, footer').forEach(function (seccionesPrincipalesPeach) {
    seccionesPrincipalesPeach.style.backgroundColor = '#25a5c4';
  });
 
  document.querySelectorAll('aside, section').forEach(function (seccionesSecundariasPeach) {
    seccionesSecundariasPeach.style.backgroundColor = '#c42555';
  });
});

// Bowser
imgBowser.addEventListener('click', function (e) {
  e.preventDefault();
  document.body.style.backgroundColor = '#000000';

  document.querySelectorAll('header, main, footer').forEach(function (seccionesPrincipalesBowser) {
    seccionesPrincipalesBowser.style.backgroundColor = '#fff700';
  });
   
  document.querySelectorAll('aside, section').forEach(function (seccionesSecundariasBowser) {
    seccionesSecundariasBowser.style.backgroundColor = '#ffa200';
  });
});
  
// Toad
imgToad.addEventListener('click', function (e) {
  e.preventDefault();
  document.body.style.backgroundColor = '#ff0000';

  document.querySelectorAll('header, main, footer').forEach(function (seccionesPrincipalesToad) {
    seccionesPrincipalesToad.style.backgroundColor = '#ffffff';
  });
   
  document.querySelectorAll('aside, section').forEach(function (seccionesSecundariasToad) {
    seccionesSecundariasToad.style.backgroundColor = '#0000d6';
  });
});

// Yoshi
imgYoshi.addEventListener('click', function (e) {
  e.preventDefault();
  document.body.style.backgroundColor = '#cb0b0b';
  document.body.style.color = '#000000'; // letras

  document.querySelectorAll('header, main, footer').forEach(function (seccionesPrincipalesYoshi) {
    seccionesPrincipalesYoshi.style.backgroundColor = '#55c425';
    seccionesPrincipalesYoshi.style.color = '#000000';
  });
   
  document.querySelectorAll('aside, section').forEach(function (seccionesSecundariasYoshi) {
    seccionesSecundariasYoshi.style.backgroundColor = '#ffffff';
    seccionesSecundariasYoshi.style.color = '#000000';
  });
});
