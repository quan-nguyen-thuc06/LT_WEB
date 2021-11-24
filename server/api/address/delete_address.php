<?php

	// {
	// 	"id": 1,
	// 	"username": "admin"
	// }

	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: DELETE');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/tb_address.php');

	$db = new db();

	$connect = $db->connect();

	$tb_address = new Address($connect);
	$data = json_decode(file_get_contents("php://input"));
	$tb_address->id= $data->id;
	$tb_address->username= $data->username;  
	if($tb_address->delete()){
		echo json_encode('success');
	}
	else{
		echo json_encode('fail');
	}
?>