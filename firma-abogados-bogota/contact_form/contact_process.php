<?php

// Contact form processor for the Bogotá law firm site.
// It receives the posted fields, loads the email validator, and then
// checks that the submission has the minimum information needed to be useful.
// If the message passes validation, the script forwards it to the configured inbox.

include dirname(dirname(__FILE__)).'/mail.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{
include 'email_validation.php';

$name = stripslashes($_POST['name']);
$email = trim($_POST['email']);
$subject = stripslashes($_POST['subject']);
$message = stripslashes($_POST['message']);


$error = '';

// Check name

if(!$name)
{
$error .= 'Please enter your name.<br />';
}

// Check email

if(!$email)
{
$error .= 'Please enter an e-mail address.<br />';
}

if($email && !ValidateEmail($email))
{
$error .= 'Please enter a valid e-mail address.<br />';
}

// Check message (length)

if(!$message || strlen($message) < 15)
{
$error .= "Please enter your message. It should have at least 15 characters.<br />";
}


if(!$error)
{
$mail = mail(CONTACT_FORM, $subject, $message,
     "From: ".$name." <".$email.">\r\n"
    ."Reply-To: ".$email."\r\n"
    ."X-Mailer: PHP/" . phpversion());

// A plain success token keeps the front-end response easy to handle.
// Any error above is returned as readable HTML so the user can correct it.

if($mail)
{
echo 'OK';
}

}
else
{
echo '<div class="notification_error">'.$error.'</div>';
}

}
?>
<section class="dc-seo-enhancement dc-legal-eeat" style="padding:32px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;"><div style="max-width:1100px;margin:0 auto;padding:0 20px;"><h2>Orientación legal responsable</h2><p>La información de esta página es general y no reemplaza una consulta jurídica personalizada. Cada caso requiere revisar documentos, fechas, jurisdicción, pruebas disponibles y objetivos del cliente antes de definir una estrategia.</p><ul><li>Preparar contratos, comunicaciones, soportes y documentos relevantes ayuda a una primera evaluación más clara.</li><li>No se deben prometer resultados; el alcance depende de los hechos, la prueba y la normativa aplicable.</li><li>Una asesoría inicial permite ordenar riesgos, alternativas y próximos pasos.</li></ul></div></section>