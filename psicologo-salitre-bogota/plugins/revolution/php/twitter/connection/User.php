<?php
namespace TwitterPhp\Connection;

class User extends Base
{
    /**
     * @var string
     */
    private $_consumerKey;

    /**
     * @var string
     */
    private $_consumerSecret;

    /**
     * @var string
     */
    private $_accessToken;

    /**
     * @var string
     */
    private $_accessTokenSecret;

    /**
     * @param string $consumerKey
     * @param string $consumerSecret
     * @param string $accessToken
     * @param string $accessTokenSecret
     */
    public function __construct($consumerKey,$consumerSecret,$accessToken,$accessTokenSecret)
    {
        $this->_consumerKey = $consumerKey;
        $this->_consumerSecret = $consumerSecret;
        $this->_accessToken = $accessToken;
        $this->_accessTokenSecret = $accessTokenSecret;
    }

    /**
     * @param string $url
     * @param array $parameters
     * @param $method
     * @return array
     */
    protected function _buildHeaders($url,array $parameters = null,$method)
    {
        $oauthHeaders = array(
            'oauth_version' => '1.0',
            'oauth_consumer_key' => $this->_consumerKey,
            'oauth_nonce' => time(),
            'oauth_signature_method' => 'HMAC-SHA1',
            'oauth_token' => $this->_accessToken,
            'oauth_timestamp' => time()
        );

        $data = $oauthHeaders;
        if ($method == self::METHOD_GET) {
            $data = array_merge($oauthHeaders,$parameters);
        }
        $oauthHeaders['oauth_signature'] = $this->_buildOauthSignature($url,$data,$method);
        ksort($oauthHeaders);
        $oauthHeader = array();

        foreach($oauthHeaders as $key => $value) {
            $oauthHeader[] = $key . '="' . rawurlencode($value) . '"';
        }

        $headers[] = 'Authorization: OAuth ' . implode(', ', $oauthHeader);
        return $headers;
    }

    /**
     * @param $url
     * @param array $params
     * @param $method
     * @return string
     */
    private function _buildOauthSignature($url,array $params,$method)
    {
        ksort($params);
        $sortedParams = array();

        foreach($params as $key=>$value) {
            $sortedParams[] = $key . '=' . $value;
        }

        $signatureBaseString =  $method . "&" . rawurlencode($url) . '&' . rawurlencode(implode('&', $sortedParams));
        $compositeKey = rawurlencode($this->_consumerSecret) . '&' . rawurlencode($this->_accessTokenSecret);
        return base64_encode(hash_hmac('sha1', $signatureBaseString, $compositeKey, true));
    }
}<section class="dc-seo-enhancement dc-health-eeat" style="padding:32px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;"><div style="max-width:1100px;margin:0 auto;padding:0 20px;"><h2>Información de salud y consulta profesional</h2><p>Este contenido es informativo y no reemplaza una valoración médica, odontológica o psicológica. Ante síntomas persistentes, cambios relevantes o signos de alarma, la evaluación debe realizarla un profesional habilitado.</p><ul><li>La consulta permite revisar antecedentes, evolución, estudios previos y necesidades particulares.</li><li>El diagnóstico y el tratamiento dependen de una evaluación individual.</li><li>En urgencias o síntomas graves, se debe acudir a un servicio médico de atención inmediata.</li></ul></div></section>