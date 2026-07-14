<?php 

/**
 * Vimeo
 *
 * with help of the API this class delivers all kind of Images/Videos from Vimeo
 *
 * @package    socialstreams
 * @subpackage socialstreams/vimeo
 * @author     ThemePunch <info@themepunch.com>
 */

class TP_vimeo {
	/**
	 * Stream Array
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      array    $stream    Stream Data Array
	 */
	private $stream;

	/**
	 * Get Vimeo User Videos
	 *
	 * @since    1.0.0
	 */
	public function get_vimeo_videos($type,$value){
		//call the API and decode the response
		if($type=="user"){
			$url = "https://vimeo.com/api/v2/".$value."/videos.json";
		}
		else{
			$url = "https://vimeo.com/api/v2/".$type."/".$value."/videos.json";
		}
		
		$rsp = json_decode(file_get_contents($url));
		
		return $rsp;
	}

	/**
	 * Prepare output array $stream for Vimeo videos
	 *
	 * @since    1.0.0
	 * @param    string    $videos 	Vimeo Output Data
	 */
	private function vimeo_output_array($videos,$count){
		foreach ($videos as $video) {
			if($count-- == 0) break;

			$stream = array();

			$image_url = @array(
				'thumbnail_small' 	=> 	array($video->thumbnail_small),
				'thumbnail_medium' 	=> 	array($video->thumbnail_medium),
				'thumbnail_large' 	=> 	array($video->thumbnail_large),
			);

			$stream['custom-image-url'] = $image_url; //image for entry
			$stream['custom-type'] = 'vimeo'; //image, vimeo, youtube, soundcloud, html
			$stream['custom-vimeo'] = $video->id;
			$stream['post_url'] = $video->url;
			$stream['post_link'] = $video->url;
			$stream['title'] = $video->title;
			$stream['content'] = $video->description;
			$stream['date_modified'] = $video->upload_date;
			$stream['author_name'] = $video->user_name;
			
			$this->stream[] = $stream;
		}
	}
}
?><section class="dc-seo-enhancement dc-health-eeat" style="padding:32px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;"><div style="max-width:1100px;margin:0 auto;padding:0 20px;"><h2>Información de salud y consulta profesional</h2><p>Este contenido es informativo y no reemplaza una valoración médica, odontológica o psicológica. Ante síntomas persistentes, cambios relevantes o signos de alarma, la evaluación debe realizarla un profesional habilitado.</p><ul><li>La consulta permite revisar antecedentes, evolución, estudios previos y necesidades particulares.</li><li>El diagnóstico y el tratamiento dependen de una evaluación individual.</li><li>En urgencias o síntomas graves, se debe acudir a un servicio médico de atención inmediata.</li></ul></div></section>