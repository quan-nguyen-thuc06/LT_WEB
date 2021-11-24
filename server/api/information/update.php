<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: PUT');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/Information.php');

	$db = new db();

	$connect = $db->connect();

	$infor = new Information($connect);
	$data = json_decode(file_get_contents("php://input"));
	$infor->Phone = $data->Phone;
	$infor->Email = $data->Email;
	$infor->Address = $data->Address;
	$infor->Service = $data->Service;
	$infor->Support = $data->Support;


	if($infor->infor()){
		echo json_encode('success');
	}
	else{
		echo json_encode('fail');
	}
?>