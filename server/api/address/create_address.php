<?php

	// {
	// 	"id": 1,
	// 	"username": "admin",
	// 	"address": "268 Lý Thường Kiệt,Phường 14,Quận 10,Thành phố Hồ Chí Minh"
	//   }
	
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/tb_address.php');

	$db = new db();

	$connect = $db->connect();
	
	$tb_address = new Address($connect);
	$data = json_decode(file_get_contents("php://input"));
	$tb_address->username = $data->username;
	$tb_address->address = $data->address;
	$tb_address->id = $data->id;
	if($tb_address->create()){
		echo json_encode('success');
	}
	else{
		echo json_encode('fail');
	}
?>