<?
    // Dirección de mail a la que se envía el mensaje
	// Se debe cambiar por la dirección a la que queremos que llegue el mail	
	$sendto  = 'nicoleolivera08@hotmail.com'; 
	
	// Asunto del mensaje
	$subject = "Formulario de contacto"; 
	
	// Contenido del mensaje
	// Arma el cuerpo del mail en la variable corps con los datos del formulario
	// El caracter \n indica un salto de línea
	$corps="Nombre: ".$_REQUEST['nombre']."\n".
	"Email: ".$_REQUEST['email']."\n".
	"Mensaje: ".$_REQUEST['mensaje']."\n"."\n";
	
	// Datos de quien envía el mensaje
	// Toma la información de los datos completados en el formulario
	// Incluye Reply-To para poder responder al mismo mensaje recibido
	$From = "From: ".$_REQUEST['nombre']." <".$_REQUEST['email'].">\n";
	$From .= "Reply-To: ".$_REQUEST['nombre']." <".$_REQUEST['email'].">\n";

	// Comando para enviar el mail 
	@mail($sendto,$subject,$corps,$From);

	// Comando para redirigir al usuario a otra página
	// En este ejemplo busca una página gracias.html (hay que crearla)
	header("Location: gracias.html");

?>
