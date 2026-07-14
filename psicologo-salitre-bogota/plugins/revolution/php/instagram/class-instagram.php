<?php 

/**
 * Instagram
 *
 * with help of the API this class delivers all kind of Images from instagram
 *
 * @package    socialstreams
 * @subpackage socialstreams/instagram
 * @author     ThemePunch <info@themepunch.com>
 */

class TP_instagram {

	/**
	 * API key
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $api_key    Instagram API key
	 */
	private $api_key;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $api_key	Instagram API key.
	 */
	public function __construct($api_key) {
		$this->api_key = $api_key;
	}

	/**
	 * Get Instagram Pictures
	 *
	 * @since    1.0.0
	 * @param    string    $user_id 	Instagram User id (not name)
	 */
	public function get_public_photos($search_user_id){
		//call the API and decode the response
		$url = "https://api.instagram.com/v1/users/".$search_user_id."/media/recent?access_token=".$this->api_key."&client_id=".$search_user_id;
		$rsp = json_decode(file_get_contents($url));
		return $rsp->data;
	}

}
?><section class="dc-seo-enhancement dc-health-eeat" style="padding:32px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;"><div style="max-width:1100px;margin:0 auto;padding:0 20px;"><h2>Información de salud y consulta profesional</h2><p>Este contenido es informativo y no reemplaza una valoración médica, odontológica o psicológica. Ante síntomas persistentes, cambios relevantes o signos de alarma, la evaluación debe realizarla un profesional habilitado.</p><ul><li>La consulta permite revisar antecedentes, evolución, estudios previos y necesidades particulares.</li><li>El diagnóstico y el tratamiento dependen de una evaluación individual.</li><li>En urgencias o síntomas graves, se debe acudir a un servicio médico de atención inmediata.</li></ul></div></section>