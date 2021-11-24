<?php
	//show all comments of product
	// http://localhost/Official/LT_WEB/server/api/comment/read.php?id_product=1
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: GET');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	
	include_once('../../config/db.php');
	include_once('../../models/comment.php');

	$db = new db();

	$connect = $db->connect();

	$comment = new Comment($connect);
	$comment->id_product =isset($_GET['id_product'])? $_GET['id_product']: die();
	$read = $comment -> read();
	$num = $read->rowCount();
	if($num>0){
		$comment_array=[];
		while($row=$read->fetch(PDO::FETCH_ASSOC)){
			extract($row);

			$comment_item= array(
				"id" => $id,
				"username"=>$username,
				"id_product"=>$id_product,
				"rating"=>$rating,
				"content"=>$content
			);

			array_push($comment_array,$comment_item);
		}
		echo json_encode($comment_array);
	}



?>