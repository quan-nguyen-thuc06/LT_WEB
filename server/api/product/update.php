<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: PUT');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/product.php');

	$db = new db();

	$connect = $db->connect();

	$product = new Product($connect);
	$data = json_decode(file_get_contents("php://input"));
	$product->id = $data->id;
	$product->product_name = $data->product_name;
	$product->price = $data->price;
	$product->images = $data->images;
	$product->type = $data->type;
	$product->brand = $data->brand;
	$product->capacity = $data->capacity;
	$product->color = $data->color;
    $product->promotion = $data->promotion;
	$product->same_product = $data->same_product;
	$product->screen = $data->screen;
	$product->Rom = $data->Rom;
	$product->Ram = $data->Ram;
	$product->battery = $data->battery;

	if($product->update()){
		echo json_encode('success');
	}
	else{
		echo json_encode('fail');
	}
?>