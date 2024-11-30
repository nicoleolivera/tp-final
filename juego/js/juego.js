// Referencias a los elementos en el DOM
let mostrarPregunta = document.querySelector('#contenedorPregunta');
let btnPreguntame = document.querySelector('#btnPreguntame');
let btnReiniciar = document.querySelector('#btnReiniciar');
let mensajeResultado = document.querySelector('#mensajeResultado');
let mensajeToad = document.querySelector('#mensajeToad');
let radios = document.querySelectorAll('.respuesta');
let vidasJugador = document.querySelector('#vidas');
let monedasJugador = document.querySelector('#monedasJugador');
let monedasToad = document.querySelector('#monedasToad');

// Puntajes y contadores
let puntajeJugador = 0;
let puntajeToad = 0;
let cantPreguntas = 0;
let vidas = 3; // Inicializar las vidas del jugador

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
let preguntasUsadas = []; // Array para almacenar preguntas ya utilizadas

// Función para generar un puntaje aleatorio (0 o 100) para Toad
function generarPuntajeToad() {
    return Math.random() >= 0.5 ? 100 : 0;
}

// Función para determinar el ganador al final de las 10 preguntas
function determinarGanador() {
    btnPreguntame.disabled = true;

    if (puntajeJugador > puntajeToad) {
        mensajeResultado.innerText = '¡Felicidades! Ganaste contra Toad.';
    } else if (puntajeToad > puntajeJugador) {
        mensajeResultado.innerText = '¡Perdiste! Toad tiene más monedas.';
    } else { // Caso de empate
        mensajeResultado.innerText = '¡Empate! Juguemos de nuevo.';
    }
}


// Función para obtener una nueva pregunta única
function obtenerPreguntaUnica() {
    let elegida, pregunta;

    do {
        if (Math.random() < 0.5) {
            elegida = Math.floor(Math.random() * preguntasVerdaderas.length);
            pregunta = preguntasVerdaderas[elegida];
            esVerdadera = true;
        } else {
            elegida = Math.floor(Math.random() * preguntasFalsas.length);
            pregunta = preguntasFalsas[elegida];
            esVerdadera = false;
        }
    } while (preguntasUsadas.includes(pregunta));

    preguntasUsadas.push(pregunta); // Agregar la pregunta usada al array
    return pregunta;
}

// Evento para mostrar una nueva pregunta
btnPreguntame.addEventListener('click', function () {
    if (cantPreguntas === 10) {
        determinarGanador();
        return;
    }

    if (preguntasUsadas.length === preguntasVerdaderas.length + preguntasFalsas.length) {
        mostrarPregunta.innerText = 'No hay más preguntas disponibles.';
        btnPreguntame.disabled = true;
        return;
    }

    preguntaActual = obtenerPreguntaUnica();
    mostrarPregunta.innerText = preguntaActual;
    mensajeResultado.innerText = '';
    mensajeToad.innerText = ''; // Limpiar mensaje de Toad

    // Deseleccionar todos los botones radio
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    cantPreguntas++;
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
            vidas--; // Descontar una vida por respuesta incorrecta
            vidasJugador.innerText = vidas;

            if (vidas === 0) {
                mensajeResultado.innerText = '¡Perdiste todas las vidas! Toad gana.';
                btnPreguntame.disabled = true;
                return;
            }
        }

        // Generar puntaje aleatorio para Toad
        let monedasToadGanadas = generarPuntajeToad();
        puntajeToad += monedasToadGanadas;

        // Mostrar si Toad respondió correctamente o no
        if (monedasToadGanadas === 100) {
            mensajeToad.innerText = 'Toad respondió correctamente. Monedas: ' + puntajeToad;
        } else {
            mensajeToad.innerText = 'Toad respondió incorrectamente. Monedas: ' + puntajeToad;
        }

        // Actualizar las monedas en la interfaz
        monedasJugador.innerText = puntajeJugador;
        monedasToad.innerText = puntajeToad;

        // Determinar si es la última pregunta
        if (cantPreguntas === 10) {
            determinarGanador();
        }
    };
}

// Evento para reiniciar el juego
btnReiniciar.addEventListener('click', function () {
    puntajeJugador = 0;
    puntajeToad = 0;
    cantPreguntas = 0;
    vidas = 3;
    preguntaActual = '';
    esVerdadera = false;
    preguntasUsadas = []; // Reiniciar las preguntas usadas

    mostrarPregunta.innerText = 'Presiona el botón "Pregúntame" para intentarlo de nuevo.';
    mensajeResultado.innerText = '';
    mensajeToad.innerText = '';
    btnPreguntame.disabled = false;

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    // Reiniciar las monedas y vidas en la interfaz
    monedasJugador.innerText = puntajeJugador;
    monedasToad.innerText = puntajeToad;
    vidasJugador.innerText = vidas;
});
