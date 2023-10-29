php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "tucorreo@ejemplo.com";
    $asunto = "Nuevo mensaje de contacto de $nombre";

    $mensaje_email = "Nombre: $nombre\n";
    $mensaje_email = "Correo Electrónico: $email\n";
    $mensaje_email = "Mensaje:\n$mensaje";

    mail($destinatario, $asunto, $mensaje_email);

    header("Location: gracias.html");
} else {
    header("Location: error.html");
}

