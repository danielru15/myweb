<?php 
$destinatario = 'esqui9710@gmail.com'; // correo al que llegan los mensajes
$nombre = $_POST['Nombre'];
$correo = $_POST["Correo"];
$mensaje = $_POST["Mensaje"];
$Header = ' Enviado desde danieldev.dev';
$contenido = "Nombre: " .$nombre  . "\correo" .$correo . "\mensaje" . $mensaje;

mail ($destinatario,  $Header, $contenido,); // Esto envia el email.
echo " <script>alert('tu mensaje ha sido enviado')</script>";
echo  "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
?>