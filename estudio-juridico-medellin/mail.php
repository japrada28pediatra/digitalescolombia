<?php

// Define some constants
define( "RECIPIENT_NAME", "John Doe" );
define( "RECIPIENT_EMAIL", "Yourmail@gmail.com" );

// Read the form values
$success = false;
$userName = isset( $_POST['name'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['name'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$senderPhone = isset( $_POST['phone'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['phone'] ) : "";
$senderDate = isset( $_POST['date'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['date'] ) : "";
$userSubject = isset( $_POST['subject'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['subject'] ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";

// If all values exist, send the email
if ( $userName && $senderEmail && $userSubject && $message) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $userName . "";
  $msgBody = " Email: ". $senderEmail . " Phone: ". $senderPhone . " Date: ". $senderDate . " Subject: ". $userSubject . " Message: " . $message . "";
  $success = mail( $recipient, $headers, $msgBody );

  //Set Location After Successsfull Submission
  header('Location: contact.html?message=Successfull');
}

else{
	//Set Location After Unsuccesssfull Submission
  	header('Location: contact.html?message=Failed');	
}

?><section class="dc-seo-enhancement dc-legal-eeat" style="padding:32px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;"><div style="max-width:1100px;margin:0 auto;padding:0 20px;"><h2>Orientación legal responsable</h2><p>La información de esta página es general y no reemplaza una consulta jurídica personalizada. Cada caso requiere revisar documentos, fechas, jurisdicción, pruebas disponibles y objetivos del cliente antes de definir una estrategia.</p><ul><li>Preparar contratos, comunicaciones, soportes y documentos relevantes ayuda a una primera evaluación más clara.</li><li>No se deben prometer resultados; el alcance depende de los hechos, la prueba y la normativa aplicable.</li><li>Una asesoría inicial permite ordenar riesgos, alternativas y próximos pasos.</li></ul></div></section>