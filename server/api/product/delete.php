<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: DELETE');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/product.php');

	$db = new db();

	$connect = $db->connect();

	$product = new Product($connect);
	$data = json_decode(file_get_contents("php://input"));
	$product->id = $data->id;
    
	if($product->delete()){
		echo json_encode('success');
	}
	else{
		echo json_encode('fail');
	}

?>