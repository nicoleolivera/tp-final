// numeros
let numeroGanador = 1985;
let numeroIngresado;

// botones
let enviarRespuesta = document.querySelector('#enviar');
let reiniciar;

// mensajes // aun no sé si msjs inner.text o img
let mensajeBowser = document.querySelector('#mensajeBowser');
let mensajeResultado; // ganador o perdedor

// contador vidas/intentos
let vidas = 5;

// Validación del número ingresado
enviarRespuesta.addEventListener('click', function(e) {
    e.preventDefault();
    numeroIngresado = parseInt(document.querySelector('#respuesta').value); // Convertir a número

    if (isNaN(numeroIngresado)) {
        alert('El casillero no puede estar vacío o no es un número');
    } else {
        console.log('Número ingresado:', numeroIngresado);
        pistas();
    }
});

// Función de pistas
function pistas() {
    if (numeroIngresado === numeroGanador) {
        mensajeBowser.innerText = '¡Correcto, es el año en el que nací! ... bueno, también el año en el que se lanzó Super Mario Bros. ¿Cómo lo supiste?';
    } else if (numeroIngresado >= 1990) {
        mensajeBowser.innerText = 'Estás yendo demasiado lejos, intenta bajar un poco.';
    } else if (numeroIngresado >= 1986) {
        mensajeBowser.innerText = 'Te pasaste por poco.';
    } else if (numeroIngresado >= 1981) {
        mensajeBowser.innerText = 'Estás cerca, pero no.';
    } else {
        mensajeBowser.innerText = 'Demasiado lejos, intenta subir.';
    }
}