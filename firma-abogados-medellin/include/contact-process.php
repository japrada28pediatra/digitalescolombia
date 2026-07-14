<?php

$recipient = 'youremail@domain.com';
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if (isset($_POST['email'])) {	
	if (preg_match('(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,})', $_POST['email'])) {
		$msg = 'E-mail address is valid';
	} else {
		$msg = 'Invalid email address';
	}

  $ip = getenv('REMOTE_ADDR');
  $host = gethostbyaddr($ip);	
  $mess = "Name: ".$name."\n";
  $mess .= "Email: ".$email."\n";
  $mess .= "Message: ".$message."\n\n";
  $mess .= "IP:".$ip." HOST: ".$host."\n";
  
  $headers = "From: <".$email.">\r\n"; 
  
   if(isset($_POST['url']) && $_POST['url'] == ''){

       $sent = mail($recipient, $subject, $mess, $headers); 
} 

} else {
	die('Invalid entry!');
}
?><section class="dc-seo-enhancement dc-legal-eeat" style="padding:32px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;"><div style="max-width:1100px;margin:0 auto;padding:0 20px;"><h2>Orientación legal responsable</h2><p>La información de esta página es general y no reemplaza una consulta jurídica personalizada. Cada caso requiere revisar documentos, fechas, jurisdicción, pruebas disponibles y objetivos del cliente antes de definir una estrategia.</p><ul><li>Preparar contratos, comunicaciones, soportes y documentos relevantes ayuda a una primera evaluación más clara.</li><li>No se deben prometer resultados; el alcance depende de los hechos, la prueba y la normativa aplicable.</li><li>Una asesoría inicial permite ordenar riesgos, alternativas y próximos pasos.</li></ul></div></section>