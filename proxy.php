<?php
if(isset($_SERVER["HTTP_ORIGIN"]) === true) {
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Content-Type');
	header('Content-type: application/xml');
} // end if

$apiurl = $_GET['url'];
unset($_GET['url']); 
$apiparams = http_build_query($_GET);
echo file_get_contents($apiurl . "?" . $apiparams);
?>