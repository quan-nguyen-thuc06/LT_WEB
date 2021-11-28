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
	
	$read = $same_product -> select($product->brand);
	$num = $read->rowCount();
	$select_arr = [];
	if($num>0) {
        while($row = $read->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $select_item= array(
                "id" => $id,
                "name" => $product_name,
                "price" => $price,
                "image" => (explode(" + ",$product->images))[1]
                // "type" => $type,
                // "brand" => $brand,
                // "capacity" => $capacity,
                // "color" => $color,
                // "promotion" => explode(" + ",$promotion),
                // "same_product" => $same_product,
                // "screen" => $screen,
                // "Rom" => $Rom,
                // "Ram" => $Ram,
                // "battery" => $battery
            );
            array_push($select_arr,$select_item);
        }
    }
	// $same = array("same_product"=>$select_arr);
	$product_item= array(
		"id" => $product->id,
		"product_name"=>$product->product_name,
		"price"=>$product->price,
		"images"=>explode(" + ",$product->images),
		"type"=>$product->type,
		"brand"=>$product->brand,
		"capacity"=>explode(" + ",$product->capacity),
		"color"=>explode(" + ",$product->color),
		"promotion"=>explode(" + ",$product->promotion),
		"Rom"=>$product->Rom,
		"Ram"=>$product->Ram,
		"screen"=>$product->screen,
		"battery"=>$product->battery,
		"same_product"=>$select_arr
	);
	// array_push($product_item,$same);
	echo json_encode( $product_item );

?>