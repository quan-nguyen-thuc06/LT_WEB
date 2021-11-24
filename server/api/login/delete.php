<?php
	// delele client and tb_address
	// {
	// 	"username": "admin2"
	// }

	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: DELETE');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/comment.php');

	$db = new db();

	$connect = $db->connect();

	$client = new Client($connect);
	$data = json_decode(file_get_contents("php://input"));
	$client->username= $data->username;  
	if($client->delete()){
		echo json_encode('success');
	}
	else{
		echo json_encode('fail');
	}
?>