let numeroGanador = 1985;
let numeroIngresado;

// botones
let enviarRespuesta = document.querySelector('#enviar');
let reiniciar = document.querySelector('#reiniciar'); // Botón de reinicio

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
        document.querySelector('#respuesta').value = ''; // Limpiar el campo de respuesta después de enviar
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
            mensajeBowser.innerText = '¡Te quedaste sin intentos! 😝 Ahora estoy dudando de si realmente recorriste la página, pero está bien... te doy una última pista: si sigues navegando no muy lejos de aquí, encontrarás un año muy importante para la franquicia. Intenta aprender algo de historia.';
            mensajeResultado.innerText = 'Perdiste. Inténtalo de nuevo.';
            enviarRespuesta.disabled = true;

            // Mostrar el botón de reinicio
            reiniciar.style.display = 'block';
            return;
        }

        // Dar pistas según el número ingresado
        if (numeroIngresado >= 1990) {
            mensajeBowser.innerText = 'Estás yendo demasiado lejos, intenta bajar un poco. Creo recordar que fue antes de los 90s 🤔';
        } else if (numeroIngresado == 1989) {
            mensajeBowser.innerText = 'Esta fecha no es, es lo único que quiero decir 😒';
        } else if (numeroIngresado == 1988) {
            mensajeBowser.innerText = 'Estás lamentablemente cerca, pero te pasaste.';
        } else if (numeroIngresado == 1987) {
            mensajeBowser.innerText = 'No me gusta que estés tan cerca, pero debo decirte que estás cerca. Baja un poco.';
        } else if (numeroIngresado == 1986) {
            mensajeBowser.innerText = '¡Frío! ¡Caliente! ¿Cómo era? no importa, estás cerca 😒';
        } else if (numeroIngresado == 1984) {
            mensajeBowser.innerText = 'Te encuentras realmente cerca, ¿por qué no mejor abandonas el juego? 🙂‍↕️';
        } else if (numeroIngresado == 1983) {
            mensajeBowser.innerText = 'Creo que te estás confundiendo de juego... Sí, Donkey Kong se lanzó en este año, pero no estamos hablando de él.';
        } else if (numeroIngresado == 1982) {
            mensajeBowser.innerText = 'Casi, pero yo intentaría un par de números más arriba.';
        } else if (numeroIngresado == 1981) {
            mensajeBowser.innerText = 'Estás cerca, pero no.';
        } else if (numeroIngresado >= 1970 && numeroIngresado < 1980) {
            mensajeBowser.innerText = 'Sí... bueno, en los 70s se crearon las primeras consolas de videojuegos 👾 pero aún yo no existía.';
        } else if (numeroIngresado >= 1950 && numeroIngresado < 1970) {
            mensajeBowser.innerText = 'Bueno, quizás durante los 50s y los 60s podamos hablar de computadoras, pero estoy intentando hablar de mí y no hay Bowser entre estas fechas.';
        } else if (numeroIngresado >= 1900 && numeroIngresado < 1940) {
            mensajeBowser.innerText = '¿Qué edad creés que tengo? antes de los 40s ni existían los píxeles 😒';
        } else {
            mensajeBowser.innerText = 'No creo que esa fecha tenga sentido. ¿Recuerdas que estamos hablando de mí? Bueno, y también de Mario. Yo al menos intentaría con alguna fecha dentro del siglo XX. 🙄😒';
        }
    }
}

// Reiniciar el juego
reiniciar.addEventListener('click', function() {
    vidas = 5;
    vidasTexto.innerText = vidas;
    mensajeBowser.innerText = 'Con que vas a jugar de nuevo ¿eh? Yo sabía que no podrías a la primera 🤭';
    mensajeResultado.innerText = '';
    enviarRespuesta.disabled = false;
    document.querySelector('#respuesta').value = ''; // Limpiar el campo de respuesta

    // Ocultar el botón de reinicio
    reiniciar.style.display = 'none';
});
