// Referencias a los elementos en el DOM
let mostrarPregunta = document.querySelector('#contenedorPregunta');
let btnPreguntame = document.querySelector('#btnPreguntame');
let btnReiniciar = document.querySelector('#btnReiniciar');
let mensajeResultado = document.querySelector('#mensajeResultado');
let radios = document.querySelectorAll('.respuesta');

let puntaje = 0; // Inicializar puntaje
let cantPreguntas = 0; // Contador de preguntas

// Preguntas divididas en verdaderas y falsas
let preguntasVerdaderas = [
    
];

let preguntasFalsas = [
    
];

let preguntaActual = ''; // Almacena el texto de la pregunta que se mostrará
let esVerdadera = false; // Determina si la pregunta es verdadera o falsa

// Evento para mostrar una nueva pregunta
btnPreguntame.addEventListener('click', function () {
    let aleatorio = Math.floor(Math.random() * 6) + 1; // 1, 2, 3, 4, 5, 6
    let elegida;

    if (aleatorio >= 1 && aleatorio <= 3) {
        elegida = Math.floor(Math.random() * preguntasVerdaderas.length);
        preguntaActual = preguntasVerdaderas[elegida];
        esVerdadera = true;
    } else {
        elegida = Math.floor(Math.random() * preguntasFalsas.length);
        preguntaActual = preguntasFalsas[elegida];
        esVerdadera = false;
    }

    mostrarPregunta.innerText = preguntaActual;
    mensajeResultado.innerText = ''; // Limpiar mensaje previo
    cantPreguntas++;

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
    

    if (cantPreguntas === 11) {
        btnPreguntame.disabled = true;
        mostrarPregunta.innerText = '¡Se acabaron las preguntas!';
    }
});

// Evento para validar la respuesta de los radio buttons
radios.forEach(radio => {
    radio.addEventListener('change', function () {
        if (preguntaActual === '') {
            mensajeResultado.innerText = 'Por favor, presiona "Pregúntame" primero.';
            return;
        }

        let valorSeleccionado = radio.value;

        if ((esVerdadera && valorSeleccionado === "true") || (!esVerdadera && valorSeleccionado === "false")) {
            puntaje++;
            mensajeResultado.innerText = '¡Correcto! Puntaje: ' + puntaje;
        } else {
            mensajeResultado.innerText = 'Incorrecto. Puntaje: ' + puntaje;
        }
    });
});

// Evento para reiniciar el juego
btnReiniciar.addEventListener('click', function () {
    puntaje = 0;
    cantPreguntas = 0;
    preguntaActual = '';
    esVerdadera = false;

    mostrarPregunta.innerText = 'Presiona el botón de preguntas para intentarlo de nuevo';
    mensajeResultado.innerText = '';
    btnPreguntame.disabled = false;

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
});