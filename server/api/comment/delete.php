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

	$comment = new Comment($connect);
	$data = json_decode(file_get_contents("php://input"));
	$comment->username= $data->username;  
	$comment->id= $data->id; 
	$comment->id_product= $data->id_product; 
	if($comment->delete()){
		echo json_encode('success');
	}
	else{
		echo json_encode('fail');
	}
?>