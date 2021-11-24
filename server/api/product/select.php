<?php
	header('Access-Control-Allow-Origin:*');
	header('Content-type: application/json');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
	include_once('../../config/db.php');
	include_once('../../models/product.php');

	$db = new db();

	$connect = $db->connect();

	$product = new Product($connect);
	$data = json_decode(file_get_contents("php://input"));
    //echo $data->product_name;
	//$product->product_name = $data->product_name;
    $select = $product->select($data->product_name);
    $num = $select->rowCount();
	if($num>0) {
        $select_arr = [];
		
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
        echo json_encode( $select_arr );
    }
	else{
		echo json_encode('fail');
	}

?>