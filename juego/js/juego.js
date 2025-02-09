let numeroGanador = 1985;
let numeroIngresado;

// botones
let enviarRespuesta = document.querySelector('#enviar');
let reiniciar;

// mensajes
let mensajeBowser = document.querySelector('#mensajeBowser');
let mensajeResultado = document.querySelector('#mensajeResultado'); // Elemento para mostrar si ganó o perdió

// contador vidas/intentos
let vidas = 5;
let vidasTexto = document.querySelector('#vidas'); 


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

function pistas() {
    if (numeroIngresado === numeroGanador) {
        mensajeBowser.innerText = '¡Correcto, es el año en el que nací! ... bueno, también el año en el que se lanzó Super Mario Bros. ¿Cómo lo supiste?';
        mensajeResultado.innerText = '¡Ganaste!';
        enviarRespuesta.disabled = true;
    } else {
        vidas--; // Restar una vida
        vidasTexto.innerText = vidas; // Actualizar el contador en pantalla

        if (vidas === 0) {
            mensajeBowser.innerText = '¡Oh no! Te quedaste sin intentos.';
            mensajeResultado.innerText = 'Perdiste. Inténtalo de nuevo.';
            enviarRespuesta.disabled = true;
            return;
        }

        // Dar pistas según el número ingresado
        if (numeroIngresado >= 1990) {
            mensajeBowser.innerText = 'Estás yendo demasiado lejos, intenta bajar un poco.';
        } else if (numeroIngresado >= 1986) {
            mensajeBowser.innerText = 'Te pasaste por poco.';
        } else if (numeroIngresado >= 1981) {
            mensajeBowser.innerText = 'Estás cerca, pero no.';
        } else {
            mensajeBowser.innerText = 'Demasiado lejos, intenta subir.';
        }
    }
}

