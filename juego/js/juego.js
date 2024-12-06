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
    'Super Mario Bros fue lanzado en 1985.',
    'Bowser es el rey de los Koopas.',
    'Mario puede transformarse en abeja.',
    'En su principio, los diseños para el juego debían ser hechos a mano.',
    'El primer juego de Mario Bros se desarrolla en el Reino Champiñón.',
    'En Super Mario Bros 2, Mario sueña con una larga escalera que lo lleva a un mundo desconocido.',
    'En Super Mario World, Mario y Luigi van a la Isla de Yoshi para unas vacaciones.',
    'En Super Mario 3D World Mario puede usar la supercampana para obtener habilidades felinas.',
    'Toad, un residente del Reino Champiñón.',
    'La transformación de Mario Ardilla tiene una apariencia similar a Mario Mapache.',
    'Shigeru Miyamoto, el creador de Super Mario, basaba sus diseños en los recorridos que a él mismo le gustaría jugar.',
    'La primera aparición de Mario fue en el videojuego Donkey Kong en 1981.',
    'Mario tiene la capacidad de transformarse en mapache.',
    'El objetivo principal de Mario en Super Mario Bros. es rescatar a la Princesa Toadstool.',

];

let preguntasFalsas = [
    'La película de Mario Bros. sucede en Italia.',
    'Donkey Kong es el rey del Reino Champiñón.',
    'En la película, el actor Jack Black hace el doblaje de Luigi.',
    'Super Mario Bros. fue creado antes que Donkey Kong.',
    'Los Yoshis no varían de color porque son únicos en su especie.',
    'La película Super Mario Bros: la película se estrenó en cines en 2024.',
    'En la película, Luigi es el hermano mayor de Mario y es capturado por Bowser.',
    'La transformación de Mario Mapache le otorga la capacidad de volar gracias a sus alas.',
    'El diseño de los niveles de Super Mario Bros se realizaba exclusivamente en código, sin necesidad de dibujos en papel.',
    'La película Super Mario Bros se estrenó en 2010 y fue producida por Pixar.',
    'Bowser es el hermano menor de Mario, y su misión es ayudarlo a rescatar a la princesa Peach.',
    'En Super Mario Bros, Mario es un plomero mexicano que vive en el Reino Champiñón.',
    'En la película Super Mario Bros: La Película, Toad es el antagonista principal.',
    'La habilidad de Mario para transformarse en Mario de fuego le permite lanzar bolas de agua en lugar de bolas de fuego.',
    'La película Super Mario Bros fue lanzada en 2000 por la productora DreamWorks.',
];

let preguntaActual = '';
let esVerdadera = false;
let preguntasUsadas = []; // Array para almacenar preguntas ya utilizadas

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
            puntajeToad += 100; // Toad suma monedas si el jugador responde mal
            mensajeResultado.innerText = 'Incorrecto. Las monedas van a Toad.';
            mensajeToad.innerText = 'Toad obtiene 100 monedas.';
        }

        // Actualizar las monedas en la interfaz
        monedasJugador.innerText = puntajeJugador;
        monedasToad.innerText = puntajeToad;

        // Determinar si es la última pregunta
        if (cantPreguntas === 10) {
            // Descuento de vidas al finalizar la ronda
            if (puntajeToad > puntajeJugador) {
                vidas--; // Descuento de vida por perder la ronda
                mensajeResultado.innerText = '¡Toad tiene más monedas! Pierdes una vida.';
            } else if (puntajeToad === puntajeJugador) {
                vidas--; // Descuento de vida por empate
                mensajeResultado.innerText = '¡Empate! Pierdes una vida.';
            } else {
                mensajeResultado.innerText = '¡Ganaste la ronda! Toad no puede contigo.';
            }

            // Actualizar las vidas en la interfaz
            vidasJugador.innerText = vidas;

            // Verificar si el jugador se quedó sin vidas
            if (vidas === 0) {
                mensajeResultado.innerText += ' ¡Te quedaste sin vidas! Toad gana el juego.';
                btnPreguntame.disabled = true;
                return;
            }

            determinarGanador(); // Finaliza el juego y muestra el resultado
        }
    };
}


// Evento para reiniciar el juego
btnReiniciar.addEventListener('click', function () {
    cantPreguntas = 0;
    preguntaActual = '';
    esVerdadera = false;
    preguntasUsadas = []; // Reiniciar las preguntas usadas

    if (vidas === 0) {
        // Si el jugador se quedó sin vidas, reinicia todo
        puntajeJugador = 0;
        puntajeToad = 0;
        vidas = 3;
        mensajeResultado.innerText = '¡Juego reiniciado! Intenta de nuevo desde el principio.';
    } else {
        // Si aún tiene vidas, conserva las monedas
        mensajeResultado.innerText = '¡Ronda reiniciada! Tus monedas están acumuladas.';
    }

    // Reiniciar el texto de la pregunta y botones
    mostrarPregunta.innerText = 'Presiona el botón "Pregúntame" para continuar.';
    mensajeToad.innerText = '';
    btnPreguntame.disabled = false;

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    // Actualizar las vidas y monedas en la interfaz
    monedasJugador.innerText = puntajeJugador;
    monedasToad.innerText = puntajeToad;
    vidasJugador.innerText = vidas;
});
