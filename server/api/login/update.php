<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: PUT');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/client.php');

	$db = new db();

	$connect = $db->connect();

	$client = new Client($connect);
	$data = json_decode(file_get_contents("php://input"));
	$client->username = $data->username;
	$client->password = $data->password;
	$client->fullname = $data->fullname;
	$client->phone = $data->phone;
	$client->email = $data->email;
	$client->b_day = $data->b_day;
	$client->image_url = $data->image_url;
	$client->role = $data->role;
	if($client->update()){
		echo json_encode('success');
	}
	else{
		echo json_encode('fail');
	}
?>