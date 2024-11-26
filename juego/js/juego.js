//Cada vez que se hace click en el boton se muestra una pregunta al azar

let mostrarPregunta = document.querySelector('#contenedorPregunta');
let btnPreguntame = document.querySelector('#btnPreguntame');

let cantPreguntas = 0; // Inicializamos el contador

btnPreguntame.addEventListener('click', function () {
    let preguntas = [
       
    ];

    // Mostrar una pregunta aleatoria
    let preguntaAzar = Math.floor(Math.random() * preguntas.length);
    mostrarPregunta.innerText = preguntas[preguntaAzar];

    // Incrementar el contador de preguntas
    cantPreguntas++;

    // Si llegamos a 5, deshabilitamos el botón
    if (cantPreguntas === 5) {
        btnPreguntame.disabled = true;
        mostrarPregunta.innerText = '¡Se acabaron las preguntas!';
    }
});

// mostrar puntaje Y para eso ir sumando los checkkkradios

// btn para reiniciar juego si sequiere jugar otra vez o perdio 



