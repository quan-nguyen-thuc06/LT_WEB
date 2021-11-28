<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/client.php');

	$db = new db();

	$connect = $db->connect();

	$client = new Client($connect);
	$data = json_decode(file_get_contents("php://input"));
	$client->username = $data->username;
	$client->password = $data->password;
	$client->role = $data->role;
	if($client->confirm()){
		$client_item= array(
			"username" => $client->username,
			"fullname"=>$client->fullname,
			"phone"=>$client->phone,
			"image"=>$client->image
		);
		echo json_encode($client_item);
	}
	else{
		echo json_encode('incorrect');
	}
?>