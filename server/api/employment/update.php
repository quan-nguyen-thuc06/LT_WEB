<?php

	// {
		// "area":"tuyen nhan vien sale",
		// "deadline": "2021-11-30",
		// "address": "tp HCM"
	// }

	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: PUT');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/employment.php');

	$db = new db();

	$connect = $db->connect();
	$employment = new Employment($connect);
	$data = json_decode(file_get_contents("php://input"));
	$employment->id = $data->id;
	$employment->area = $data->area;
	$employment->deadline = $data->deadline;
	$employment->address = $data->address;
	if($employment->update()){
		echo json_encode('success');
	}
	else{
		echo json_encode('fail');
	}
?>