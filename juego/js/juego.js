// Referencias a los elementos en el DOM
let mostrarPregunta = document.querySelector('#contenedorPregunta');
let btnPreguntame = document.querySelector('#btnPreguntame');
let btnReiniciar = document.querySelector('#btnReiniciar');
let mensajeResultado = document.querySelector('#mensajeResultado');
let mensajeToad = document.querySelector('#mensajeToad'); // Nueva referencia para el mensaje de Toad
let radios = document.querySelectorAll('.respuesta');

// Puntajes y contadores
let puntajeJugador = 0; 
let puntajeToad = 0;
let cantPreguntas = 0; 

// Preguntas divididas en verdaderas y falsas
let preguntasVerdaderas = [
    'Anya Taylor-Joy hizo el doblaje original de Princess Peach en la película.',
    'Super Mario Bros. fue lanzado en 1985.',
    'Bowser es el rey de los Koopas.',
    'Mario puede transformarse en abeja.',
    'En su principio, los diseños para el juego debían ser hechos a mano.',
];

let preguntasFalsas = [
    'La película de Mario Bros. sucede en Italia.',
    'Donkey Kong es el rey del Reino Champiñón.',
    'En la película, el actor Jack Black hace el doblaje de Luigi.',
    'Super Mario Bros. fue creado antes que Donkey Kong.',
    'Los Yoshis no varían de color porque son únicos en su especie.',
];

let preguntaActual = ''; 
let esVerdadera = false;

// Función para generar un puntaje aleatorio (0 o 100) para Toad
function generarPuntajeToad() {
    return Math.random() >= 0.5 ? 100 : 0;
}

// Evento para mostrar una nueva pregunta
btnPreguntame.addEventListener('click', function () {
    let aleatorio = Math.floor(Math.random() * 6) + 1;
    let elegida;

    if (aleatorio <= 3) {
        elegida = Math.floor(Math.random() * preguntasVerdaderas.length);
        preguntaActual = preguntasVerdaderas[elegida];
        esVerdadera = true;
    } else {
        elegida = Math.floor(Math.random() * preguntasFalsas.length);
        preguntaActual = preguntasFalsas[elegida];
        esVerdadera = false;
    }

    mostrarPregunta.innerText = preguntaActual;
    mensajeResultado.innerText = '';
    mensajeToad.innerText = ''; // Limpiar mensaje de Toad
    cantPreguntas++;

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    if (cantPreguntas === 11) {
        btnPreguntame.disabled = true;
        mostrarPregunta.innerText = '¡Se acabaron las preguntas!';
    }
});

// Evento para validar la respuesta
for (let i = 0; i < radios.length; i++) {
    radios[i].onclick = function () {
        if (preguntaActual === '') {
            mensajeResultado.innerText = 'Por favor, presiona "Pregúntame" primero.';
            return;
        }

        let valorSeleccionado = radios[i].value;

        // Validar respuesta del jugador
        if ((esVerdadera && valorSeleccionado === "true") || (!esVerdadera && valorSeleccionado === "false")) {
            puntajeJugador += 100;
            mensajeResultado.innerText = '¡Correcto! Monedas: ' + puntajeJugador;
        } else {
            mensajeResultado.innerText = 'Incorrecto. Monedas: ' + puntajeJugador;
        }

        // Generar puntaje aleatorio para Toad
        let monedasToad = generarPuntajeToad();
        puntajeToad += monedasToad;

        // Mostrar si Toad respondió correctamente o no
        if (monedasToad === 100) {
            mensajeToad.innerText = 'Toad respondió correctamente. Monedas: ' + puntajeToad;
        } else {
            mensajeToad.innerText = 'Toad respondió incorrectamente. Monedas: ' + puntajeToad;
        }

        // Actualizar las monedas en la interfaz
        document.querySelector('#monedasJugador').innerText = puntajeJugador;
        document.querySelector('#monedasToad').innerText = puntajeToad;
    };
}

// Evento para reiniciar el juego
btnReiniciar.addEventListener('click', function () {
    puntajeJugador = 0;
    puntajeToad = 0;
    cantPreguntas = 0;
    preguntaActual = '';
    esVerdadera = false;

    mostrarPregunta.innerText = 'Presiona el botón de preguntas para intentarlo de nuevo';
    mensajeResultado.innerText = '';
    mensajeToad.innerText = ''; // Reiniciar mensaje de Toad
    btnPreguntame.disabled = false;

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    // Reiniciar las monedas en la interfaz
    document.querySelector('#monedasJugador').innerText = puntajeJugador;
    document.querySelector('#monedasToad').innerText = puntajeToad;
});
