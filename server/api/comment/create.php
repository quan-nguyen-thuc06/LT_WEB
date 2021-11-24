<?php

	// {
	// 	"id":3,
	// 	"username":"admin",
	// 	"id_product": 1,
	// 	"rating": 4,
	// 	"content":"san pham qua tot"
	// }

	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/comment.php');

	$db = new db();

	$connect = $db->connect();
	$comment = new Comment($connect);
	$data = json_decode(file_get_contents("php://input"));
	$comment->id = $data->id;
	$comment->username = $data->username;
	$comment->id_product = $data->id_product;
	$comment->rating = $data->rating;
	$comment->content = $data->content;
	if($comment->create()){
		echo json_encode('success');
	}
	else{
		echo json_encode('fail');
	}
?>