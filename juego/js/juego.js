// Variables con números para comparar
let numeroGanador = 1985;
let numeroIngresado;

// Contenedor
let contenedorOculto = document.querySelector('#contenedorOculto');

// Botones
let enviarRespuesta = document.querySelector('#enviar');
let reiniciar = document.querySelector('#reiniciar');
let continuar = document.querySelector('#continuar');

// Mensajes
let mensajeBowser = document.querySelector('#mensajeBowser');
let mensajeResultado = document.querySelector('#mensajeResultado');

// Contadores y texto de vidas e intentos
let vidas = 5;
let vidasTexto = document.querySelector('#vidas');
let intentos = 3;
let intentosTexto = document.querySelector('#intentos');


// Validación del número ingresado
enviarRespuesta.addEventListener('click', function(e) {
    e.preventDefault();
    numeroIngresado = Number(document.querySelector('#respuesta').value);

    if (isNaN(numeroIngresado)) {
        alert('El casillero no puede estar vacío o no es un número');
    } else {
        console.log('Número ingresado:', numeroIngresado);
        pistas();
        document.querySelector('#respuesta').value = '';
    }
});

// Función para orientar la respuesta del usuario con pistas
function pistas() {

    //En caso de que acierte el número - gana
    if (numeroIngresado === numeroGanador) {
        mensajeBowser.innerText = '¡Correcto! Es el año en que nací... bueno, y también cuando salió Super Mario Bros. ¿Cómo lo adivinaste? 🤔';
        mensajeResultado.innerText = '¡Ganaste!';
        enviarRespuesta.disabled = true;
        continuar.style.display = 'block';
    } else {
        vidas--;
        vidasTexto.innerText = `❤️ Vidas: ${vidas}`;

        //En caso de que se quede sin vidas - pierde un intento
        if (vidas === 0) {
            mensajeBowser.innerText = '¡Te quedaste sin vidas! 😝 Ahora estoy dudando de si realmente recorriste la página. Pero te daré una última pista: aprende un poco de historia, hay un año clave para la franquicia.';
            mensajeResultado.innerText = 'Perdiste. Inténtalo de nuevo.';
            enviarRespuesta.disabled = true;
            reiniciar.style.display = 'block';
            return;
        }

        // Dar pistas según el número ingresado
        if (numeroIngresado >= 1990) {
            mensajeBowser.innerText = 'Estás yendo demasiado lejos, intenta bajar un poco. Creo recordar que fue antes de los 90 🤔';
        } else if (numeroIngresado == 1989) {
            mensajeBowser.innerText = 'Esta no es la fecha, es lo único que quiero decir 😒';
        } else if (numeroIngresado == 1988) {
            mensajeBowser.innerText = 'Estás lamentablemente cerca, pero te pasaste.';
        } else if (numeroIngresado == 1987) {
            mensajeBowser.innerText = 'No me gusta que estés tan cerca, pero debo decirte que estás cerca. Baja un poco.';
        } else if (numeroIngresado == 1986) {
            mensajeBowser.innerText = '¡Frío! ¡Caliente! ¿Cómo era? no importa, estás cerca 😒';
        } else if (numeroIngresado == 1984) {
            mensajeBowser.innerText = 'Te encuentras realmente cerca, ¿por qué no mejor abandonas el juego? 🙂‍↕️';
        } else if (numeroIngresado == 1983) {
            mensajeBowser.innerText = 'Creo que te estás confundiendo de juego... Sí, Donkey Kong se lanzó este año, pero no estamos hablando de él.';
        } else if (numeroIngresado == 1982) {
            mensajeBowser.innerText = 'Casi, pero yo intentaría un par de números más arriba.';
        } else if (numeroIngresado == 1981) {
            mensajeBowser.innerText = 'Estás cerca, pero no.';
        } else if (numeroIngresado >= 1970 && numeroIngresado < 1980) {
            mensajeBowser.innerText = 'Sí... bueno, en los 70 se crearon las primeras consolas de videojuegos 👾, pero yo aún no existía.';
        } else if (numeroIngresado >= 1950 && numeroIngresado < 1970) {
            mensajeBowser.innerText = 'Bueno, quizás durante los 50 y los 60 podamos hablar de computadoras, pero estoy intentando hablar de mí y no hay Bowser entre estas fechas.';
        } else if (numeroIngresado >= 1900 && numeroIngresado < 1940) {
            mensajeBowser.innerText = '¿Qué edad crees que tengo? antes de los 40 ni existían los píxeles 😒';
        } else {
            mensajeBowser.innerText = 'No creo que esa fecha tenga sentido. Recuerda que estamos hablando de mí... bueno, y también de Mario. Yo al menos intentaría con alguna fecha dentro del 1900. 🙄😒';
        }
    }
}

// Reiniciar el juego
reiniciar.addEventListener('click', function() {
    if (intentos > 0) {
        intentos--;
        vidas = 5;
        vidasTexto.innerText = `❤️ Vidas: ${vidas}`;
        intentosTexto.innerText = `💀 Intentos: ${intentos}`;
        mensajeBowser.innerText = 'Con que vas a jugar de nuevo ¿eh? Yo sabía que no podrías. 🤭';
        mensajeResultado.innerText = '';
        enviarRespuesta.disabled = false;
        document.querySelector('#respuesta').value = '';
        reiniciar.style.display = 'none';
    }

    // Fin del juego sin ganar
    if (intentos === 0) {
        mensajeBowser.innerText = 'Se acabaron tus intentos. No puedes jugar más. 🤭';
        reiniciar.disabled = true;
        enviarRespuesta.disabled = true;
    }
});

// Fin del juego ganando - accede a la sección del sitio oculta
continuar.addEventListener('click', function(e) {
    e.preventDefault();

    contenedorOculto.style.display = "block";
});
