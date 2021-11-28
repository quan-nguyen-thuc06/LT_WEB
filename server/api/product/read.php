<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: GET');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	
	include_once('../../config/db.php');
	include_once('../../models/product.php');

	$db = new db();

	$connect = $db->connect();

	$product = new Product($connect);
	$read = $product -> read();
	$num = $read->rowCount();
	if($num>0){
		$product_array=[];
		while($row=$read->fetch(PDO::FETCH_ASSOC)){
			extract($row);

			$product_item= array(
				"id" => $id,
				"product_name"=>$product_name,
				"price"=>$price,
				"images"=>$images,
				"type"=>$type,
				"brand"=>$brand,
				"capacity"=>$capacity,
				"color"=>$color,
				"promotion"=>$promotion,
				"Rom"=>$Rom,
				"Ram"=>$Ram,
				"screen"=>$screen,
				"battery"=>$battery
			);

			array_push($product_array,$product_item);
		}
		echo json_encode($product_array);
	}



?>