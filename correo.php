<?php 


if(isset($_POST['enviar'])){
    if(!empty($_POST['Nombre'])&& !empty($_POST['Correo']) && !empty($_POST['Mensaje'] )){
        $nombre = $_POST['Nombre'];
        $correo = $_POST["Correo"];
        $mensaje = $_POST["Mensaje"];
        $destinatario = 'esqui9710@gmail.com';
        $header = "Enviado desde danieldev.dev";
        $email=mail ($destinatario,$correo ,$mensaje,$header);
    
    }
    if($email){
        echo "<script> alert('mensaje enviado exitosamente')</script>";
        echo  "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
    }
    else {
        echo "<script> alert('Porfavor llena todos los campos en blanco')</script>";
        echo  "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
    }

}
?>
