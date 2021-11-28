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
	$same_product = new Product($connect);
	$product ->id = isset($_GET['id'])? $_GET['id']: die();
	$product -> show();
	$product_item= array(
		"id" => $product->id,
		"product_name"=>$product->product_name,
		"price"=>$product->price,
		"images"=>$product->images,
		"type"=>$product->type,
		"brand"=>$product->brand,
		"capacity"=>$product->capacity,
		"color"=>$product->color,
		"promotion"=>$product->promotion,
		"Rom"=>$product->Rom,
		"Ram"=>$product->Ram,
		"screen"=>$product->screen,
		"battery"=>$product->battery
	);
	$read = $same_product -> select($product->product_name);
	$num = $read->rowCount();
	$select_arr = [];
	if($num>0) {
        while($row = $select->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $select_item= array(
                "id" => $id,
                "product_name" => $product_name,
                "price" => $price,
                "images" => $images,
                "type" => $type,
                "brand" => $brand,
                "capacity" => $capacity,
                "color" => $color,
                "promotion" => $promotion,
                "same_product" => $same_product,
                "screen" => $screen,
                "Rom" => $Rom,
                "Ram" => $Ram,
                "battery" => $battery
            );
            array_push($select_arr,$select_item);
        }
    }
	$same = array("same_product"=>$select_arr);
	array_push($product_item,$same);
	echo json_encode( $product_item );

?>